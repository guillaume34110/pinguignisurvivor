import { GameData, Sprite } from '../../Core/StartData/StartData';
import { animationEnemies, isOnScreen } from "../Game";
import { selectImg, selectImgPixi } from "./CreaturesSprites";

import * as PIXI from 'pixi.js'


export const creatures_Refresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const god = gameData.god
    gameData.creatures.forEach(creature => {
        if (isOnScreen(god, creature.spriteBox)) {
            targetGl.drawImage(
                selectImg(creature.sprite.sprite),
                animationEnemies(16, creature),
                0,
                16,
                16,
                creature.spriteBox.x - god.spriteBox.x + 600,
                creature.spriteBox.y - god.spriteBox.y + 300,
                creature.spriteBox.w,
                creature.spriteBox.h
            )
            createImageBitmap( selectImg(creature.sprite.sprite), 0, 0, 1, 1)
        }
    })
}


// pixi 

export const creatures_RefreshPixi = (gameData: GameData, targetGl: PIXI.Application) => {
    const god = gameData.god
    gameData.creatures.forEach(creature => {
        if (isOnScreen(god, creature.spriteBox)) {
            const sprite = new PIXI.Sprite(selectImgPixi(creature.sprite.sprite))
            sprite.x = creature.spriteBox.x - god.spriteBox.x + 600
            sprite.y = creature.spriteBox.y - god.spriteBox.y + 300
            sprite.width = creature.spriteBox.w
            sprite.height = creature.spriteBox.h
            sprite.texture.frame =new PIXI.Rectangle(0, 0, 16, 16);

            targetGl.stage.addChild(sprite)
        }
    })
}
