import { MapBlocksBorderSprite } from "../MapBlockBorderSprite";
import { MapBlockBorder } from "../MapBlockBorder";
import { MapBlockType } from "../../MapBlocks/MapBlock";



export const grassGroundBorderDown : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassDown,
    type:MapBlockType.Grass,
    isAnimated : false,
}

export const grassGroundBorderUp : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassUp,
    type:MapBlockType.Grass,
    isAnimated : false,
}

export const grassGroundBorderLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassLeft,
    type:MapBlockType.Grass,
    isAnimated : false,
}

export const grassGroundBorderRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassRight,
    type:MapBlockType.Grass,
    isAnimated : false,
}