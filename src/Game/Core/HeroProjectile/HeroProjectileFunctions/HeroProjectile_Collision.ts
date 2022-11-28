import {GameData} from "../../StartData/StartData";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";
import {getCenterSpriteBox, setPositionSpriteBoxHitBox} from "../../Utilities/spriteBox/positionSpriteBox";

export const hero_ProjectileCollisions = (gameData: GameData) => {
    gameData.heroProjectiles.forEach((projectile) => {
        if(projectile.type !="none"){


        gameData.enemies.forEach((enemy) => {
            if (hitBoxMatch(enemy.hitBox, projectile.hitBox)){

                setPositionSpriteBoxHitBox(projectile,-999_999,-999_999)
                enemy.health -= projectile.damage

                if (enemy.health <= 0){
                    for (let i =0 ; i < gameData.items.length ; i++){
                        const item = gameData.items[i]
                        // todo create function in ItemClass folder
                        if (item.spriteBox.x < -999_000 && item.spriteBox.y < -999_000){
                            item.spriteBox.x = getCenterSpriteBox(enemy.spriteBox).x
                            item.spriteBox.y = getCenterSpriteBox(enemy.spriteBox).y
                            item.hitBox.x = getCenterSpriteBox(enemy.spriteBox).x
                            item.hitBox.y = getCenterSpriteBox(enemy.spriteBox).y
                            break
                        }
                    }
                    projectile.assignParameters("none")
                }
            }
        })
        }
    })
}

