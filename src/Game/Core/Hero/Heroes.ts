import {Hero} from "./Hero";
import {HeroSprite} from "./HeroSprite";

export interface Heroes {
    pinguigny: Hero
}

export const heroesGeneric: Heroes = {
    pinguigny: {
        sprite: {
            front: HeroSprite.heroFront,
            back: HeroSprite.heroBack,
            left: HeroSprite.heroLeft,
            right: HeroSprite.heroRight,
            sprite: HeroSprite.heroFront
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
            speed: 5,
        },
        hitBox: {
            x: 0,
            y: 0,
            w: 64,
            h: 128,
        },
        life: 1,
        invulnerabilityCoolDown: 0,
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
        xpActual: 0,
        xpToReach: 10,
        xpTotal: 0,
        level: 1,
        rerollRewardsLevelUp: 0,
        skipRewardLevelUp: 0,
    }
}