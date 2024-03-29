import { snowGroundBorderDown, snowGroundBorderDown2, snowGroundBorderDownLeft, snowGroundBorderDownRight, snowGroundBorderLeft, snowGroundBorderLeft2, snowGroundBorderRight, snowGroundBorderRight2, snowGroundBorderUp, snowGroundBorderUp2, snowGroundBorderUpLeft, snowGroundBorderUpRight } from '../../MapBlockBorder/MapBlocksBorderTypes/SnowGroundBorder';
import { MapBlock, MapBlockType } from "../MapBlock"
import { MapBlocksSprite } from "../MapBlocksSprite"

export const snowGround: MapBlock = {
    id: 0,
    spriteBox: { x: 0, y: 0, h: 128, w: 128 },
    hitBox: { x: 0, y: 0, h: 128, w: 128 },
    sprite: MapBlocksSprite.ground_snow,
    rotationY: 0,
    rotationX: 0,
    translateY: 0,
    type: MapBlockType.Snow,
    coordinate: 0,
    walkable: true,

    layer: 4,
    borders: {
        up:  [snowGroundBorderUp , snowGroundBorderUp2],
        down:   [snowGroundBorderDown  ,snowGroundBorderDown2],
        left: [snowGroundBorderLeft , snowGroundBorderLeft2],
        right:   [snowGroundBorderRight , snowGroundBorderRight2],
        downRight:  [snowGroundBorderDownRight],
        downLeft:  [snowGroundBorderDownLeft],
        upLeft:  [snowGroundBorderUpLeft],
        upRight:  [snowGroundBorderUpRight]
    }
}