import {HitBox, HitBoxClass, Sprite, SpriteBox} from "../StartData/StartData";
import {EnemiesSprite} from "./EnemiesSprite";

export interface Enemy {
    id: number
    // GRAPHICAL AND POSITION :
    sprite: Sprite,
    spriteBox: SpriteBox,
    hitBox: HitBoxClass,

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

export class EnemyClass {
    constructor(
        public id: number,
        // GRAPHICAL AND POSITION :
        public sprite: Sprite,
        public spriteBox: SpriteBox,
        public hitBox: HitBoxClass,
        // STATS :
        public type: string,
        public maxHealth: number,
        public health: number,
        public damage: number,
    ) {
    }

    static createEnemy(enemy:EnemyClass): EnemyClass{
        const sprite: Sprite = {
            front: enemy.sprite.front,
            back: enemy.sprite.back,
            left: enemy.sprite.left,
            right: enemy.sprite.right,
            sprite: enemy.sprite.sprite,
        }
        const spriteBox:SpriteBox = {
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
        const hitBox:HitBoxClass = new HitBoxClass(
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

    public getCenterSpriteBox ():{ x: number, y: number }{
        return {
            x: this.spriteBox.x + this.spriteBox.w / 2,
            y: this.spriteBox.y + this.spriteBox.h / 2,
        }
    }

    public sleepPosition(){
        this.spriteBox.x = 999_999
        this.spriteBox.y = 999_999
        this.hitBox.x = 999_999
        this.hitBox.y = 999_999
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
        w: 32,
        h: 32,
    },
    "",
    100,
    100,
    1,
)

