import { DirectionProjectile, HeroProjectile } from "./HeroProjectile";

export const heroProjectileSetDirection = (
    projectile: HeroProjectile, directionToSet: DirectionProjectile
) => {
    switch (directionToSet) {
        case DirectionProjectile.Up: {
            projectile.direction.x = 0
            projectile.direction.y = -projectile.speed
            break
        }
        case DirectionProjectile.Down: {
            projectile.direction.x = 0
            projectile.direction.y = projectile.speed
            break
        }
        case DirectionProjectile.Left: {
            projectile.direction.x = -projectile.speed
            projectile.direction.y = 0
            break
        }
        case DirectionProjectile.Right: {
            projectile.direction.x = projectile.speed
            projectile.direction.y = 0
            break
        }
        case DirectionProjectile.DownRight: {
            heroProjectileSetDirectionByAngle(projectile, Math.PI / 4)
            break
        }
        case DirectionProjectile.DownLeft: {
            heroProjectileSetDirectionByAngle(projectile,  3 * (Math.PI / 4))
            break
        }
        case DirectionProjectile.UpLeft: {
            heroProjectileSetDirectionByAngle(projectile, 5 * (Math.PI / 4))
            break
        }
        case DirectionProjectile.UpRight: {
            heroProjectileSetDirectionByAngle(projectile, 7 * (Math.PI / 4))
            break
        }
        case DirectionProjectile.Random: {
            heroProjectileSetDirectionByAngle(projectile, Math.random() * Math.PI * 2)
            break
        }
        default: {
            break
        }
    }
}

export const heroProjectileSetDirectionByAngle = (
    projectile: HeroProjectile, radAngle: number
) => {
    projectile.direction.x = Math.cos(radAngle) * projectile.speed
    projectile.direction.y = Math.sin(radAngle) * projectile.speed
}