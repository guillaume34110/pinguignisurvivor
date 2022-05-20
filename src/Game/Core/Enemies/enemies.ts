import {Enemy} from "./Enemy";
import {EnemiesSprite} from "./EnemiesSprite";

interface Enemies {
    rabbit: Enemy,
}


export const enemies: Enemies = {

    rabbit: {
        id: 0,
        type: "rabbit",
        maxHealth: 1,
        health: 1,
        damage: 1,
        sprite: {
            front: "rabbit-front",
            back: "rabbit-back",
            left: "rabbit-left",
            right: "rabbit-right",
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
            h: 128,
        }
    }
}

