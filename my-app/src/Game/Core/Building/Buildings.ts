import {Building, BuildingType} from "./Building";

export interface Buildings {
    verticalWall: Building,
    horizontalWall: Building,
    tree :Building
}

export const buildingsGeneric: Buildings = {
    verticalWall: {
        spriteBox: {x: 0, y: 0, h: 100, w: 100},
        hitBox: {x: 0, y: 0, h: 0, w: 0},
        sprite: "grey128",
        rotationY: 90,
        rotationX: 90,
        translateY: 50,
        type: BuildingType.xWall
    },
    horizontalWall: {
        spriteBox: {x: 0, y: 0, h: 100, w: 100},
        hitBox: {x: 0, y: 0, h: 0, w: 0},
        sprite: "grey128",
        rotationY: 0,
        rotationX: 90,
        translateY: 50,
        type: BuildingType.yWall
    },
    tree:{
        spriteBox: {x: 0, y: 0, h: 300, w: 40},
        hitBox: {x: 0, y: 0, h: 0, w: 0},
        sprite: "grey128",
        rotationY: 0,
        rotationX: 90,
        translateY: 50,
        type:BuildingType.tree
    },
}