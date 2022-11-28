import { HeroProjectileSprite } from "../HeroProjectileSprite";
import { heroesGeneric } from '../../Hero/Heroes';
import { DirectionInRadian } from '../../Utilities/spriteBox/directionSpriteBox';

export const  snowBall = {
    id: 0,
    sprite:
        {
            front: HeroProjectileSprite.snowballFront,
            back: HeroProjectileSprite.snowballFront,
            left: HeroProjectileSprite.snowballFront,
            right:HeroProjectileSprite.snowballFront,
            sprite: HeroProjectileSprite.snowballFront
        },
    spriteBox: {
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
    hitBox: {
        x: heroesGeneric.pinguigny.spriteBox.x + heroesGeneric.pinguigny.spriteBox.w / 2,
        y: heroesGeneric.pinguigny.spriteBox.y + heroesGeneric.pinguigny.spriteBox.h / 2,
        w: 16,
        h: 16,
    },
    type: "lineShot",
    name: "snowball",
    level: 1,
    damage: 0,
    criticMultiply: 1,
    amountProjectile: 0,
    penetration: 0,
    durationEffect: 0,
    coolDown: 60, // en frame (60 = 1s)
    interval: 0,
    intervalActual: 1000,
    distance: 1000,
    blockByWall: true,
    chance: 64,
    poolLimit: 64,
}


