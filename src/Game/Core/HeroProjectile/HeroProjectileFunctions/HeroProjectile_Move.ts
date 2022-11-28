import {GameData} from "../../StartData/StartData";
import {spriteBoxSetDirectionWithRadian} from "../../Utilities/spriteBox/directionSpriteBox";
import { HeroProjectile } from "../HeroProjectile";
import {projectile_ResetPosition} from "./Projectile_ResetPosition";

export const heroProjectile_Move = (
    gameData: GameData,
    projectile: HeroProjectile
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
export const hero_ProjectileMoves = (gameData: GameData) => {
    gameData.heroProjectiles.forEach((projectile) => {
       // heroProjectileMove(gameData, projectile)
    })
}