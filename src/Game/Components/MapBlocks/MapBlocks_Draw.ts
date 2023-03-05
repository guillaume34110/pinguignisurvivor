import { GameData } from '../../Core/StartData/StartData';
import { isOnScreen } from '../Game';
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
            targetPixi.stage.addChild(sprite)
        }
    })
}
