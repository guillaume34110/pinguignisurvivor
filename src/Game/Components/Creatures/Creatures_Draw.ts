import { GameData} from '../../Core/StartData/StartData';
import { animation4Frames, isOnScreen } from "../Game";
import {  selectImgPixi } from "./CreaturesSprites";

import * as PIXI from 'pixi.js'

export const creatures_RefreshPixi = (gameData: GameData, targetGl: PIXI.Application) => {
    const god = gameData.god
    gameData.creatures.forEach(creature => {
        if (isOnScreen(god, creature.spriteBox)) {
            const sprite = new PIXI.Sprite(selectImgPixi(creature.sprite.sprite , creature.sex))
            sprite.x = creature.spriteBox.x - god.spriteBox.x + 600
            sprite.y = creature.spriteBox.y - god.spriteBox.y + 300
            sprite.width = creature.spriteBox.w
            sprite.height = creature.spriteBox.h
            sprite.texture.frame =new PIXI.Rectangle(animation4Frames(16), 0, 16, 16);
        
            targetGl.stage.addChild(sprite)
        }
    })
}
