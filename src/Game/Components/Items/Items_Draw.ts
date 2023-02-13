
import {GameData} from "../../Core/StartData/StartData";
import {animation4Frames} from "../Game";
import { isOnScreen} from "../Game";
import {  selectImgPixi } from './ItemsSprites';

import * as PIXI from 'pixi.js'

export const items_RefreshPixi = (gameData: GameData, target: PIXI.Application) => {
    const god = gameData.god

    gameData.items.forEach((item) => {
        if (isOnScreen(god, item.spriteBox)) {
            let sprite = new PIXI.Sprite(selectImgPixi(item.sprite))
            sprite.x = item.spriteBox.x - god.spriteBox.x + 600;
            sprite.y = item.spriteBox.y - god.spriteBox.y + 300;
            sprite.width =  item.spriteBox.w
            sprite.height = item.spriteBox.h
            sprite.texture.frame =new PIXI.Rectangle(animation4Frames(32), 0, 32, 32);
            target.stage.addChild(sprite);
        }
    })
}

