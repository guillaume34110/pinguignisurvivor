import { ItemSprite } from '../ItemSprite';
import { Item, ItemName, ItemType } from '../Item';
export const rock : Item= {
    id: 0,
    type: ItemType.Solid,
    name: ItemName.Rock,
    sprite: ItemSprite.Rock,
    value: 0,
    spriteBox: {
        x: 1,
        y: 1,
        w: 32,
        h: 32,
        direction: {
            degree10: 0 ,
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
    coordinate :0,
    unMovable : true
 }