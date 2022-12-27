import '../Style/components/Game.css'
import { GameData, HitBox, SpriteBoxInterface, startData } from '../Core/StartData/StartData'
import { keydownController, keyupController } from '../Core/KeysInputs/keys'
import { scaling } from '../Core/Scaling/scaling';
import { God } from "../Core/God/God";
import { Creature, LifeBar } from "../Core/Creatures/Creature";
import { initCore } from "../Core/init/init";
import { updateCore } from "../Core/update/Update";
import { draw, drawPixi } from './DrawUpdate';
import * as PIXI from 'pixi.js'


let coreInterval: NodeJS.Timer
const timeInterval = 16
let gameData: GameData = JSON.parse(JSON.stringify(startData))
let componentInitState = true
let targetEnemy: PIXI.Application | null = null
export let frame = 0
let zoomFactor = 1

export const GamePixi = () => {

   
    const mainLoop = () => {
        updateCore(gameData)
    }

    const drawLoop = () => {
        const targetGl = targetEnemy;
        if (targetGl !== null && targetGl !== undefined) {
            frameInit(gameData, targetGl)
            drawPixi(gameData, targetGl)

        }
        window.requestAnimationFrame(drawLoop)
    }

    const drawInit = () => {

        const html = document.querySelector('#root')
        if (html !== null)
       targetEnemy  = new PIXI.Application({
            width: 1280,
            height: 720,
            antialias: true
        });
        //@ts-ignore
        html?.appendChild(targetEnemy.view);
        const targetGl = targetEnemy?.stage;
        targetGl?.scale.set(1, 1)

    }

    /*keyControl*/
    const keydown = (e: KeyboardEvent) => {
        keydownController(gameData.keys, e.key)
    }

    const keyup = (e: KeyboardEvent) => {
        keyupController(gameData.keys, e.key)
    }

    const zoom = (e: WheelEvent) => {
        let currentZoom = 1
        console.log(zoomFactor);
        if (e.deltaY > 0 && zoomFactor < 20) {
            currentZoom = 0.9
            zoomFactor ++ 
        }
        else if(e.deltaY < 0 && zoomFactor > -20){
             currentZoom = 1.111111
             zoomFactor -- 
            }
       targetEnemy?.stage.scale.set(currentZoom, currentZoom)
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
    const frameInit = (gameData: GameData, targetGl: PIXI.Application) => {
        if (frame < 60) frame++
        else frame = 0
        targetGl.stage.removeChildren();
    }
}

export const isOnScreen = (hero: God, spriteBox: SpriteBoxInterface | HitBox | LifeBar): Boolean => {
    if (zoomFactor> 0){
    if (spriteBox.x < (hero.spriteBox.x + (700*(zoomFactor))) && spriteBox.x > (hero.spriteBox.x - (700*(zoomFactor)))
        && spriteBox.y < (hero.spriteBox.y + (500*(zoomFactor))) && spriteBox.y > (hero.spriteBox.y - (500*(zoomFactor)))) {
        return true
    } else return false}
    else {
       
        if (spriteBox.x < (hero.spriteBox.x + (700)) && spriteBox.x > (hero.spriteBox.x - (700))
        && spriteBox.y < (hero.spriteBox.y + (500)) && spriteBox.y > (hero.spriteBox.y - (500))) {
        return true
    } else return false
    }
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