import { GameData, Sprite } from '../../Core/StartData/StartData';
import { animationEnemies, isOnScreen } from "../Game";
import { selectImg } from "./CreaturesSprites";



export const creaturesRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
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
        }
    })
}

