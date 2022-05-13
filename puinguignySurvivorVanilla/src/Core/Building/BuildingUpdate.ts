import {GameData} from "../StartData/StartData.js";
import {buildingCollisionWithEnemies, buildingCollisionWithHero} from "./BuildingUtilities/BuildingColisions.js";
import {buildingHitBox} from "./BuildingUtilities/BuildingHitBox.js";

export const buildingUpdate = (gameData:GameData) => {
    buildingHitBox(gameData)
    buildingCollisionWithHero(gameData)
   // buildingCollisionWithEnemies(gameData)
}