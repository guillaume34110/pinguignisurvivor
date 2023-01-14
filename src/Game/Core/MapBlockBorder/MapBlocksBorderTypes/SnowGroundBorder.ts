import { MapBlocksBorderSprite } from "../MapBlockBorderSprite";
import { BorderPositions, MapBlockBorder } from "../MapBlockBorder";
import { MapBlockType } from "../../MapBlocks/MapBlock";

export const snowGroundBorderDown : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowDown,
    type:MapBlockType.Snow,
    isCorner : false,
    position:[ BorderPositions.Down ],
    layer : 4,
}

export const snowGroundBorderUp : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowUp,
    type:MapBlockType.Snow,
    isCorner : false,
    position:[ BorderPositions.Up ],
    layer : 4,
}

export const snowGroundBorderLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowLeft,
    type:MapBlockType.Snow,
    isCorner : false,
    position:[ BorderPositions.Left ],
    layer : 4,
}

export const snowGroundBorderRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowRight,
    type:MapBlockType.Snow,
    isCorner : false,
    position:[BorderPositions.Right ],
    layer : 4,
}


export const snowGroundBorderDown2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowDown2,
    type:MapBlockType.Snow,
    isCorner : false,
    position:[ BorderPositions.Down ],
    layer : 4,
}

export const snowGroundBorderUp2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowUp2,
    type:MapBlockType.Snow,
    isCorner : false,
    position:[ BorderPositions.Up ],
    layer : 4,
}

export const snowGroundBorderLeft2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowLeft2,
    type:MapBlockType.Snow,
    isCorner : false,
    position:[ BorderPositions.Left ],
    layer : 4,
}

export const snowGroundBorderRight2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowRight2,
    type:MapBlockType.Snow,
    isCorner : false,
    position:[BorderPositions.Right ],
    layer : 4,
}

export const snowGroundBorderUpRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowUpRight,
    type:MapBlockType.Snow,
    isCorner : true,
    position:[BorderPositions.Up, BorderPositions.Right ],
    layer : 4,
}
export const snowGroundBorderDownRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowDownRight,
    type:MapBlockType.Snow,
    isCorner : true,
    position:[BorderPositions.Down, BorderPositions.Right ],
    layer : 4,
}
export const snowGroundBorderUpLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowUpLeft,
    type:MapBlockType.Snow,
    isCorner : true,
    position:[BorderPositions.Up, BorderPositions.Left ],
    layer : 4,
}
export const snowGroundBorderDownLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundSnowDownLeft,
    type:MapBlockType.Snow,
    isCorner : true,
    position:[BorderPositions.Down, BorderPositions.Left ],
    layer : 4,
}