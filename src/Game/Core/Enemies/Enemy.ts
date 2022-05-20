import {HitBox, Sprite, SpriteBox} from "../StartData/StartData";
import {EnemiesSprite} from "./EnemiesSprite";

export interface Enemy {
    id:number
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
    id:0,
    sprite: {
        front: "rabbit-front",
        back: "rabbit-back",
        left: "rabbit-left",
        right: "rabbit-right",
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