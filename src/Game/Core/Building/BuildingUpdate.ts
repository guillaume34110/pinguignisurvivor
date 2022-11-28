import {GameData} from "../StartData/StartData";
import {buildingCollisionWithEnemies, building_CollisionWithHero} from "./BuildingUtilities/Building_Colisions";
import {building_HitBox} from "./BuildingUtilities/Building_HitBox";

export const buildingUpdate = (gameData:GameData) => {
    building_HitBox(gameData)
    building_CollisionWithHero(gameData)
    buildingCollisionWithEnemies(gameData)
}