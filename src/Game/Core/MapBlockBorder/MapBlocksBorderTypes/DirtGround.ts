import { MapBlockType } from "../../MapBlocks/MapBlock";
import { MapBlocksBorderSprite } from "../MapBlockBorderSprite";
import { BorderPositions, MapBlockBorder } from "../MapBlockBorder";


export const dirtGroundBorderDown : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtDown,
    type:MapBlockType.Dirt,
    isCorner : false,
    position:[   BorderPositions.Down ],
    layer : 2,
}

export const dirtGroundBorderUp : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtUp,
    type:MapBlockType.Dirt,
    isCorner : false,
    position:[   BorderPositions.Up ],
    layer : 2,
}

export const dirtGroundBorderLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtLeft,
    type:MapBlockType.Dirt,
    isCorner : false,
    position:[   BorderPositions.Left ],
    layer : 2,
}

export const dirtGroundBorderRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtRight,
    type:MapBlockType.Dirt,
    isCorner : false,
    position:[   BorderPositions.Right ],
    layer : 2,
}

export const dirtGroundBorderDown2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtDown2,
    type:MapBlockType.Dirt,
    isCorner : false,
    position:[   BorderPositions.Down ],
    layer : 2,
}

export const dirtGroundBorderUp2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtUp2,
    type:MapBlockType.Dirt,
    isCorner : false,
    position:[   BorderPositions.Up ],
    layer : 2,
}

export const dirtGroundBorderLeft2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtLeft2,
    type:MapBlockType.Dirt,
    isCorner : false,
    position:[   BorderPositions.Left ],
    layer : 2,
}

export const dirtGroundBorderRight2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtRight2,
    type:MapBlockType.Dirt,
    isCorner : false,
    position:[   BorderPositions.Right ],
    layer : 2,
}

export const dirtGroundBorderUpRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtUpRight,
    type:MapBlockType.Dirt,
    isCorner : true,
    position:[ BorderPositions.Up ,  BorderPositions.Right ],
    layer : 2,
}
export const dirtGroundBorderDownRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtDownRight,
    type:MapBlockType.Dirt,
    isCorner : true,
    position:[ BorderPositions.Down ,  BorderPositions.Right ],
    layer : 2,
}
export const dirtGroundBorderUpLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtUpLeft,
    type:MapBlockType.Dirt,
    isCorner : true,
    position:[ BorderPositions.Up ,  BorderPositions.Left ],
    layer : 2,
}
export const dirtGroundBorderDownLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundDirtDownLeft,
    type:MapBlockType.Dirt,
    isCorner : true,
    position:[ BorderPositions.Down ,  BorderPositions.Left ],
    layer : 2,
}