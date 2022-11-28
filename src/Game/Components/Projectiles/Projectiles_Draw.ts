import projectileImg from "../../Assets/projectile/img.png";
import {GameData} from "../../Core/StartData/StartData";
import {animation4Frames, isOnScreen} from "../Game";

const image = new Image()
image.src = projectileImg

export const projectileRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const hero = gameData.hero
    gameData.heroProjectiles.forEach((projectile, index) => {
        if (isOnScreen(hero, projectile.spriteBox)) {
            targetGl.drawImage(
                image,
                animation4Frames(16),
                0,
                16,
                16,
                projectile.spriteBox.x - hero.spriteBox.x + 600,
                projectile.spriteBox.y - hero.spriteBox.y + 300,
                projectile.spriteBox.w,
                projectile.spriteBox.h
            )
        }
    })
}