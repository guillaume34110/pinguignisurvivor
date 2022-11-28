import {GameData} from "../../StartData/StartData";

export const projectileRemove = (gameData: GameData) => {
    gameData.heroProjectiles.forEach(projectile => {
        if (projectile.spriteBox.x > gameData.hero.spriteBox.x + 2000
            || projectile.spriteBox.x < gameData.hero.spriteBox.x - 2000
            || projectile.spriteBox.y < gameData.hero.spriteBox.y + 2000
            || projectile.spriteBox.y < gameData.hero.spriteBox.y - 2000
        )projectile.assignParameters("none")

            }
    )
}