

export interface GameData {
    hero: Hero,
    heroProjectiles: HeroProjectile[],
    enemies: Enemy[],
    items: Item[],
    keys: Keys, 
    time: number,
}

export interface Hero {
    sprite: string,
    life: number,
    speed: number,
    invulnerability: boolean,
    inventory: HeroItem[],
    xp:number,
    x: number,
    y: number,
}

export interface HeroItem {
    sprite: string,
    type: string,
    level: number,
}
export interface HeroProjectile {
    type: string,
    level: number,
    x: number,
    y: number,
    sprite: string,
}
export interface Enemy {
    type: string,
    level: number,
    life: number,
    damages: number,
    speed: number,
    sprite: string,
    x: number,
    y: number,
}

export interface Item {
    type: "string"
    sprite: "string"
    x: number,
    y: number,
    value: number | null
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
        life: 3,
        speed: 2,
        invulnerability: false,
        inventory: [],
        xp:0,
        x: 100,
        y: 100,
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
    time:0
}


