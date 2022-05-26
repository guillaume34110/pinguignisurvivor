import {Enemy, EnemyClass} from "./Enemy";
import {EnemiesSprite} from "./EnemiesSprite";

interface Enemies {
    rabbit: Enemy,
    mouse: EnemyClass,
}


export const enemies: Enemies = {

    rabbit: {
        id: 0,
        type: "rabbit",
        maxHealth: 1,
        health: 1,
        damage: 1,
        sprite: {
            front: EnemiesSprite.rabbitFront,
            back: EnemiesSprite.rabbitBack,
            left: EnemiesSprite.rabbitLeft,
            right: EnemiesSprite.rabbitRight,
            sprite: EnemiesSprite.rabbitFront
        },
        spriteBox: {
            x: 1,
            y: 1,
            w: 64,
            h: 128,
            direction: {
                radian: 0,
                x: 0,
                y: 0
            },
            speed: 1,
        },
        hitBox: {
            x: 1,
            y: 1,
            w: 64,
            h: 64,
        }
    },

    mouse: new EnemyClass(
        0,
        {
            front: EnemiesSprite.mouseFront,
            back: EnemiesSprite.mouseBack,
            left: EnemiesSprite.mouseLeft,
            right: EnemiesSprite.mouseRight,
            sprite: EnemiesSprite.mouseFront
        },
        {
            x: 1,
            y: 1,
            w: 64,
            h: 128,
            direction: {
                radian: 0,
                x: 0,
                y: 0
            },
            speed: 0.75,
        },
        {
            x: 1,
            y: 1,
            w: 64,
            h: 64,
        },
        "mouse",
        1,
        1,
        1,
    )
}

