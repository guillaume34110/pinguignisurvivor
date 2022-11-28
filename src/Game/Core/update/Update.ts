import {heroUpdate} from "../Hero/HeroUpdate";
import {enemiesUpdate} from "../Enemies/EnemiesUpdate";
import {heroProjectile_Update} from "../HeroProjectile/HeroProjectile_Update";
import {itemUpdate} from "../Items/ItemUpdate";
import {buildingUpdate} from "../Building/BuildingUpdate";
import {GameData} from "../StartData/StartData";

export const updateCore = (gameData:GameData) => {
    heroUpdate(gameData)
    enemiesUpdate(gameData)
    heroProjectile_Update(gameData)
    itemUpdate(gameData)
    buildingUpdate(gameData)
}

