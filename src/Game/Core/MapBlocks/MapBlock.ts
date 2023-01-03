import {HitBox} from "../StartData/StartData";
import { MapBlocksSprite } from "./MapBlocksSprite";

export interface MapBlock {
    id: number,
    spriteBox: HitBox,
    hitBox: HitBox,
    rotationX: number,
    rotationY: number,
    translateY: number,
    sprite: MapBlocksSprite,
    type: MapBlockType,
    coordinate : number,
    isAnimated : boolean,
}

export enum MapBlockType {
    Space = "space", Dirt = "Dirt", Grass = "Grass" , Snow = "Snow" , emptyGround ="emptyGround"
}