
export interface GameData {
    hero: Hero,
    heroProjectiles: HeroProjectile[],
    enemies: Enemy[],

}

export interface Hero {
    sprite: string,
    life: number,
    speed: number,
    invulnerability: boolean,
    weapons: HeroWeapon[],
    items: HeroItems[]
    x: number,
    y: number,
}

export interface HeroWeapon {
    type: string
    level: number,
}

export interface HeroItems {
    type: string,
    level: number,
}
export interface HeroProjectile {
    type: string,
    level: number,
    x: number,
    y: number,
}
export interface Enemy {
    type: string,
    level: number,
    life: number,
    damages: number,
    sprite: string,
    x: number,
    y: number,
}

export const startData: GameData = {
    hero: {
        sprite: "pinguigny",
        life: 3,
        speed: 2,
        invulnerability: false,
        weapons: [],
        items: [],
        x: 0,
        y: 0,
    },
    heroProjectiles: [],
    enemies: [],
}


