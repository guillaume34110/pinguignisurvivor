import { LifeBar, CreatureSex, Creature } from '../../Core/Creatures/Creature';
import { GameData } from '../../Core/StartData/StartData';
import { isOnScreen } from "../Game";

import * as PIXI from 'pixi.js'

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