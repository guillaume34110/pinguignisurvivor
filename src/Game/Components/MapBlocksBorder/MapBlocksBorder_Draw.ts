import { GameData } from '../../Core/StartData/StartData';
import {  isOnScreen } from '../Game';

import * as PIXI from 'pixi.js'
import { selectTexture } from './MapBlocksBorderSprites';


export const mapBlocksBorderRefresh = (gameData: GameData, targetPixi: PIXI.Application) => {
    const god = gameData.god
    gameData.mapBlocksBorder.forEach(mapBlockBorder => {
        if (isOnScreen(god, mapBlockBorder.spriteBox)) {   
            const sprite = new PIXI.Sprite(selectTexture(mapBlockBorder.sprite))
            sprite.x = mapBlockBorder.spriteBox.x - god.spriteBox.x + 600
            sprite.y = mapBlockBorder.spriteBox.y - god.spriteBox.y + 300
            sprite.width = ~~ mapBlockBorder.spriteBox.w
            sprite.height = ~~ mapBlockBorder.spriteBox.h
            targetPixi.stage.addChild(sprite)
        }
    })
}
