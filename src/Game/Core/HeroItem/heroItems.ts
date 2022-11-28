import {HeroItem} from "./HeroItem";
import {heroProjectiles} from "../HeroProjectile/heroProjectiles";
import { snowBall } from "./HeroItemType/SnowBall";
import { leath } from "./HeroItemType/Leath";

interface HeroItems {
    snowBall: HeroItem,
    leath: HeroItem,
}

export const heroItems: HeroItems = {

    snowBall:snowBall,
    leath: leath
    
}
