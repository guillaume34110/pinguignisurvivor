import {GameData} from "../../StartData/StartData";
import {heroProjectile_AssignNewParameters} from "../HeroProjectile";

export const projectile_Shoot = (gameData: GameData) => {
    const posX = gameData.hero.spriteBox.x + gameData.hero.spriteBox.w / 2
    const posY = gameData.hero.spriteBox.y + gameData.hero.spriteBox.h / 2

    gameData.hero.inventory.forEach(item => {
        if (item.coolDownCounter >= item.coolDownCounter) {
            item.coolDownCounter = 0
            gameData.heroProjectiles.forEach(projectile => {
                    if (projectile.type === "none") {
                        heroProjectile_AssignNewParameters(projectile , item.projectile)
                        projectile.spriteBox.x = posX
                        projectile.spriteBox.y = posY

                    }
                }
            )
        } else item.coolDownCounter++

    })
}