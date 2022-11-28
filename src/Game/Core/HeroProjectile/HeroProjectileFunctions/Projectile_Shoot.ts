import {GameData} from "../../StartData/StartData";

export const projectileShoot = (gameData: GameData) => {
    const posX = gameData.hero.spriteBox.x + gameData.hero.spriteBox.w / 2
    const posY = gameData.hero.spriteBox.y + gameData.hero.spriteBox.h / 2

    gameData.hero.inventory.forEach(item => {
        if (item.coolDownCounter >= item.coolDownCounter) {
            item.coolDownCounter = 0
            gameData.heroProjectiles.forEach(projectile => {
                    if (projectile.type === "none") {
                        projectile.assignParameters(item.projectile)
                        projectile.spriteBox.x = posX
                        projectile.spriteBox.y = posY

                    }
                }
            )
        } else item.coolDownCounter++

    })
}