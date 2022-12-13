import { CreaturesSprite } from '../CreaturesSprite';
export const mouse=  {
    id: 0,
    type: "mouse",
    maxHealth: 1,
    health: 1,
    damage: 1,
    sprite :
        {
        front: CreaturesSprite.mouseFront,
        back: CreaturesSprite.mouseBack,
        left: CreaturesSprite.mouseLeft,
        right: CreaturesSprite.mouseRight,
        sprite: CreaturesSprite.mouseFront
    },
    spriteBox: {
        x: 1,
        y: 1,
        w: 16,
        h: 32,
        direction: {
            radian: 0,
            x: 1,
            y: 1
        },
        speed: 1,
    },
    hitBox:{
        x: 1,
        y: 1,
        w: 16,
        h: 16,
    }}