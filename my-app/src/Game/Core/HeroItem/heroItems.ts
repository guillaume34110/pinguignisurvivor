import {HeroItem} from "./HeroItem";
import {heroProjectiles} from "../HeroProjectile/heroProjectiles";
import {heroSupplies} from "../HeroSupply/heroSupplies";

interface HeroItems {
    snowBall: HeroItem,
    leath: HeroItem,
}

export const heroItems: HeroItems = {

    snowBall: {
        sprite: "snowBall image to link with css",
        type: "projectile",
        level: 0,
        rarity: 1,
        projectile: heroProjectiles.snowBall,
        supply: null,
    },

    leath: {
        sprite: "snowBall image to link with css",
        type: "supply",
        level: 0,
        rarity: 1,
        projectile: null,
        supply: heroSupplies.leath,
    }

}
