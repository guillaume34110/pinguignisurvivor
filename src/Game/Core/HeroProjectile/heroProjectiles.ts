import {HeroProjectileClass} from "./HeroProjectile";
import {DirectionInRadian} from "../Utilities/directionSpriteBox";
import {heroesGeneric} from "../Hero/Heroes";

interface HeroProjectiles {
    snowBall: HeroProjectileClass,
}

export const heroProjectiles: HeroProjectiles = {

    snowBall: new HeroProjectileClass(
        0,
        "snowBall",
         {
            x: heroesGeneric.pinguigny.spriteBox.x + heroesGeneric.pinguigny.spriteBox.w / 2,
            y: heroesGeneric.pinguigny.spriteBox.y + heroesGeneric.pinguigny.spriteBox.h / 2,
            w: 16,
            h: 16,
            direction: {
                radian: DirectionInRadian.Right,
                x: 1,
                y: 0
            },
            speed: heroesGeneric.pinguigny.spriteBox.speed + 2, // en (pixel/frame)
        },
         {
            x: heroesGeneric.pinguigny.spriteBox.x + heroesGeneric.pinguigny.spriteBox.w / 2,
            y: heroesGeneric.pinguigny.spriteBox.y + heroesGeneric.pinguigny.spriteBox.h / 2,
            w: 16,
            h: 16,
        },
        "lineShot",
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        90, // en frame (60 = 1s)
        0,
        1000,
        true,
        0,
        64,
    )
}

