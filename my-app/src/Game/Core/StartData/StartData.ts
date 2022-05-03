import { time } from "console"


export interface GameData {
    hero: Hero,
    heroProjectiles: HeroProjectile[],
    enemies: Enemy[],
    items: Item[],
    keys: Keys,
    time: number,
}

export interface SpriteBox {
    x: number,
    y: number,
    w: number,
    h: number,
}

export interface Hero {
    sprite: string,
    spriteBox: SpriteBox,
    maxHealth: number,
    health: number,
    recovery: number,
    armor: number,
    speed: number,
    inventory: HeroItem[],
    luck: number,
    growth: number,                 // se renseigner
    greed: number,                  // se renseigner
    magnetRadius: number,
    xp: number,
    invulnerability: boolean,

}

export interface HeroItem {
    sprite: string,
    type: string,
    level: number,
}
export interface HeroProjectile {
    type: string,
    level: number,
    sprite: string,
    spriteBox: SpriteBox,
}
export interface Enemy {
    sprite: string,
    spriteBox: SpriteBox,
    type: string,
    maxHealth: number,
    health: number,
    damage: number,
    speed: number,
}

export const enemyGeneric: Enemy = {
    sprite: "",
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

export const startData: GameData = {
    hero: {
        sprite: "pinguigny-front",
        spriteBox: {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        },
        maxHealth: 100,
        health: 100,
        recovery: 0,
        armor: 0,
        speed: 1,
        inventory: [],
        luck: 0,
        growth: 0,
        greed: 0,
        magnetRadius: 1,
        xp: 0,
        invulnerability: false,
    },
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
    time: 0

}


