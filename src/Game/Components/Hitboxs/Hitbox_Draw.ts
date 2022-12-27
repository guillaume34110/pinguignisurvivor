import { isOnScreen } from "../Game";
import { GameData, HitBox } from '../../Core/StartData/StartData';

import * as PIXI from 'pixi.js'

export const hitBoxRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const god = gameData.god
    const drawHitBox = (hitBox: HitBox, fillColor: string, strokeColor: string) => {
        if (isOnScreen(god, hitBox)) {
            targetGl.fillStyle = fillColor
            targetGl.strokeStyle = strokeColor;
            const x = hitBox.x - god.spriteBox.x + 600
            const y = hitBox.y - god.spriteBox.y + 300
            targetGl.fillRect(x, y, hitBox.w, hitBox.h)
            targetGl.strokeRect(x, y, hitBox.w, hitBox.h)
        }
    }



    /*creatures*/
    /* gameData.creatures.forEach((hitBox) => {
         drawHitBox(hitBox.hitBox,"hsla(0, 88%, 49%, 0.3)",'red')
     })*/

    /*sensors*/
    gameData.creatures.forEach((creature) => {
        creature.sensors.sensors.forEach(sensor => {

            const newBox: HitBox = { x: sensor.x, y: sensor.y, w: sensor.w, h: sensor.h }
            if (sensor.flag === false)
                drawHitBox(newBox, "hsla(116,100%,50%,0.3)", 'red')
            else
                drawHitBox(newBox, "red", 'red')
        })

    })

    /*items*/
    gameData.items.forEach((hitBox) => {
        drawHitBox(hitBox.hitBox, "hsla(25,100%,59%,0.3)", 'orange')
    })
}

const cachedRects = new Map<HitBox, { rect: PIXI.Graphics, fillColor: number, strokeColor: number }>()
export const hitBoxRefreshPixi = (gameData: GameData, target: PIXI.Application) => {
    const god = gameData.god
    const drawHitBox = (hitBox: HitBox, fillColor: number, strokeColor: number) => {
        if (isOnScreen(god, hitBox)) {
            const cachedRectData = cachedRects.get(hitBox)
            const x = hitBox.x - god.spriteBox.x + 600
            const y = hitBox.y - god.spriteBox.y + 300
            let rect: PIXI.Graphics
            if (cachedRectData) {
                rect = cachedRectData.rect
                rect.beginFill(fillColor)
                rect.alpha = 0.5;
                rect.lineStyle(1, strokeColor)
                rect.drawRect(x, y, hitBox.w, hitBox.h)
                rect.endFill()
            } else {
                rect = new PIXI.Graphics()
                rect.beginFill(fillColor)
                rect.alpha = 0.5;
                rect.lineStyle(1, strokeColor)
                rect.drawRect(x, y, hitBox.w, hitBox.h)
                rect.endFill()
                target.stage.addChild(rect)
            }
            cachedRects.set(hitBox, { rect, fillColor, strokeColor })
        }
    }

    gameData.creatures.forEach((creature) => {
        creature.sensors.sensors.forEach(sensor => {
            const newBox: HitBox = { x: sensor.x, y: sensor.y, w: sensor.w, h: sensor.h }
            if (sensor.flag === false)
                drawHitBox(newBox, 0x29d134, 0xff0000)
            else
                drawHitBox(newBox, 0xB30000, 0xff0000)
        })
    })
    gameData.items.forEach((hitBox) => {
        drawHitBox(hitBox.hitBox, 0x4e2a04, 0xffa500)
    })
}