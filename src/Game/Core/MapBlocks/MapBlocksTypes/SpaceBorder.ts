import { MapBlock, MapBlockType } from "../MapBlock";
import { MapBlocksSprite } from '../MapBlocksSprite';

export const spaceBorder : MapBlock = {
    id: 0,
    spriteBox: {x: 0, y: 0, h: 64, w: 64},
    hitBox: {x: 0, y: 0, h: 64, w: 64},
    sprite: MapBlocksSprite.border_space,
    rotationY: 0,
    rotationX: 0,
    translateY: 0,
    type: MapBlockType.space
}