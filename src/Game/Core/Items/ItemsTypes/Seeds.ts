import { ItemSprite } from "../ItemSprite";
import { Item, ItemName, ItemType, BabyType } from '../Item';
import { MapBlockType } from "../../MapBlocks/MapBlock";
export const seeds : Item = {
    id: 0,
    type: ItemType.FoodVegetable,
    name: ItemName.Seeds,
    sprite: ItemSprite.Seeds,
    value: 2500,
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
    unMovable : false,
    price : 80,
    gestation : 0,
    gestationMax : 8000,
    mapBlockToDrop : [MapBlockType.Dirt , MapBlockType.Grass],
    babyType : BabyType.None,
    baby : null
 }