import { ItemSprite } from "../ItemSprite";
import { ItemType } from '../Item';

export const seeds = {
    id: 0,
    type: ItemType.foodVegetable,
    sprite: ItemSprite.Seeds,
    value: 2500,
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
    unMovable : false
 }