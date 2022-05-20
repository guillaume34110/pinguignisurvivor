import {Hero} from "../Hero/Hero";
import {HeroProjectile} from "../HeroProjectile/HeroProjectile";
import {Item} from "../Items/Item";
import {Enemy} from "../Enemies/Enemy";
import {Building} from "../Building/Building";
import {buildingsGeneric} from "../Building/Buildings";
import {heroesGeneric} from "../Hero/Heroes";
import {EnemiesSprite} from "../Enemies/EnemiesSprite";
import {HeroSprite} from "../Hero/HeroSprite";

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
        radian: number,
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
    sprite: EnemiesSprite|HeroSprite,
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


export const startData: GameData = {

    hero: heroesGeneric.pinguigny,

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
        buildingsGeneric.horizontalWall,
        buildingsGeneric.verticalWall,
        buildingsGeneric.tree
    ]
}
