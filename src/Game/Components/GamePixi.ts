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

import { settings } from 'pixi.js';
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
        if (zoomFactor <= 0.4 ) zoomFactor =0.45
        if (zoomFactor >= 1.6) zoomFactor = 1.55
        console.log(zoomFactor);
         if(  zoomFactor > 0.4 &&  zoomFactor < 1.6){   
            if(e.deltaY > 0)zoomFactor -= 0.05
             else zoomFactor += 0.05
            }
       targetEnemy?.stage.scale.set(zoomFactor, zoomFactor)
       gameData.god.spriteBox.speed = gameData.god.speed * (1/zoomFactor)
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
         coreInterval = setInterval(mainLoop, timeInterval);
        drawInit()
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
    if (spriteBox.x < (hero.spriteBox.x  + 1200*(1/zoomFactor)) && spriteBox.x > (hero.spriteBox.x  - 1200*(1/zoomFactor))
        && spriteBox.y < (hero.spriteBox.y + 800*(1/zoomFactor)) && spriteBox.y > (hero.spriteBox.y - 800*(1/zoomFactor))) {
        return true
    } else return false
}

