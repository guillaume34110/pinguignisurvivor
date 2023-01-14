import { MapBlockType } from "../../MapBlocks/MapBlock";
import { MapBlocksBorderSprite } from "../MapBlockBorderSprite";
import { BorderPositions, MapBlockBorder } from "../MapBlockBorder";


export const waterGroundBorderDown: MapBlockBorder = {
    spriteBox: { x: 0, y: 0, h: 128, w: 128 },
    sprite: MapBlocksBorderSprite.WaterDown,
    type: MapBlockType.Water,
    isCorner: false,
    position: [BorderPositions.Down],
    layer: 1,
}

export const waterGroundBorderUp: MapBlockBorder = {
    spriteBox: { x: 0, y: 0, h: 128, w: 128 },
    sprite: MapBlocksBorderSprite.WaterUp,
    type: MapBlockType.Water,
    isCorner: false,
    position: [BorderPositions.Up],
    layer: 1,
}

export const waterGroundBorderLeft: MapBlockBorder = {
    spriteBox: { x: 0, y: 0, h: 128, w: 128 },
    sprite: MapBlocksBorderSprite.WaterLeft,
    type: MapBlockType.Water,
    isCorner: false,
    position: [BorderPositions.Left],
    layer: 1,
}

export const waterGroundBorderRight: MapBlockBorder = {
    spriteBox: { x: 0, y: 0, h: 128, w: 128 },
    sprite: MapBlocksBorderSprite.WaterRight,
    type: MapBlockType.Water,
    isCorner: false,
    position: [BorderPositions.Right],
    layer: 1,
}

export const waterGroundBorderUpRight: MapBlockBorder = {
    spriteBox: { x: 0, y: 0, h: 128, w: 128 },
    sprite: MapBlocksBorderSprite.WaterUpRight,
    type: MapBlockType.Water,
    isCorner: true,
    position: [BorderPositions.Up, BorderPositions.Right],
    layer: 1,
}
export const waterGroundBorderDownRight: MapBlockBorder = {
    spriteBox: { x: 0, y: 0, h: 128, w: 128 },
    sprite: MapBlocksBorderSprite.WaterDownRight,
    type: MapBlockType.Water,
    isCorner: true,
    position: [BorderPositions.Down, BorderPositions.Right],
    layer: 1,
}
export const waterGroundBorderUpLeft: MapBlockBorder = {
    spriteBox: { x: 0, y: 0, h: 128, w: 128 },
    sprite: MapBlocksBorderSprite.WaterUpLeft,
    type: MapBlockType.Water,
    isCorner: true,
    position: [BorderPositions.Up, BorderPositions.Left],
    layer: 1,
}
export const waterGroundBorderDownLeft: MapBlockBorder = {
    spriteBox: { x: 0, y: 0, h: 128, w: 128 },
    sprite: MapBlocksBorderSprite.WaterDownLeft,
    type: MapBlockType.Water,
    isCorner: true,
    position: [BorderPositions.Down, BorderPositions.Left],
    layer: 1,
}