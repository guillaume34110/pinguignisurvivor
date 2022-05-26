import '../Style/components/Game.css'
import {GameData, HitBox, SpriteBox, startData} from '../Core/StartData/StartData'
import {keydownController, keyupController} from '../Core/KeysInputs/keys'
import {scaling} from '../Core/Scaling/scaling'
import {heroUpdate} from "../Core/Hero/HeroUpdate";
import {buildingInit} from "../Core/Building/BuildingInit";
import {enemiesUpdate} from "../Core/Enemies/EnemiesUpdate";
import Hud from "./Hud/Hud";
import {heroRefresh} from "./Hero/Hero";
import {enemiesRefresh} from "./Enemies/Enemies";
import {Hero} from "../Core/Hero/Hero";
import {buildingUpdate} from "../Core/Building/BuildingUpdate";
import {heroProjectileUpdate} from "../Core/HeroProjectile/HeroProjectileUpdate";
import {Enemy} from "../Core/Enemies/Enemy";
import {buildingsRefresh} from "./buildings/Buildings";
import {hitBoxRefresh} from "./Hitboxs/Hitbox";
import {projectileRefresh} from "./Projectiles/Projectiles";
import {itemsRefresh} from "./Items/Items";
import {terrainRefresh} from "./Terrain";


let coreInterval: NodeJS.Timer
const timeInterval = 16
let gameData: GameData = JSON.parse(JSON.stringify(startData))
let componentInitState = true
let frame = 0
export const Game = () => {

    const gameHtml = `
        <div class="game">
            ${Hud()}  
            <div class="camera">
                <canvas  width="1280" height="720" class="scene" >
                </canvas>
            </div>
        </div>
   `
    const mainLoop = () => {

        heroUpdate(gameData)
        enemiesUpdate(gameData)
        heroProjectileUpdate(gameData)
        buildingUpdate(gameData)

    }

    const drawLoop = () => {
        const targetEnemy: HTMLCanvasElement | null = document.querySelector('.scene')
        const targetGl = targetEnemy?.getContext('2d')
        if (targetGl !== null && targetGl !== undefined) {
            frameInit(gameData, targetGl)
            terrainRefresh(gameData, targetGl)
            buildingsRefresh(gameData, targetGl)
            projectileRefresh(gameData, targetGl)
            itemsRefresh(gameData, targetGl)
            enemiesRefresh(gameData, targetGl)
            heroRefresh(gameData, targetGl)
            hitBoxRefresh(gameData, targetGl)
        }
        window.requestAnimationFrame(drawLoop)
    }

    const drawInit = () => {

        const html = document.querySelector('#root')
        if (html !== null)
            html.innerHTML = gameHtml
    }

    /*keyControl*/
    const keydown = (e: KeyboardEvent) => {
        keydownController(gameData.keys, e.key)
    }

    const keyup = (e: KeyboardEvent) => {
        keyupController(gameData.keys, e.key)
    }

    /*Listeners*/

    const eventListeners = () => {
        document.addEventListener("keydown", keydown);
        document.addEventListener("keyup", keyup);
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
        buildingInit(gameData)
        gameData.hero.spriteBox.speed = 10
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
        targetGl.imageSmoothingEnabled = false
        targetGl.clearRect(0, 0, 1280, 720)
    }
}

export const isOnScreen = (hero: Hero, spriteBox: SpriteBox | HitBox): Boolean => {
    if (spriteBox.x < (hero.spriteBox.x + 700) && spriteBox.x > (hero.spriteBox.x - 680)
        && spriteBox.y < (hero.spriteBox.y + 400) && spriteBox.y > (hero.spriteBox.y - 400)) {
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


export const animationEnemies = (w: number, enemy: Enemy): number => {

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