import { MapBlockType } from "../../MapBlocks/MapBlock";
import { MapBlocksBorderSprite } from "../MapBlockBorderSprite";
import { MapBlockBorder } from "../MapBlockBorder";


export const dirtGroundBorderDown : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtDown,
    type:MapBlockType.Dirt,
    isAnimated : false,
}

export const dirtGroundBorderUp : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtUp,
    type:MapBlockType.Dirt,
    isAnimated : false,
}

export const dirtGroundBorderLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtLeft,
    type:MapBlockType.Dirt,
    isAnimated : false,
}

export const dirtGroundBorderRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtRight,
    type:MapBlockType.Dirt,
    isAnimated : false,
}