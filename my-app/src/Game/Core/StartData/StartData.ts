import { time } from "console"

export interface GameData {
    hero: Hero,
    heroProjectiles: HeroProjectile[],
    enemies: Enemy[],
    items: Item[],
    keys: Keys,
    time: number,
    camera: Camera,
    building: Building[],
}

export interface SpriteBox {
    x: number,
    y: number,
    w: number,
    h: number,
}

export interface Sprite {
    front: string,
    back: string,
    left: string,
    right: string,
    sprite: string,
}

export interface Hero {

    // GRAPHICAL AND POSITION :
    sprite: Sprite
    spriteBox: SpriteBox,

    // HERO STATS :
    life: number,                                          // Determines the amount of Extra Lives the player has
    invulnerabilityCoolDown: number,
    maxHealth: number,
    health: number,
    recoveryHealth: number,
    armor: number,
    moveSpeed: number,
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
    xpToReach: number,
    xpActual: number,
    level: number,

    // LEVELUP :
    rerollRewardsLevelUp: number,           // Determines how many times the player can reroll level-up rewards
    skipRewardLevelUp: number,              // Determines how many times the player can skip level-up rewards

}

export const heroGeneric: Hero = {
    sprite: {
        front: "rabbit-front",
        back: "rabbit-back",
        left: "rabbit-left",
        right: "rabbit-right",
        sprite:"rabbit-front"
    },
    spriteBox: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
    },
    life: 1,
    invulnerabilityCoolDown: 1,
    maxHealth: 100,
    health: 100,
    recoveryHealth: 0,
    armor: 0,
    moveSpeed: 1,
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
    xpToReach: 100,
    xpActual: 0,
    level: 1,
    rerollRewardsLevelUp: 0,
    skipRewardLevelUp: 0,
}

export interface HeroItem {
    sprite: string,
    type: string,
    level: number,
    rarity: number,
    projectile: HeroProjectile | null,
}

export interface HeroProjectile {

    // GRAPHICAL AND POSITION :
    sprite: string,
    spriteBox: SpriteBox,

    // STATS :
    type: string,
    level: number,
    damage: number,                             // damage => hero.might
    criticalMultipliar: number,
    speed: number,                                  // projectile speed
    amountProjectile: number,                // amount of projectile fired by each shot  
    penetration: number,                        // number of enemies penetrate by projectile
    durationEffect: number,                    // weapon effect duration
    cooldown: number,                           // The time required for the weapon to be used again. There is a trigger for the cooldown to start after a weapon's duration ends. Modified by Cooldown stat.
    interval: number,                                // The time required for an additional projectile to be fired
    distance: number,                              // distance max before projectile destruction
    blockByWall: boolean,                       // is projectile blocked by walls
    chance: number,                                 // special effect happening 
    poolLimit: number,                            // max amount of this projectile in screen

}

export interface Enemy {

    // GRAPHICAL AND POSITION :
    sprite: Sprite,
    spriteBox: SpriteBox,

    // STATS :
    type: string,
    maxHealth: number,
    health: number,
    damage: number,
    speed: number,
}

export const enemyGeneric: Enemy = {
    sprite: {
        front: "rabbit-front",
        back: "rabbit-back",
        left: "rabbit-left",
        right: "rabbit-right",
        sprite:"rabbit-front"
    },
    spriteBox: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
    },
    type: "",
    maxHealth: 100,
    health: 100,
    damage: 1,
    speed: 1,
}

export interface Item {
    type: "string",
    sprite: "string",
    value: number,
    spriteBox: SpriteBox,
}

export interface Keys {
    keysInstant: {
        left: boolean,
        right: boolean,
        up: boolean,
        down: boolean,
    },
    keyState: {
        left: boolean,
        right: boolean,
        up: boolean,
        down: boolean,
    }
}

export interface Camera {
    x: number,
    y: number
}


export interface Building {
    x: number,
    y: number,
    w: number,
    h: number,
    rotationX:number,
    rotationY:number,
    translateY:number,
    sprite: string,
}


export const startData: GameData = {

    hero: heroGeneric,

    heroProjectiles: [],
    enemies: [],
    items: [],
    keys: {
        keysInstant: {
            left: false,
            right: false,
            up: false,
            down: false,
        },
        keyState: {
            left: false,
            right: false,
            up: false,
            down: false,
        }
    },

    time: 0,
    camera: {
        x: 0,
        y: 0,
    },
    building: [
        { x: 1000, y: 1000,h:102,w:102, sprite :"grey128", rotationY:0,rotationX:90,translateY:50,},
    
    
    ]
}
