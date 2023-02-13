import { MapBlockType } from "../../MapBlocks/MapBlock";
import { BabyType, Item, ItemType } from "../Item";
import { ItemSprite } from "../ItemSprite";

export const basicGrass : Item = {
    id: 0,
    type: ItemType.BasicGrass,
    sprite: ItemSprite.BasicGrass,
    valueAsFood: 500,
    spriteBox: {
        x: 1,
        y: 1,
        w: 24,
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
        w: 24,
        h: 32,
    },
    isTaken : false,
    coordinate :0,
    unMovable : true,
    price : 20,
    gestation : 0,
    gestationMax : 600,
    mapBlockToDrop : [MapBlockType.Dirt , MapBlockType.Grass],
    babyType : BabyType.Item,
    baby : ItemType.BasicGrass,
    solid: false,
    dieWhenMakeABaby : false,
    life : 10_000,
    babyProbability : 0.7,
 }

 