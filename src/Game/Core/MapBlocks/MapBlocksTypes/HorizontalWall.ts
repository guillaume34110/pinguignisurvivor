import { MapBlockType } from "../MapBlock";

export const  horizontalWall = {
    id: 0,
    spriteBox: {x: 0, y: 0, h: 100, w: 100},
    hitBox: {x: 0, y: 0, h: 0, w: 0},
    sprite: "grey128",
    rotationY: 0,
    rotationX: 90,
    translateY: 50,
    type: MapBlockType.xWall
}