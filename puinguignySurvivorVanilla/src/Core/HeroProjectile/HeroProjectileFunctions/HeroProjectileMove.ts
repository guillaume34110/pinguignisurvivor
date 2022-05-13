import { GameData } from "../../StartData/StartData.js";
import {HeroProjectile} from "../HeroProjectile.js";

export const heroProjectileMove = (
    projectile : HeroProjectile
) => {
        projectile.spriteBox.x += projectile.spriteBox.direction.x
        projectile.spriteBox.y += projectile.spriteBox.direction.y
}
export const heroProjectileMoves = (gameData:GameData) => {
    gameData.heroProjectiles .forEach((projectile) => {heroProjectileMove(projectile) })
}