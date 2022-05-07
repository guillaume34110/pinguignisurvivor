import {Hero, heroGeneric} from "../Hero/Hero";
import {HeroProjectile} from "../HeroProjectile/HeroProjectile";
import {Item} from "../Items/Item";
import {Enemy} from "../Enemies/Enemy";

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
    direction: {
        x: number,
        y: number,
    },
    speed: number,
}

export interface HitBox {
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
    y: number
}


export interface Building {

    spriteBox: SpriteBox,
    hitBox: HitBox,
    rotationX: number,
    rotationY: number,
    translateY: number,
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

        {
            spriteBox: {x: 1000, y: 1000, h: 102, w: 102, direction: {x: 0, y: 0}, speed: 0},
            hitBox: {x: 1000, y: 1000, h: 102, w: 102},
            sprite: "grey128",
            rotationY: 0,
            rotationX: 90,
            translateY: 50,
        },


    ]
}
