import '../Style/components/Game.css'
import { GameData, HitBox, SpriteBoxInterface, startData } from '../Core/StartData/StartData'
import { keydownController, keyupController } from '../Core/KeysInputs/keys'
import { scaling } from '../Core/Scaling/scaling';
import Hud from "./Hud/Hud";
import { God } from "../Core/God/God";
import { Creature, LifeBar } from "../Core/Creatures/Creature";
import { initCore } from "../Core/init/init";
import { updateCore } from "../Core/update/Update";
import { draw } from "./DrawUpdate";


let coreInterval: NodeJS.Timer
const timeInterval = 16
let gameData: GameData = JSON.parse(JSON.stringify(startData))
let componentInitState = true
let frame = 0
let zoomFactor = 1
export const Game = () => {

    const gameHtml = `
        <div class="game">
         ${'' //  ${Hud()}  
        }
            <div class="camera">
                <canvas  width="12800" height="7200" class="scene" >
                </canvas>
            </div>
        </div>
   `
    const mainLoop = () => {
        updateCore(gameData)
    }

    const drawLoop = () => {
        const targetEnemy: HTMLCanvasElement | null = document.querySelector('.scene')
        const targetGl = targetEnemy?.getContext('2d')
        if (targetGl !== null && targetGl !== undefined) {
            frameInit(gameData, targetGl)
            draw(gameData, targetGl)

        }
        window.requestAnimationFrame(drawLoop)
    }

    const drawInit = () => {

        const html = document.querySelector('#root')
        if (html !== null)
            html.innerHTML = gameHtml
        const targetEnemy: HTMLCanvasElement | null = document.querySelector('.scene')
        const targetGl = targetEnemy?.getContext('2d')
        targetGl?.scale(zoomFactor, zoomFactor)

    }

    /*keyControl*/
    const keydown = (e: KeyboardEvent) => {
        keydownController(gameData.keys, e.key)
    }

    const keyup = (e: KeyboardEvent) => {
        keyupController(gameData.keys, e.key)
    }

    const zoom = (e: WheelEvent) => {
        if (e.deltaY > 0) zoomFactor += 0.1;
        else zoomFactor -= 0.1;
        if (zoomFactor < 0.4) zoomFactor = 0.4
        if (zoomFactor > 2) zoomFactor = 2
        const targetEnemy: HTMLCanvasElement | null = document.querySelector('.scene')
        const targetGl = targetEnemy?.getContext('2d')
        targetGl?.scale(zoomFactor, zoomFactor)
        console.log(e.deltaY, zoomFactor, "zoom")
    }
    /*Listeners*/

    const eventListeners = () => {
        document.addEventListener("keydown", keydown);
        document.addEventListener("keyup", keyup);
        document.addEventListener("wheel", zoom)
        window.addEventListener("resize", scaling);
    };

    const removeEventListeners = () => {
        document.removeEventListener("keydown", keydown);
        document.removeEventListener("keyup", keyup);
        window.removeEventListener("resize", scaling);
    };

    /*Initialization*/

    const componentInit = () => {
        eventListeners()
        gameData = JSON.parse(JSON.stringify(startData))
        initCore(gameData)
        drawInit()
        coreInterval = setInterval(mainLoop, timeInterval);
        window.requestAnimationFrame(drawLoop)
        scaling()
        // return () => {
        //     removeEventListeners()
        //     clearInterval(intervale)
        // }
    }
    if (componentInitState) componentInit()
    const frameInit = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
        if (frame < 60) frame++
        else frame = 0
        //targetGl.imageSmoothingEnabled = false
        targetGl.clearRect(0, 0, 5120, 2880)

    }
}

export const isOnScreen = (hero: God, spriteBox: SpriteBoxInterface | HitBox | LifeBar): Boolean => {
    if (spriteBox.x < (hero.spriteBox.x + (700 * zoomFactor)) && spriteBox.x > (hero.spriteBox.x - (700 * zoomFactor))
        && spriteBox.y < (hero.spriteBox.y + (500 * zoomFactor)) && spriteBox.y > (hero.spriteBox.y - (500 * zoomFactor))) {
        return true
    } else return false
}

export const animation4Frames = (w: number): number => {
    if (frame <= 15) {
        return w
    } else if (frame <= 30) {
        return 2 * w
    } else if (frame <= 45) {
        return 3 * w
    } else if (frame <= 60) {
        return 0
    } else return 0
}


export const animationEnemies = (w: number, enemy: Creature): number => {

    if (enemy.id % 2 === 0) {
        if (frame <= Math.random() * 10) {
            return w
        } else if (frame <= 10 + Math.random() * 10) {
            return 2 * w
        } else if (frame <= 30 + Math.random() * 10) {
            return 3 * w
        } else if (frame <= 50 + Math.random() * 10) {
            return 0
        } else return 0
    } else if (enemy.id % 3 === 0) {
        if (frame <= Math.random() * 10) {
            return 2 * w
        } else if (frame <= 10 + Math.random() * 10) {
            return 3 * w
        } else if (frame <= 30 + Math.random() * 10) {
            return 0
        } else if (frame <= 50 + Math.random() * 10) {
            return w
        } else return w
    } else {
        if (frame <= Math.random() * 10) {
            return 0
        } else if (frame <= 10 + Math.random() * 10) {
            return w
        } else if (frame <= 30 + Math.random() * 10) {
            return 2 * w
        } else if (frame <= 50 + Math.random() * 10) {
            return 3 * w
        } else return 3 * w
    }
}