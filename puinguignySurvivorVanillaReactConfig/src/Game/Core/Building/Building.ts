import {HitBox} from "../StartData/StartData";

export interface Building {
    id: number,
    spriteBox: HitBox,
    hitBox: HitBox,
    rotationX: number,
    rotationY: number,
    translateY: number,
    sprite: string,
    type: BuildingType,
}

export enum BuildingType {
    xWall, yWall, tree,
}