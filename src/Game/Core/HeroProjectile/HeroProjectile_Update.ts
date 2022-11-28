import {GameData} from "../StartData/StartData";
import {heroProjectile_Collisions} from "./HeroProjectileFunctions/HeroProjectile_Collision";
import {projectile_Shoot} from "./HeroProjectileFunctions/Projectile_Shoot";
import {projectile_Remove} from "./HeroProjectileFunctions/Projectile_Remove";
import {projectile_Move} from "./HeroProjectileFunctions/Projectile_Move";


export const heroProjectileUpdate = (gameData:GameData) => {
    projectile_Shoot(gameData)
    projectile_Remove(gameData)
    projectile_Move(gameData)
    heroProjectile_Collisions(gameData)
}