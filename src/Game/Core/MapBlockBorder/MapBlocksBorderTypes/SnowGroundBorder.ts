import { MapBlocksBorderSprite } from "../MapBlockBorderSprite";
import { MapBlockBorder } from "../MapBlockBorder";
import { MapBlockType } from "../../MapBlocks/MapBlock";



export const snowGroundBorderDown : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowDown,
    type:MapBlockType.Snow,
    isAnimated : false,
}

export const snowGroundBorderUp : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowUp,
    type:MapBlockType.Snow,
    isAnimated : false,
}

export const snowGroundBorderLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowLeft,
    type:MapBlockType.Snow,
    isAnimated : false,
}

export const snowGroundBorderRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowRight,
    type:MapBlockType.Snow,
    isAnimated : false,
}