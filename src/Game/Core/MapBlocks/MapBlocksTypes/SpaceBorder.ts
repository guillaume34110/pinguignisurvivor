import { waterGroundBorderDown, waterGroundBorderDownLeft, waterGroundBorderDownRight, waterGroundBorderLeft, waterGroundBorderRight, waterGroundBorderUp, waterGroundBorderUpLeft, waterGroundBorderUpRight } from '../../MapBlockBorder/MapBlocksBorderTypes/WaterGround';
import { MapBlock, MapBlockType } from "../MapBlock";
import { MapBlocksSprite } from '../MapBlocksSprite';

export const spaceBorder : MapBlock = {
    id: 0,
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    hitBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksSprite.border_space,
    rotationY: 0,
    rotationX: 0,
    translateY: 0,
    type: MapBlockType.Space,
    coordinate : 0,
    walkable : false,
    layer : 0,
    borders :{
        up : [waterGroundBorderUp],
        down : [waterGroundBorderDown],
        left : [waterGroundBorderLeft],
        right: [waterGroundBorderRight],
        downRight : [waterGroundBorderDownRight],
        downLeft : [waterGroundBorderDownLeft],
        upLeft : [waterGroundBorderUpLeft],
        upRight : [waterGroundBorderUpRight]
    }
}