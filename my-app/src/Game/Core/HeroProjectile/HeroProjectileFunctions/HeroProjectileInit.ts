import {spriteBoxSetDirectionWithRadian} from "../../Utilities/directionSpriteBox";
import {HeroProjectile, heroProjectileGeneric} from "../HeroProjectile";
import {startData} from "../../StartData/StartData";

export enum HeroProjectilesEnum {
    snowBall
}

export const heroProjectileInitialize = (
    heroProjectile: HeroProjectilesEnum,
    directionInRadian: number
): HeroProjectile => {

    const projectile: HeroProjectile = Object.create(heroProjectileGeneric)
    const hero = startData.hero
    projectile.spriteBox.x = hero.spriteBox.x + (hero.spriteBox.w / 2)
    projectile.spriteBox.y = hero.spriteBox.y + (hero.spriteBox.h / 2)

    if (heroProjectile === HeroProjectilesEnum.snowBall) {
        projectile.sprite = "snowBall"
        projectile.spriteBox.speed = hero.spriteBox.speed + 1 + hero.projectileSpeed
        spriteBoxSetDirectionWithRadian(projectile.spriteBox, directionInRadian)
        projectile.type = "snowBall"
        projectile.damage = 1 + hero.projectileMight
        return projectile
    }

    return projectile
}