import { MapBlockType } from "../../MapBlocks/MapBlock";
import { Item, ItemName, ItemType, BabyType } from '../Item';
import { ItemSprite } from "../ItemSprite";
import { seeds } from "./Seeds";

export const seedsTree : Item = {
    id: 0,
    type: ItemType.Tree,
    name: ItemName.SeedsTree,
    sprite: ItemSprite.SeedsTree,
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
    gestationMax : 200,
    mapBlockToDrop : [MapBlockType.Dirt , MapBlockType.Grass],
    babyType : BabyType.Item,
    baby : seeds
 }