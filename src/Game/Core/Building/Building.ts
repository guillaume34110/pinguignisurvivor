import {HitBoxClass} from "../StartData/StartData";

export interface Building {
    id: number,
    spriteBox: HitBoxClass,
    hitBox: HitBoxClass,
    rotationX: number,
    rotationY: number,
    translateY: number,
    sprite: string,
    type: BuildingType,
}

export enum BuildingType {
    xWall, yWall, tree,
}