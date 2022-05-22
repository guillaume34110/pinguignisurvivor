import {GameData} from "../../StartData/StartData";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";

export const heroProjectileCollisions = (gameData: GameData) => {
    gameData.heroProjectiles.forEach((projectile) => {
        gameData.enemies.forEach((enemy) => {
            if (hitBoxMatch(enemy.hitBox, projectile.hitBox)){

                projectile.sleepPosition() // en -999_999 pour l'instant
                enemy.health -= projectile.damage

                if (enemy.health <= 0){

                    for (let i =0 ; i < gameData.items.length ; i++){
                        const item = gameData.items[i]
                        // todo create function in ItemClass
                        if (item.spriteBox.x < -999_000 && item.spriteBox.y < -999_000){
                            item.spriteBox.x = enemy.getCenterSpriteBox().x
                            item.spriteBox.y = enemy.getCenterSpriteBox().y
                            item.hitBox.x = enemy.getCenterSpriteBox().x
                            item.hitBox.y = enemy.getCenterSpriteBox().y
                            break
                        }
                    }

                    enemy.sleepPosition()
                    // todo reinitialiser ici ou au moment du spawn ?

                }
            }
        })
    })
}