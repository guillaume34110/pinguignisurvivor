import {HeroProjectile} from "../HeroProjectile/HeroProjectile";
import {heroProjectiles} from "../HeroProjectile/heroProjectiles";

export interface HeroItem {
    sprite: String,

    type: String,
    level: number,
    coolDown: number,
    projectile: HeroProjectile,
    coolDownCounter: number,
}

export const heroItemGeneric: HeroItem = {
    sprite: "heroItemGeneric",
    type: "generic",
    level: 0,
    coolDown: 0,
    projectile: heroProjectiles.snowBall,
    coolDownCounter: 0,
}