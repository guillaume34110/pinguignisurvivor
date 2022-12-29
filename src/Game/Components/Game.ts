import '../Style/components/Game.css'
import { GameData, HitBox, SpriteBoxInterface, startData } from '../Core/StartData/StartData'
import { keydownController, keyupController } from '../Core/KeysInputs/keys'
import { scaling } from '../Core/Scaling/scaling';
import { God } from "../Core/God/God";
import { Creature, LifeBar } from "../Core/Creatures/Creature";
import { initCore } from "../Core/init/init";
import { updateCore } from "../Core/update/Update";
import { draw } from './DrawUpdate';
import * as PIXI from 'pixi.js'

import { settings } from 'pixi.js';
import { menu } from './Menu';
/*pixi config */
settings.RESOLUTION = window.devicePixelRatio;
settings.ROUND_PIXELS = true
settings.RENDER_OPTIONS.preserveDrawingBuffer = true
settings.RENDER_OPTIONS.antialias = true
settings.RENDER_OPTIONS.autoDensity = true
settings.STRICT_TEXTURE_CACHE = true
let coreInterval: NodeJS.Timer
const timeInterval = 16
let gameData: GameData = JSON.parse(JSON.stringify(startData))
export const componentInitState: Boolean[] = [false]
let targetEnemy: PIXI.Application | null = null
export let frame = 0
let zoomFactor = 1

/* * * ChristmasPanettone version :) * * * */

export const Game = () => {
    eventListeners()
    menu(gameData)
}

export const componentInit = (newGameData : GameData) => {
     gameData = JSON.parse(JSON.stringify(newGameData))
    initCore(gameData)
    coreInterval = setInterval(mainLoop, timeInterval);
    drawInit()
    window.requestAnimationFrame(drawLoop)
    scaling()
    // return () => {
    //     removeEventListeners()
    //     clearInterval(intervale)
    // }
}

const drawLoop = () => {
    const targetGl = targetEnemy;
    if (targetGl !== null && targetGl !== undefined) {
        frameCount(gameData, targetGl)
        draw(gameData, targetGl)
    }
    window.requestAnimationFrame(drawLoop)
}
const keydown = (e: KeyboardEvent) => {
    keydownController(gameData.keys, e.key)
}

const keyup = (e: KeyboardEvent) => {
    keyupController(gameData.keys, e.key)
}

const zoom = (e: WheelEvent) => {
    if (zoomFactor <= 0.4) zoomFactor = 0.45
    if (zoomFactor >= 1.6) zoomFactor = 1.55
    console.log(zoomFactor);
    if (zoomFactor > 0.4 && zoomFactor < 1.6) {
        if (e.deltaY > 0) zoomFactor -= 0.05
        else zoomFactor += 0.05
    }
    targetEnemy?.stage.scale.set(zoomFactor, zoomFactor)
    gameData.god.spriteBox.speed = gameData.god.speed * (1 / zoomFactor)
}

const frameCount = (gameData: GameData, targetGl: PIXI.Application) => {
    if (frame < 60) frame++
    else frame = 0
    targetGl.stage.removeChildren();
}

const drawInit = () => {

    const html = document.querySelector('#root')
    if (html !== null)
        targetEnemy = new PIXI.Application({
            width: 1280,
            height: 720,
            antialias: true
        });
    //@ts-ignore
    html?.appendChild(targetEnemy.view);
    const targetGl = targetEnemy?.stage;
    targetGl?.scale.set(1, 1)

}
const mainLoop = () => {
    updateCore(gameData)
}

const eventListeners = () => {
    document.addEventListener("keydown", keydown);
    document.addEventListener("keyup", keyup);
    document.addEventListener("wheel", zoom)
    window.addEventListener("resize", scaling);
};

export const isOnScreen = (hero: God, spriteBox: SpriteBoxInterface | HitBox | LifeBar): Boolean => {
    if (spriteBox.x < (hero.spriteBox.x + 1200 * (1 / zoomFactor)) && spriteBox.x > (hero.spriteBox.x - 1200 * (1 / zoomFactor))
        && spriteBox.y < (hero.spriteBox.y + 800 * (1 / zoomFactor)) && spriteBox.y > (hero.spriteBox.y - 800 * (1 / zoomFactor))) {
        return true
    } else return false
}


export const animation4FramesOLD = (w: number): number => {
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
export const animation4Frames = (w: number): number => {
    switch (true) {
        case frame <= 15:
            return w
        case frame <= 30:
            return 2 * w
        case frame <= 45:
            return 3 * w
        case frame <= 60:
            return 0
        default:
            return 0
    }
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