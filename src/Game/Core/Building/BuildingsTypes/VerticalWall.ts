import { BuildingType } from "../Building";

export const verticalWall= {
    id: 0,
    spriteBox: {x: 0, y: 0, h: 100, w: 100},
    hitBox: {x: 0, y: 0, h: 0, w: 0},
    sprite: "grey128",
    rotationY: 90,
    rotationX: 90,
    translateY: 50,
    type: BuildingType.yWall
}