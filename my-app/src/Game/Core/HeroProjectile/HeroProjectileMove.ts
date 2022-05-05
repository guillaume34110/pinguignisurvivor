import { HeroProjectile } from "./HeroProjectile";

export const heroProjectileMove = (
    projectile: HeroProjectile
) => {
    projectile.spriteBox.x += projectile.direction.x
    projectile.spriteBox.y += projectile.direction.y
}