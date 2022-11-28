import {GameData, HitBox} from "../../StartData/StartData";
import {Building} from "../Building";


export const building_HitBox = (gameData:GameData) => {
    gameData.building.forEach(building => {
        building.hitBox = buildingHitBoxDetermination(building)
    })
}
const buildingHitBoxDetermination = ({spriteBox, type}: Building): HitBox => {
    return spriteBox
}