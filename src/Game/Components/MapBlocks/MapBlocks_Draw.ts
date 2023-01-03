import { GameData } from '../../Core/StartData/StartData';
import { animation4Frames, isOnScreen } from '../Game';
import { selectTexture } from './MapBoxSprites';

import * as PIXI from 'pixi.js'


export const mapBlocksRefresh = (gameData: GameData, targetPixi: PIXI.Application) => {
    const god = gameData.god
    gameData.mapBlocks.forEach(mapBlock => {
        if (isOnScreen(god, mapBlock.spriteBox)) {   
            const sprite = new PIXI.Sprite(selectTexture(mapBlock.sprite))
            sprite.x = mapBlock.spriteBox.x - god.spriteBox.x + 600
            sprite.y = mapBlock.spriteBox.y - god.spriteBox.y + 300
            sprite.width = mapBlock.spriteBox.w
            sprite.height = mapBlock.spriteBox.h
             if (mapBlock.isAnimated) sprite.texture.frame =new PIXI.Rectangle(animation4Frames(32), 0, 32, 32);
            targetPixi.stage.addChild(sprite)
        }
    })
}
