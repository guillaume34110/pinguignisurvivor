import {GameData} from "../StartData/StartData";
import {buildingCollisionWithEnemies, mapBlocks_CollisionWithHero} from "./MapBlocksUtilities/MapBlocks_Colisions";
import {mapBlocks_HitBox} from "./MapBlocksUtilities/MapBlocks_HitBox";

export const mapBlocksUpdate = (gameData:GameData) => {
    mapBlocks_HitBox(gameData)
    mapBlocks_CollisionWithHero(gameData)
    buildingCollisionWithEnemies(gameData)
}