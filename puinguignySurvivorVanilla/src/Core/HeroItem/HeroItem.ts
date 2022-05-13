import {HeroProjectile} from "../HeroProjectile/HeroProjectile.js";
import {HeroSupply} from "../HeroSupply/HeroSupply.js";

export interface HeroItem {
    sprite: string,
    type: string,
    level: number,
    rarity: number,
    projectile: HeroProjectile | null,
    supply: HeroSupply | null,
}

export const heroItemGeneric: HeroItem = {
    sprite: "heroItemGeneric",
    type: "generic",
    level: 0,
    rarity: 0,
    projectile: null,
    supply: null,
}