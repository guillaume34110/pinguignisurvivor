import { grassGroundBorderDown, grassGroundBorderDown2, grassGroundBorderDownLeft, grassGroundBorderDownRight, grassGroundBorderLeft, grassGroundBorderLeft2, grassGroundBorderRight, grassGroundBorderRight2, grassGroundBorderUp, grassGroundBorderUp2, grassGroundBorderUpLeft, grassGroundBorderUpRight } from '../../MapBlockBorder/MapBlocksBorderTypes/GrassGroundBorder';
import { MapBlock, MapBlockType } from "../MapBlock";
import { MapBlocksSprite } from "../MapBlocksSprite";

export const grassGround: MapBlock = {
    id: 0,
    spriteBox: { x: 0, y: 0, h: 128, w: 128 },
    hitBox: { x: 0, y: 0, h: 128, w: 128 },
    sprite: MapBlocksSprite.ground_grass,
    rotationY: 0,
    rotationX: 0,
    translateY: 0,
    type: MapBlockType.Grass,
    coordinate: 0,
    walkable: true,

    layer: 3,
    borders: {
        up:  [grassGroundBorderUp , grassGroundBorderUp2],
        down:  [grassGroundBorderDown , grassGroundBorderDown2],
        left:  [grassGroundBorderLeft , grassGroundBorderLeft2],
        right:  [grassGroundBorderRight , grassGroundBorderRight2],
        downRight:  [grassGroundBorderDownRight],
        downLeft:  [grassGroundBorderDownLeft],
        upLeft:  [grassGroundBorderUpLeft],
        upRight:  [grassGroundBorderUpRight]
    }
}