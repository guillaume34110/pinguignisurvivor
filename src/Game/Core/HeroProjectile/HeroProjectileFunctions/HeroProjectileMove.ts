import {GameData} from "../../StartData/StartData";
import {HeroProjectileClass} from "../HeroProjectile";
import {spriteBoxSetDirectionWithRadian} from "../../Utilities/spriteBox/directionSpriteBox";
import {heroProjectileResetPosition} from "./HeroProjectileResetPosition";

export const heroProjectileMove = (
    gameData: GameData,
    projectile: HeroProjectileClass
) => {
    if (projectile.intervalActual >= projectile.interval) {
        spriteBoxSetDirectionWithRadian(projectile.spriteBox, gameData.hero.spriteBox.direction.radian)
        heroProjectileResetPosition(projectile, gameData.hero)
        projectile.intervalActual = 0
    } else {
        projectile.spriteBox.x += projectile.spriteBox.direction.x
        projectile.spriteBox.y += projectile.spriteBox.direction.y
        projectile.hitBox.x += projectile.spriteBox.direction.x
        projectile.hitBox.y += projectile.spriteBox.direction.y
        projectile.intervalActual++
    }
}
export const heroProjectilesMove = (gameData: GameData) => {
    gameData.heroProjectiles.forEach((projectile) => {
        heroProjectileMove(gameData, projectile)
    })
}