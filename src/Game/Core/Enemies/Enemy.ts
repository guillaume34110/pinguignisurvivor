import {HitBox, Sprite, SpriteBoxInterface} from "../StartData/StartData";
import {EnemiesSprite} from "./EnemiesSprite";

export interface Enemy {
    id: number
    // GRAPHICAL AND POSITION :
    sprite: Sprite,
    spriteBox: SpriteBoxInterface,
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
        w: 64,
        h: 32,
    },
    type: "",
    maxHealth: 100,
    health: 100,
    damage: 1,
}

export class EnemyClass {
    constructor(
        public id: number,
        // GRAPHICAL AND POSITION :
        public sprite: Sprite,
        public spriteBox: SpriteBoxInterface,
        public hitBox: HitBox,
        // STATS :
        public type: string,
        public maxHealth: number,
        public health: number,
        public damage: number,
    ) {
    }

    static createEnemy(enemy: EnemyClass): EnemyClass {
        const sprite: Sprite = {
            front: enemy.sprite.front,
            back: enemy.sprite.back,
            left: enemy.sprite.left,
            right: enemy.sprite.right,
            sprite: enemy.sprite.sprite,
        }
        const spriteBox: SpriteBoxInterface = {
            x: enemy.spriteBox.x,
            y: enemy.spriteBox.y,
            w: enemy.spriteBox.w,
            h: enemy.spriteBox.h,
            direction: {
                radian: enemy.spriteBox.direction.radian,
                x: enemy.spriteBox.direction.x,
                y: enemy.spriteBox.direction.y,
            },
            speed: enemy.spriteBox.speed,
        }
        const hitBox: HitBox = new HitBox(
            enemy.hitBox.x,
            enemy.hitBox.y,
            enemy.hitBox.w,
            enemy.hitBox.h,
        )
        return new EnemyClass(
            enemy.id,
            sprite,
            spriteBox,
            hitBox,
            enemy.type,
            enemy.maxHealth,
            enemy.health,
            enemy.damage,
        )
    }
}

const newEnemies = new EnemyClass(
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
        w: 64,
        h: 32,
    },
    "",
    100,
    100,
    1,
)

