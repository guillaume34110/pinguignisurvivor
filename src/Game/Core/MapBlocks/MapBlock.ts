
import { HitBox } from "../StartData/StartData";
import { MapBlocksSprite } from "./MapBlocksSprite";
import { MapBlockBorder } from '../MapBlockBorder/MapBlockBorder';

export interface MapBlock {
    id: number,
    spriteBox: HitBox,
    hitBox: HitBox,
    rotationX: number,
    rotationY: number,
    translateY: number,
    sprite: MapBlocksSprite,
    type: MapBlockType,
    coordinate: number,
    walkable : boolean,
    layer : number ,
    borders: Borders,
}



interface Borders { 
    up :  MapBlockBorder[]
    down : MapBlockBorder[]
    left : MapBlockBorder[]
    right : MapBlockBorder[]
    downRight : MapBlockBorder[]
    downLeft : MapBlockBorder[]
    upLeft : MapBlockBorder[]
    upRight : MapBlockBorder[]
}

export enum MapBlockType {
    Space = "space", Dirt = "Dirt", Grass = "Grass", Snow = "Snow", emptyGround = "emptyGround", Water = "Water"
}