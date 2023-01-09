import { ItemSprite } from "../ItemSprite";
import { Item, ItemType, BabyType } from '../Item';
import { MapBlockType } from "../../MapBlocks/MapBlock";



export const seeds : Item = {
    id: 0,
    type: ItemType.Seeds,
    sprite: ItemSprite.Seeds,
    valueAsFood: 400,
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
    gestationMax : 6000,
    mapBlockToDrop : [MapBlockType.Dirt , MapBlockType.Grass],
    babyType : BabyType.Item,
    baby : null,
    solid: false,
    dieWhenMakeABaby : true
 }