import {HitBox, Sprite, SpriteBox} from "../StartData/StartData";
import {EnemiesSprite} from "./EnemiesSprite";

export interface Enemy {
    id: number
    // GRAPHICAL AND POSITION :
    sprite: Sprite,
    spriteBox: SpriteBox,
    hitBox: HitBox,

    // STATS :
    type: string,
    maxHealth: number,
    health: number,
    damage: number,
}

export const enemyGeneric: Enemy = {
    id: 0,
    sprite: {
        front: EnemiesSprite.rabbitFront,
        back: EnemiesSprite.rabbitBack,
        left: EnemiesSprite.rabbitLeft,
        right: EnemiesSprite.rabbitRight,
        sprite: EnemiesSprite.rabbitFront
    },
    spriteBox: {
        x: 0,
        y: 0,
        w: 32,
        h: 32,
        direction: {
            radian: 0,
            x: 0,
            y: 0
        },
        speed: 1,
    },
    hitBox: {
        x: 0,
        y: 0,
        w: 32,
        h: 32,
    },
    type: "",
    maxHealth: 100,
    health: 100,
    damage: 1,
}

export class GenericEnemies implements Enemy {
    constructor(
        public id: number,
        // GRAPHICAL AND POSITION :
        public sprite: Sprite,
        public spriteBox: SpriteBox,
        public hitBox: HitBox,
        // STATS :
        public type: string,
        public maxHealth: number,
        public health: number,
        public damage: number,
    ){}}


const newEnemies = new GenericEnemies(
    0,
    {
        front: EnemiesSprite.rabbitFront,
        back: EnemiesSprite.rabbitBack,
        left: EnemiesSprite.rabbitLeft,
        right: EnemiesSprite.rabbitRight,
        sprite: EnemiesSprite.rabbitFront
    },
    {
        x: 0,
        y: 0,
        w: 32,
        h: 32,
        direction: {
            radian: 0,
            x: 0,
            y: 0
        },
        speed: 1,
    },
    {
        x: 0,
        y: 0,
        w: 32,
        h: 32,
    },
    "",
    100,
    100,
    1,
)

