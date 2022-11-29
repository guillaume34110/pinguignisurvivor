import {heroUpdate} from "../Hero/GodUpdate";
import {enemiesUpdate} from "../Enemies/EnemiesUpdate";
import {heroProjectile_Update} from "../HeroProjectile/HeroProjectile_Update";
import {itemUpdate} from "../Items/ItemUpdate";
import {mapBlocksUpdate} from "../Building/MapBlocksUpdate";
import {GameData} from "../StartData/StartData";

export const updateCore = (gameData:GameData) => {
    heroUpdate(gameData)
    enemiesUpdate(gameData)
    heroProjectile_Update(gameData)
    itemUpdate(gameData)
    mapBlocksUpdate(gameData)
}

