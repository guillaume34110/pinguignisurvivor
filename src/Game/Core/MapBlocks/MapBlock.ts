import {HitBox} from "../StartData/StartData";

export interface MapBlock {
    id: number,
    spriteBox: HitBox,
    hitBox: HitBox,
    rotationX: number,
    rotationY: number,
    translateY: number,
    sprite: string,
    type: MapBlockType,
}

export enum MapBlockType {
    xWall, yWall, tree,
}