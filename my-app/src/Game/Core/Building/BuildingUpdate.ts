import {GameData} from "../StartData/StartData";
import {buildingCollisionWithHero} from "./BuildingUtilities/BuildingColisions";
import {buildingHitBox} from "./BuildingUtilities/BuildingHitBox";

export const buildingUpdate = (gameData:GameData) => {
    buildingHitBox(gameData)
    buildingCollisionWithHero(gameData)
}