import {GameData} from "../../StartData/StartData";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";

export const heroProjectileCollisions = (gameData: GameData) => {
    gameData.heroProjectiles.forEach((projectile) => {
        gameData.enemies.forEach((enemy) => {
            if (hitBoxMatch(enemy.hitBox, projectile.hitBox)){
                projectile.sleepPosition() // en -999_999 pour l'instant
                enemy.spriteBox.x = 999_999
                enemy.spriteBox.y = 999_999
                enemy.hitBox.x = 999_999
                enemy.hitBox.y = 999_999
            }
        })
    })
}