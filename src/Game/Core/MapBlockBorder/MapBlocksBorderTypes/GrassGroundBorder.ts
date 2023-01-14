import { MapBlocksBorderSprite } from "../MapBlockBorderSprite";
import { BorderPositions, MapBlockBorder } from "../MapBlockBorder";
import { MapBlockType } from "../../MapBlocks/MapBlock";



export const grassGroundBorderDown : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassDown,
    type:MapBlockType.Grass,
    isCorner : false,
    position:[ BorderPositions.Down ],
    layer : 3,
}

export const grassGroundBorderUp : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassUp,
    type:MapBlockType.Grass,
    isCorner : false,
    position:[ BorderPositions.Up ],
    layer : 3,
}

export const grassGroundBorderLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassLeft,
    type:MapBlockType.Grass,
    isCorner : false,
    position:[ BorderPositions.Left ],
    layer : 3,
}

export const grassGroundBorderRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassRight,
    type:MapBlockType.Grass,
    isCorner : false,
    position:[ BorderPositions.Right ],
    layer : 3,
}


export const grassGroundBorderDown2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassDown2,
    type:MapBlockType.Grass,
    isCorner : false,
    position:[ BorderPositions.Down ],
    layer : 3,
}

export const grassGroundBorderUp2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassUp2,
    type:MapBlockType.Grass,
    isCorner : false,
    position:[ BorderPositions.Up ],
    layer : 3,
}

export const grassGroundBorderLeft2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassLeft2,
    type:MapBlockType.Grass,
    isCorner : false,
    position:[ BorderPositions.Left ],
    layer : 3,
}

export const grassGroundBorderRight2 : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassRight2,
    type:MapBlockType.Grass,
    isCorner : false,
    position:[ BorderPositions.Right ],
    layer : 3,
}

export const grassGroundBorderUpRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassUpRight,
    type:MapBlockType.Grass,
    isCorner : true,
    position:[ BorderPositions.Up ,  BorderPositions.Right ],
    layer : 3,
}
export const grassGroundBorderDownRight : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassDownRight,
    type:MapBlockType.Grass,  
    isCorner : true,
    position:[ BorderPositions.Down ,  BorderPositions.Right ],
    layer : 3,
}
export const grassGroundBorderUpLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassUpLeft,
    type:MapBlockType.Grass,
    isCorner : true,
    position:[ BorderPositions.Up ,  BorderPositions.Left ],
    layer : 3,
}
export const grassGroundBorderDownLeft : MapBlockBorder = {
    spriteBox: {x: 0, y: 0, h: 128, w: 128},
    sprite: MapBlocksBorderSprite.GroundGrassDownLeft,
    type:MapBlockType.Grass,
    isCorner : true,
    position:[ BorderPositions.Down ,  BorderPositions.Left ],
    layer : 3,
}