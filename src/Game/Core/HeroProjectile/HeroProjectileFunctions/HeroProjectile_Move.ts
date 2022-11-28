import {GameData} from "../../StartData/StartData";
import {HeroProjectileClass} from "../HeroProjectile";
import {spriteBoxSetDirectionWithRadian} from "../../Utilities/spriteBox/directionSpriteBox";
import {projectile_ResetPosition} from "./Projectile_ResetPosition";

export const hero_ProjectileMove = (
    gameData: GameData,
    projectile: HeroProjectileClass
) => {
    if (projectile.intervalActual >= projectile.interval) {
        spriteBoxSetDirectionWithRadian(projectile.spriteBox, gameData.hero.spriteBox.direction.radian)
        projectile_ResetPosition(projectile , gameData)
        projectile.intervalActual = 0
    } else {
        projectile.spriteBox.x += projectile.spriteBox.direction.x
        projectile.spriteBox.y += projectile.spriteBox.direction.y
        projectile.hitBox.x += projectile.spriteBox.direction.x
        projectile.hitBox.y += projectile.spriteBox.direction.y
        projectile.intervalActual++
    }
}
export const heroProjectileMoves = (gameData: GameData) => {
    gameData.heroProjectiles.forEach((projectile) => {
       // heroProjectileMove(gameData, projectile)
    })
}