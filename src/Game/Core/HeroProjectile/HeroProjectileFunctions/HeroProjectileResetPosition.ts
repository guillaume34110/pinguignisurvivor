import {HeroProjectileClass} from "../HeroProjectile";
import {Hero} from "../../Hero/Hero";

export const heroProjectileResetPosition = (heroProjectile: HeroProjectileClass, hero: Hero) => {
    heroProjectile.spriteBox.x = heroProjectile.posXSpriteBoxInit + hero.spriteBox.x
    heroProjectile.spriteBox.y = heroProjectile.posYSpriteBoxInit + hero.spriteBox.y
    heroProjectile.hitBox.x = heroProjectile.posXHitBoxInit + hero.spriteBox.x
    heroProjectile.hitBox.y = heroProjectile.posYHitBoxInit + hero.spriteBox.y
}