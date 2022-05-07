
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

    spriteBox: HitBox,
    hitBox: HitBox,
    rotationX: number,
    rotationY: number,
    translateY: number,
    sprite: string,
    type:BuildingType,
}
export enum BuildingType {
    xWall,yWall,tree,
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
            spriteBox: {x: 1000, y: 1000, h: 102, w: 102},
            hitBox: {x: 1000, y: 1000, h: 102, w: 102},
            sprite: "grey128",
            rotationY: 90,
            rotationX: 90,
            translateY: 50,
            type:BuildingType.xWall
        },
        {
            spriteBox: {x: 1050, y: 1050, h: 102, w: 102},
            hitBox: {x: 1050, y: 1050, h: 102, w: 102},
            sprite: "grey128",
            rotationY: 0,
            rotationX: 90,
            translateY: 50,
            type:BuildingType.yWall
        },

        {
            spriteBox: {x: 550, y: 550, h: 400, w: 40},
            hitBox: {x: 1050, y: 1050, h: 102, w: 102},
            sprite: "grey128",
            rotationY: 0,
            rotationX: 90,
            translateY: 50,
            type:BuildingType.tree
        },

    ]
}
