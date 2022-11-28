import {GameData} from "../../StartData/StartData";

export const projectileMove = (gameData: GameData) => {
    gameData.heroProjectiles.forEach(projectile => {
        if (projectile.type != "none") {
            projectile.spriteBox.x = projectile.spriteBox.direction.x
            projectile.spriteBox.y = projectile.spriteBox.direction.y
        }
    })
}