import { dirtGroundBorderDown, dirtGroundBorderLeft, dirtGroundBorderRight, dirtGroundBorderUp, dirtGroundBorderDownRight, dirtGroundBorderDownLeft, dirtGroundBorderUpLeft, dirtGroundBorderUpRight, dirtGroundBorderUp2, dirtGroundBorderDown2, dirtGroundBorderLeft2, dirtGroundBorderRight2 } from '../../MapBlockBorder/MapBlocksBorderTypes/DirtGround';
import { MapBlock, MapBlockType } from "../MapBlock";
import { MapBlocksSprite } from "../MapBlocksSprite";

export const emptyGround : MapBlock = {
    id: 0,
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    hitBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksSprite.ground_dirt,
    rotationY: 0,
    rotationX: 0,
    translateY: 0,
    type:MapBlockType.emptyGround,
    coordinate : 0,
    walkable : true,
    
    layer : 2,
    borders :{
        up : Math.random() < 0.5 ? dirtGroundBorderUp : dirtGroundBorderUp2,
        down : Math.random() < 0.5 ? dirtGroundBorderDown :dirtGroundBorderDown2,
        left : Math.random() < 0.5 ? dirtGroundBorderLeft :dirtGroundBorderLeft2,
        right: Math.random() < 0.5 ? dirtGroundBorderRight : dirtGroundBorderRight2,
        downRight : dirtGroundBorderDownRight,
        downLeft : dirtGroundBorderDownLeft,
        upLeft : dirtGroundBorderUpLeft,
        upRight : dirtGroundBorderUpRight
    }
}