import { MapBlockType } from "../../MapBlocks/MapBlock";
import { Item, ItemType, BabyType } from '../Item';
import { ItemSprite } from "../ItemSprite";
import { seeds } from './Seeds';

export const seedsTree : Item = {
    id: 0,
    type: ItemType.SeedsTree,
    sprite: ItemSprite.SeedsTree,
    valueAsFood: 2500,
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
    unMovable : true,
    price : 80,
    gestation : 0,
    gestationMax : 400,
    mapBlockToDrop : [MapBlockType.Dirt , MapBlockType.Grass],
    babyType : BabyType.Item,
    baby : seeds,
    solid: true,
    dieWhenMakeABaby : false
 }