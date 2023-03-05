import { MapBlockType } from "../../MapBlocks/MapBlock";
import { Item, ItemType, BabyType } from '../Item';
import { ItemSprite } from "../ItemSprite";

export const seedsTree : Item = {
    id: 0,
    type: ItemType.SeedsTree,
    sprite: ItemSprite.SeedsTree,
    valueAsFood: 2500,
    spriteBox: {
        x: 1,
        y: 1,
        w: 48,
        h: 64,
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
        w: 48,
        h: 64,
    },
    isTaken : false,
    coordinate :0,
    unMovable : true,
    price : 80,
    gestation : 0,
    gestationMax : 400,
    mapBlockToDrop : [MapBlockType.Dirt , MapBlockType.Grass],
    babyType : BabyType.Item,
    baby : ItemType.Seeds,
    solid: true,
    dieWhenMakeABaby : false,
    life : 10_000_000,
    babyProbability : 0.8,
 }

 