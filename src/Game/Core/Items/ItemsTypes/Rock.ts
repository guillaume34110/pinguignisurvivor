import { ItemSprite } from '../ItemSprite';
import { Item, ItemName, ItemType, BabyType } from '../Item';
import { MapBlockType } from '../../MapBlocks/MapBlock';
import { worms } from '../../Creatures/CreaturesTypes/Worms';
export const rock : Item= {
    id: 0,
    type: ItemType.Rock,
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
    unMovable : true,
    price :15,
    gestation : 0,
    gestationMax : 500,
    mapBlockToDrop : [MapBlockType.Dirt , MapBlockType.Grass],
    babyType : BabyType.Creature,
    baby : worms
 }