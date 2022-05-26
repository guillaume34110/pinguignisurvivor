import {Enemy, GenericEnemies} from "./Enemy";
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
            front: EnemiesSprite.rabbitFront,
            back: EnemiesSprite.rabbitBack,
            left: EnemiesSprite.rabbitLeft,
            right: EnemiesSprite.rabbitRight,
            sprite: EnemiesSprite.rabbitFront
        },
        spriteBox: {
            x: 0,
            y: 0,
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
            w: 60,
            h: 64,
        }
    },

}
//
// export const enemies = {
//    rabit: new GenericEnemies(
//         0,
//         {
//             front: EnemiesSprite.rabbitFront,
//             back: EnemiesSprite.rabbitBack,
//             left: EnemiesSprite.rabbitLeft,
//             right: EnemiesSprite.rabbitRight,
//             sprite: EnemiesSprite.rabbitFront
//         },
//         {
//             x: 0,
//             y: 0,
//             w: 64,
//             h: 128,
//             direction: {
//                 radian: 0,
//                 x: 0,
//                 y: 0
//             },
//             speed: 1,
//         },
//         {
//             x: 0,
//             y: 0,
//             w: 60,
//             h: 64,
//         },
//         "rabbit",
//         100,
//         100,
//         1,
//     )
// }