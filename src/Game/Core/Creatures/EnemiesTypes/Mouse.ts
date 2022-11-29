import { EnemiesSprite } from '../EnemiesSprite';
export const   mouse=  {
    id: 0,
    type: "mouse",
    maxHealth: 1,
    health: 1,
    damage: 1,
    sprite :
        {
        front: EnemiesSprite.mouseFront,
        back: EnemiesSprite.mouseBack,
        left: EnemiesSprite.mouseLeft,
        right: EnemiesSprite.mouseRight,
        sprite: EnemiesSprite.mouseFront
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
        speed: 0.75,
    },
    hitBox:{
        x: 1,
        y: 1,
        w: 64,
        h: 64,
    }}