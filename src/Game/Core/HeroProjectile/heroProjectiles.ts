import {HeroProjectile} from "./HeroProjectile";
import { snowBall } from "./HeroProjectileType/snowBall";

interface HeroProjectiles {
    snowBall: HeroProjectile,
}

export const heroProjectiles: HeroProjectiles = {

    snowBall: snowBall
}

