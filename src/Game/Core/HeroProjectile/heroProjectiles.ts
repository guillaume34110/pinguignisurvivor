import {HeroProjectile} from "./HeroProjectile";

interface HeroProjectiles {
    snowBall: HeroProjectile,
}

export const heroProjectiles: HeroProjectiles = {

    snowBall: {
        id: 0,
        sprite: "snowBall",
        type: "lineShot",
        damage: 1,
        spriteBox: {
            x: 0,
            y: 0,
            w: 8,
            h: 8,
            direction: {
                radian: 0,
                x: 0,
                y: 0
            },
            speed: 1,
        },
        amountProjectile: 1,
        blockByWall: true,
        chance: 0,
        coolDown: 0,
        criticMultiply: 0,
        distance: 128,
        durationEffect: 0,
        interval: 60,
        level: 0,
        penetration: 0,
        poolLimit: 100,
    }
}

