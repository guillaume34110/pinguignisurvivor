import {GameData} from "../StartData/StartData";
import {buildingCollisionWithHero} from "./BuildingColisions&HitBoxUpdate";

export const buildingUpdate = (gameData:GameData) => {
    buildingCollisionWithHero(gameData)
}