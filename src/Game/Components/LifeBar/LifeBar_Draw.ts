import { LifeBar } from "../../Core/Creatures/Creature";
import { GameData, HitBox } from "../../Core/StartData/StartData";
import { isOnScreen } from "../Game";

export const lifeBarDraw = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const god = gameData.god
    const drawLifeBar = (lifeBar: LifeBar, fillColor: string, strokeColor: string) => {
        if (isOnScreen(god, lifeBar)) {
            targetGl.fillStyle = fillColor
            targetGl.strokeStyle = strokeColor;
            const x = lifeBar.x - god.spriteBox.x + 600
            const y = lifeBar.y - god.spriteBox.y + 300
            targetGl.fillRect(x, y, lifeBar.wCurrent, lifeBar.h)
            targetGl.strokeRect(x, y, lifeBar.wMax, lifeBar.h)
        }
    }
    gameData.creatures.forEach((creature) => {
        drawLifeBar(creature.lifeBar, "hsla(0, 100%, 70%,0.8)", 'black')
    })
}