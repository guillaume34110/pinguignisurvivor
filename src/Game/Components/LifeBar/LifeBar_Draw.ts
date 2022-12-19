import { LifeBar, CreatureSex, Creature } from '../../Core/Creatures/Creature';
import { GameData, HitBox, SpriteBox } from '../../Core/StartData/StartData';
import { isOnScreen } from "../Game";

export const lifeBarDraw = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const god = gameData.god
    const drawLifeBar = (lifeBar: LifeBar, fillColor: string, strokeColor: string , creature : Creature) => {
        if (isOnScreen(god, lifeBar)) {
            targetGl.fillStyle = fillColor
            targetGl.strokeStyle = strokeColor;
            const x = lifeBar.x - god.spriteBox.x + 600
            const y = lifeBar.y - god.spriteBox.y + 300
            targetGl.fillRect(x, y, lifeBar.wCurrent, lifeBar.h)
            targetGl.strokeRect(x, y, lifeBar.wMax, lifeBar.h)
            targetGl.fillText(creature.spriteBox.direction.radian.toString() , x , y-20)
        }
    }
    gameData.creatures.forEach((creature) => {
       if(creature.sex === CreatureSex.Female) drawLifeBar(creature.lifeBar, "hsla(302, 54%, 43%,0.8)", 'black' ,creature)
       if(creature.sex === CreatureSex.Male) drawLifeBar(creature.lifeBar, "hsla(18, 54%, 43%,0.8)", 'black', creature)
    })
}