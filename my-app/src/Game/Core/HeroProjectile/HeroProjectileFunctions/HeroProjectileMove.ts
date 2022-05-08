import {HeroProjectile} from "../HeroProjectile";

export const heroProjectileMove = (
    projectile: HeroProjectile
) => {
    projectile.spriteBox.x += projectile.spriteBox.direction.x
    projectile.spriteBox.y += projectile.spriteBox.direction.y
}