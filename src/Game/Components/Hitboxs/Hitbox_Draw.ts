import { isOnScreen } from  "../Game";
import { GameData, HitBox, SensorType } from '../../Core/StartData/StartData';

import * as PIXI from 'pixi.js'


//const cachedRects = new Map<HitBox, { rect: PIXI.Graphics, fillColor: number, strokeColor: number }>()
export const hitBoxRefreshPixi = (gameData: GameData, target: PIXI.Application) => {
    const god = gameData.god
    const drawHitBox = (hitBox: HitBox, fillColor: number, strokeColor: number) => {
        if (isOnScreen(god, hitBox)) {
            //const cachedRectData = cachedRects.get(hitBox)
            const x = hitBox.x - god.spriteBox.x + 600
            const y = hitBox.y - god.spriteBox.y + 300
            let rect: PIXI.Graphics
            /*if (cachedRectData) {
                rect = cachedRectData.rect 
                rect.beginFill(fillColor)
                rect.alpha = 0.5;
                rect.lineStyle(1, strokeColor)
                rect.drawRect(x, y, hitBox.w, hitBox.h)
                rect.endFill()
            } else {*/
                rect = new PIXI.Graphics()
                rect.beginFill(fillColor)
                rect.alpha = 0.5;
                rect.lineStyle(1, strokeColor)
                rect.drawRect(x, y, hitBox.w, hitBox.h)
                rect.endFill()
                target.stage.addChild(rect)
            /*}
            cachedRects.set(hitBox, { rect, fillColor, strokeColor })*/
        }
    }

    gameData.creatures.forEach((creature) => {
        drawHitBox(creature.spriteBox, 0x4e2a04, 0xffa500)
        creature.sensors.sensors.forEach(sensor => {
            const newBox: HitBox = { x: sensor.x, y: sensor.y, w: sensor.w, h: sensor.h }
            if (creature.hunting === true && sensor.type === SensorType.Hunt){
                drawHitBox(newBox, 0x55d134, 0xff0000)
            }
            else if (sensor.flag === false)
                drawHitBox(newBox, 0x29d134, 0xff0000)
            else
                drawHitBox(newBox, 0xB30000, 0xff0000)
        })
    })
    gameData.items.forEach((item) => {
        drawHitBox(item.hitBox, 0x29d134, 0xff0000)
    })
   
  /*  for(let [key, value] of cachedRects.entries()){
        if (!isOnScreen(god,key)){
                target.stage.removeChild(value.rect);
                cachedRects.delete(key);
        }

}*/
}