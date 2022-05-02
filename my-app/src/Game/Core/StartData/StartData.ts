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
    life: number,
    speed: number,
    invulnerability: boolean,
    weapons: HeroWeapon[],
    items: HeroItem[],
    xp: number,
    spriteBox: SpriteBox,
}

export interface HeroWeapon {
    sprite: string,
    type: string,
    level: number,
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
    type: string,
    level: number,
    life: number,
    damage: number,
    speed: number,
    spriteBox: SpriteBox
}

export const enemyGeneric: Enemy = {
    sprite: "",
    type: "",
    level: 0,
    life: 0,
    damage: 0,
    speed: 0,
    spriteBox: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
    }
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
        sprite: "pinguigny",
        life: 0,
        speed: 0,
        invulnerability: false,
        weapons: [],
        items: [],
        xp: 0,
        spriteBox: {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        }
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


