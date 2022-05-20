import {GameData} from "../../Core/StartData/StartData";
import {animationEnemies, isOnScreen} from "../Game";
import {selectImg} from "./EnemiesSprites";



export const enemiesRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const hero = gameData.hero
    gameData.enemies.forEach((enemy, index) => {
        if (isOnScreen(hero, enemy.spriteBox)) {
            targetGl.drawImage(selectImg(enemy.sprite.sprite), animationEnemies(16, enemy), 0, 16, 16, enemy.spriteBox.x - hero.spriteBox.x + 600, enemy.spriteBox.y - hero.spriteBox.y + 300, 64, 128)
        }
    })
}

