import { MapBlockType } from "../../MapBlocks/MapBlock";
import { MapBlocksBorderSprite } from "../MapBlockBorderSprite";
import { MapBlockBorder } from "../MapBlockBorder";


export const waterGroundBorderDown : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.WaterDown,
    type:MapBlockType.Water,
    isAnimated : true,
}

export const waterGroundBorderUp : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.WaterUp,
    type:MapBlockType.Water,
    isAnimated : true,
}

export const waterGroundBorderLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.WaterLeft,
    type:MapBlockType.Water,
    isAnimated : true,
}

export const waterGroundBorderRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.WaterRight,
    type:MapBlockType.Water,
    isAnimated : true,
}