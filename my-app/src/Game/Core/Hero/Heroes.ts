import {Hero} from "./Hero";

export interface Heroes {
    pinguigny: Hero
}

export const heroesGeneric: Heroes = {
    pinguigny: {
        sprite: {
            front: "pinguigny-front",
            back: "pinguigny-back",
            left: "pinguigny-left",
            right: "pinguigny-right",
            sprite: "pinguigny-front"
        },
        spriteBox: {
            x: 0,
            y: 0,
            w: 64,
            h: 128,
            direction: {
                radian: 0,
                x: 0,
                y: 0
            },
            speed: 2,
        },
        hitBox: {
            x: 0,
            y: 0,
            w: 32,
            h: 32,
        },
        life: 1,
        invulnerabilityCoolDown: 1,
        maxHealth: 100,
        health: 100,
        recoveryHealth: 0,
        armor: 0,
        luck: 0,
        growth: 0,
        greed: 0,
        curse: 0,
        magnetRadius: 0,
        inventory: [],
        projectileMight: 0,
        projectileArea: 0,
        projectileSpeed: 0,
        projectileDuration: 0,
        projectileAmount: 0,
        projectileCoolDown: 0,
        xpActual: 25,
        xpToReach: 100,
        xpTotal:25,
        level: 1,
        rerollRewardsLevelUp: 0,
        skipRewardLevelUp: 0,
    }
}