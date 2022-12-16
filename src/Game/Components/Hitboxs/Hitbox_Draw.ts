import { isOnScreen } from "../Game";
import { GameData, HitBox } from '../../Core/StartData/StartData';


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
            drawHitBox(newBox, "hsla(116,100%,50%,0.3)", 'red')
        })

    })

    /*items*/
    gameData.items.forEach((hitBox) => {
        drawHitBox(hitBox.hitBox, "hsla(25,100%,59%,0.3)", 'orange')
    })
}
