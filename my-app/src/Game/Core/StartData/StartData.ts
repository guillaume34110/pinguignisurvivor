import { Enemy } from "../Enemies/Enemy"
import { Hero, heroGeneric } from "../Hero/Hero"
import { HeroProjectile } from "../HeroProjectile/heroProjectile"
import { Item } from "../Items/Item"

export interface GameData {
    hero: Hero,
    heroProjectiles: HeroProjectile[],
    enemies: Enemy[],
    items: Item[],
    keys: Keys,
    time: number,
    camera:Camera,
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
    y:number
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
    time:0,
    camera:{
        x:0,
        y:0,
    }
}
