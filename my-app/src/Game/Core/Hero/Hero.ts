import {HeroItem} from "../HeroItem/HeroItem";
import {HitBox, Sprite, SpriteBox} from "../StartData/StartData";

export interface Hero {

    // GRAPHICAL AND POSITION :
    sprite: Sprite
    spriteBox: SpriteBox,
    hitBox: HitBox,

    // HERO STATS :
    life: number,                                          // Determines the amount of Extra Lives the player has
    invulnerabilityCoolDown: number,
    maxHealth: number,
    health: number,
    recoveryHealth: number,
    armor: number,
    luck: number,
    growth: number,                                 // affect quantity of xp earned %
    greed: number,                                  // affect quantity of gold earned %
    curse: number,                                   // affect enemies speed, health, quantity and frequency %
    magnetRadius: number,

    // ITEMS AND WEAPONS :
    inventory: HeroItem[],

    // HERO PROJECTILE STATS :
    projectileMight: number,                       // affect weapons projectile damage %
    projectileArea: number,                         // affect weapons projectile area effect ( je pense a la hitbox pour nous ) %
    projectileSpeed: number,                      // affect weapons projectile speed %
    projectileDuration: number,                  // affect  weapons projectile effect (a creuser) duration %
    projectileAmount: number,                   // affect  amount of projectile(s) by shot %
    projectileCooldown: number,               // affect  weapons projectile cooldown before shot again %

    // EXPERIENCE :
    xpActual: number,
    xpToReach: number,
    level: number,

    // LEVELUP :
    rerollRewardsLevelUp: number,           // Determines how many times the player can reroll level-up rewards
    skipRewardLevelUp: number,              // Determines how many times the player can skip level-up rewards

}

export const heroGeneric: Hero = {
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
            x: 0,
            y: 0,
        },
        speed: 1,
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
    projectileCooldown: 0,
    xpActual: 0,
    xpToReach: 100,
    level: 1,
    rerollRewardsLevelUp: 0,
    skipRewardLevelUp: 0,
}