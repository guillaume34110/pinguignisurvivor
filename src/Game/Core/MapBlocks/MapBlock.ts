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
}

export enum MapBlockType {
    space, groundDirt , groundGrass , groundSnow , emptyGround
}