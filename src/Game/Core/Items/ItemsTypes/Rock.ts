import { ItemSprite } from '../ItemSprite';
import { ItemType } from '../Item';
export const rock = {
    id: 0,
    type: ItemType.Solid,
    sprite: ItemSprite.Rock,
    value: 0,
    spriteBox: {
        x: 1,
        y: 1,
        w: 32,
        h: 32,
        direction: {
            radian: 0,
            x: 0,
            y: 0
        },
        speed: 0,
    },
    hitBox:{
        x: 1,
        y: 1,
        w: 32,
        h: 32,
    },
    isTaken : false,
    coordinate : 0,
    unMovable : true
 }