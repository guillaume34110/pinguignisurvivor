import {spriteBoxSetDirectionWithRadian} from "../../Utilities/directionSpriteBox.js";
import {HeroProjectile, heroProjectileGeneric} from "../HeroProjectile.js";
import {startData} from "../../StartData/StartData.js";
import {heroProjectiles} from "../heroProjectiles.js";

export enum HeroProjectilesEnum {
    snowBall
}

export const heroProjectileInitialize = (
    heroProjectile: HeroProjectilesEnum,
    directionInRadian: number
): HeroProjectile => {

    let projectile: HeroProjectile = Object.create(heroProjectileGeneric)
    const hero = startData.hero

    if (heroProjectile === HeroProjectilesEnum.snowBall) {
        projectile = heroProjectiles.snowBall
        projectile.spriteBox.x = hero.spriteBox.x + (hero.spriteBox.w / 2)
        projectile.spriteBox.y = hero.spriteBox.y + (hero.spriteBox.h / 2)
        projectile.spriteBox.speed += hero.spriteBox.speed + hero.projectileSpeed
        spriteBoxSetDirectionWithRadian(projectile.spriteBox, directionInRadian)
        return projectile
    }

    return projectile
}