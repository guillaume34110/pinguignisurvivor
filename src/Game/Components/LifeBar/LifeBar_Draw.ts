import { LifeBar, CreatureSex, Creature } from '../../Core/Creatures/Creature';
import { GameData } from '../../Core/StartData/StartData';
import { isOnScreen } from "../GamePixi";

import * as PIXI from 'pixi.js'

export const lifeBarDraw = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const god = gameData.god
    const drawLifeBar = (lifeBar: LifeBar, fillColor: string, strokeColor: string , creature : Creature) => {
        if (isOnScreen(god, lifeBar)) {
            targetGl.fillStyle = fillColor
            targetGl.strokeStyle = strokeColor;
            targetGl.font = "20px Arial";
            const x = lifeBar.x - god.spriteBox.x + 600
            const y = lifeBar.y - god.spriteBox.y + 300
            targetGl.fillRect(x, y, lifeBar.wCurrent, lifeBar.h)
            targetGl.strokeRect(x, y, lifeBar.wMax, lifeBar.h)

            //targetGl.fillText((creature.spriteBox.direction.radian % (2*Math.PI) / Math.PI).toFixed(3) + " PI"  , x , y-20)
            targetGl.fillText(creature.coordinate.toString()  , x , y-20)
        }
    }
    gameData.creatures.forEach((creature) => {
       if(creature.sex === CreatureSex.Female) drawLifeBar(creature.lifeBar, "hsla(302, 54%, 43%,0.8)", 'black' ,creature)
       if(creature.sex === CreatureSex.Male) drawLifeBar(creature.lifeBar, "hsla(18, 54%, 43%,0.8)", 'black', creature)
    })
}
//pixi

export const lifeBarDrawPixi = (gameData: GameData, targetPixi: PIXI.Application) => {
    const god = gameData.god
    const drawLifeBar = (lifeBar: LifeBar, fillColor: number, strokeColor: number , creature : Creature) => {
        if (isOnScreen(god, lifeBar)) {
            const x = lifeBar.x - god.spriteBox.x + 600
            const y = lifeBar.y - god.spriteBox.y + 300

            const rect = new PIXI.Graphics();
            rect.beginFill(fillColor);
            rect.drawRect(x, y, lifeBar.wCurrent, lifeBar.h);
            rect.endFill();
            rect.lineStyle(1, 0x000000, 1);
            rect.drawRect(x, y, lifeBar.wMax, lifeBar.h);

            const text = new PIXI.Text(creature.coordinate.toString(), {
                fontSize: 20,
                fill: '#000000',
            });
            text.x = x;
            text.y = y - 20;
            targetPixi.stage.addChild(rect);
            targetPixi.stage.addChild(text);
        }
    }
    gameData.creatures.forEach((creature) => {
       if(creature.sex === CreatureSex.Female) drawLifeBar(creature.lifeBar, 0xF7D8D8, 0x000000 ,creature)
       if(creature.sex === CreatureSex.Male) drawLifeBar(creature.lifeBar, 0xC6E5F5, 0x000000, creature)
    })
}