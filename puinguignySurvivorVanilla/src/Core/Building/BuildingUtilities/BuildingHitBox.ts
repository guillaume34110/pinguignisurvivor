import { GameData, HitBox} from "../../StartData/StartData.js";
import {Building, BuildingType} from "../Building.js";


export const buildingHitBox = (gameData:GameData) => {
    gameData.building.forEach(building => {
        building.hitBox = buildingHitBoxDetermination(building)
    })
}
const buildingHitBoxDetermination = ({spriteBox, type}: Building): HitBox => {

    if (type === BuildingType.yWall) {
        return {
            x: spriteBox.x,
            y: spriteBox.y ,
            h: spriteBox.h,
            w: 2
        }
    } else if (type === BuildingType.xWall) {
        return {
            x: spriteBox.x ,
            y: spriteBox.y,
            w: spriteBox.w,
            h: 2
        }
    } else if (type === BuildingType.tree) {
        return {
            x: spriteBox.x ,
            y: spriteBox.y + spriteBox.h / 2 - 30,
            w: spriteBox.w,
            h: 60
        }
    }
    return spriteBox
}