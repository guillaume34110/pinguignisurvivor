import {Hero} from "../Hero/Hero";
import {Item} from "../Items/Item";
import {Building} from "../Building/Building";
import {buildingsGeneric} from "../Building/Buildings";
import {heroesGeneric} from "../Hero/Heroes";
import {EnemiesSprite} from "../Enemies/EnemiesSprite";
import {HeroSprite} from "../Hero/HeroSprite";
import {HeroProjectileSprite} from "../HeroProjectile/HeroProjectileSprite";
import {HeroProjectile} from "../HeroProjectile/HeroProjectile";
import { Enemy } from "../Enemies/Enemy";

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
    front: EnemiesSprite | HeroSprite | HeroProjectileSprite,
    back: EnemiesSprite | HeroSprite | HeroProjectileSprite,
    left: EnemiesSprite | HeroSprite | HeroProjectileSprite,
    right: EnemiesSprite | HeroSprite | HeroProjectileSprite,
    sprite: EnemiesSprite | HeroSprite | HeroProjectileSprite,
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
