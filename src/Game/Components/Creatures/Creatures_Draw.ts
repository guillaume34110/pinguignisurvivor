import { GameData } from "../../Core/StartData/StartData";
import { animationEnemies, isOnScreen } from "../Game";
import { selectImg } from "./CreaturesSprites";



export const creaturesRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const god = gameData.god
    gameData.creatures.forEach((enemy, index) => {
        if (isOnScreen(god, enemy.spriteBox)) {
            targetGl.drawImage(
                selectImg(enemy.sprite.sprite),
                animationEnemies(16, enemy),
                0,
                16,
                16,
                enemy.spriteBox.x - god.spriteBox.x + 600,
                enemy.spriteBox.y - god.spriteBox.y + 300,
                enemy.spriteBox.w,
                enemy.spriteBox.h
            )
        }
    })
}

