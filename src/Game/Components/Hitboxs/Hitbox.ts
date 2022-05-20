import {isOnScreen} from "../Game";
import {GameData} from "../../Core/StartData/StartData";


export const hitBoxRefresh = (gameData: GameData , targetGl:CanvasRenderingContext2D) => {


    const hero = gameData.hero

        gameData.enemies.forEach((hitbox) => {
            if (isOnScreen(hero, hitbox.spriteBox)) {
                targetGl.fillStyle = "hsla(0, 88%, 49%, 0.3)"
                targetGl.strokeStyle = 'red';
                const x = hitbox.hitBox.x - hero.spriteBox.x + 600
                const y = hitbox.hitBox.y - hero.spriteBox.y + 300
                targetGl.fillRect(x, y, hitbox.hitBox.w, hitbox.hitBox.h)
                targetGl.strokeRect(x, y, hitbox.hitBox.w, hitbox.hitBox.h)
            }
        })
        targetGl.fillStyle = "hsla(242, 88%, 49%, 0.3)"
        targetGl.strokeStyle = 'blue';
        const x = 600 + (hero.spriteBox.x -hero.hitBox.x)
        const y = 320 + (hero.spriteBox.y - hero.hitBox.y)
        targetGl.fillRect(x, y, hero.hitBox.w, hero.hitBox.h)
        targetGl.strokeRect(x, y, hero.hitBox.w, hero.hitBox.h)

}