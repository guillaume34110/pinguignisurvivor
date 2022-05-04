import { Sprite, SpriteBox } from "../StartData/StartData";

export interface Enemy {

    // GRAPHICAL AND POSITION :
    sprite: Sprite,
    spriteBox: SpriteBox,

    // STATS :
    type: string,
    maxHealth: number,
    health: number,
    damage: number,
    speed: number,
}

export const enemyGeneric: Enemy = {
    sprite: {
        front: "rabbit-front",
        back: "rabbit-back",
        left: "rabbit-left",
        right: "rabbit-right",
        sprite:"rabbit-front"
    },
    spriteBox: {
        x: 0,
        y: 0,
        w: 32,
        h: 32,
    },
    type: "",
    maxHealth: 100,
    health: 100,
    damage: 1,
    speed: 1,
}