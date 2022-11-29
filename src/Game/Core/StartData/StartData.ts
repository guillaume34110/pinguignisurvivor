import {God} from "../Hero/God";
import {Item} from "../Items/Item";
import {MapBlock} from "../Building/MapBlock";
import {MapBlocksGeneric} from "../Building/MapBlocks";
import {heroesGeneric} from "../Hero/Gods";
import {EnemiesSprite} from "../Enemies/EnemiesSprite";
import {GodSprite} from "../Hero/GodSprite";
import {HeroProjectileSprite} from "../HeroProjectile/HeroProjectileSprite";
import {HeroProjectile} from "../HeroProjectile/HeroProjectile";
import { Enemy } from "../Enemies/Enemy";

export interface GameData {
    hero: God,
    heroProjectiles: HeroProjectile[],
    enemies: Enemy[],
    items: Item[],
    keys: Keys,
    time: number,
    camera: Camera,
    building: MapBlock[],
}

export class DirectionClass {
    constructor(
        public radian: number,
        public x: number,
        public y: number,
    ) {
    }
}

export interface SpriteBoxInterface {
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

export class SpriteBox {
    constructor(
        public x: number,
        public y: number,
        public w: number,
        public h: number,
        public direction: DirectionClass,
        public speed: number,
    ) {
    }
}

export interface HitBoxInterface {
    x: number,
    y: number,
    w: number,
    h: number,
}

export class HitBox {
    constructor(
        public x: number,
        public y: number,
        public w: number,
        public h: number,
    ) {
    }
}

export interface SpriteAndHitBox {
    spriteBox : SpriteBox
    hitBox : HitBox
}

export interface Sprite {
    front: EnemiesSprite | GodSprite | HeroProjectileSprite,
    back: EnemiesSprite | GodSprite | HeroProjectileSprite,
    left: EnemiesSprite | GodSprite | HeroProjectileSprite,
    right: EnemiesSprite | GodSprite | HeroProjectileSprite,
    sprite: EnemiesSprite | GodSprite | HeroProjectileSprite,
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
        MapBlocksGeneric.horizontalWall,
        MapBlocksGeneric.verticalWall,
        MapBlocksGeneric.tree
    ]
}
