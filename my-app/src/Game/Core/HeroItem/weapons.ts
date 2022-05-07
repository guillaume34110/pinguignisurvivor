import {HeroItem} from "./HeroItem";

interface HeroItems {
    snowBall: HeroItem,
}

export const weapons: HeroItems = {

    snowBall: {
        sprite: "snowBall image to link with css",
        type: "ice",
        level: 0,
        rarity: 1,
        projectile: {
            sprite: "",
            spriteBox: {
                x: 0,
                y: 0,
                w: 10,
                h: 10,
                direction: {
                    x: 0,
                    y: 0,
                },
                speed: 1,
            },
            type: "ice",
            level: 0,
            damage: 1,
            criticalMultipliar: 0,
            amountProjectile: 1,
            penetration: 1,
            durationEffect: 0,
            cooldown: 0,
            interval: 1,
            distance: 2,
            blockByWall: true,
            chance: 1,
            poolLimit: 20,
        },
        supply: null,
    }

}
