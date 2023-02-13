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
        w: 16,
        h: 16,
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
        w: 16,
        h: 16,
    },
    isTaken : false,
    coordinate :0,
    unMovable : false,
    price : 80,
    gestation : 0,
    gestationMax : 6000,
    mapBlockToDrop : [MapBlockType.Dirt , MapBlockType.Grass],
    babyType : BabyType.Item,
    baby : ItemType.SeedsTree,
    solid: false,
    dieWhenMakeABaby : true,
    life : 6500,
    babyProbability : 0.05,
 }

 
