import {HeroProjectile} from "../HeroProjectile/HeroProjectile";
import {HeroSupply} from "../HeroSupply/HeroSupply";

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