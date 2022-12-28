import { GameData } from '../../Core/StartData/StartData';
import { isOnScreen } from '../GamePixi';
import { selectImg, selectTexture } from './MapBoxSprites';

import * as PIXI from 'pixi.js'

export const mapBlocksRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {

    const god = gameData.god

    gameData.mapBlocks.forEach(mapBlock => {
        if (isOnScreen(god, mapBlock.spriteBox)) {
            targetGl.drawImage(
                selectImg(mapBlock.sprite),
                0,
                0,
                32,
                32,
                mapBlock.spriteBox.x - god.spriteBox.x + 600,
                mapBlock.spriteBox.y - god.spriteBox.y + 300,
                mapBlock.spriteBox.w,
                mapBlock.spriteBox.h
            )
        }
    })

}

export const mapBlocksRefreshPixi = (gameData: GameData, targetPixi: PIXI.Application) => {

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
