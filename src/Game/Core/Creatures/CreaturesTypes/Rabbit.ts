import { CreaturesSprite } from "../CreaturesSprite";

export const rabbit=  {
    id: 0,
    type: "rabbit",
    maxHealth: 1,
    health: 1,
    damage: 1,
    sprite: {
        front: CreaturesSprite.rabbitFront,
        back: CreaturesSprite.rabbitBack,
        left: CreaturesSprite.rabbitLeft,
        right: CreaturesSprite.rabbitRight,
        sprite: CreaturesSprite.rabbitFront
    },
    spriteBox: {
        x: 1,
        y: 1,
        w: 16,
        h: 32,
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
        w: 16,
        h: 16,
    }
}