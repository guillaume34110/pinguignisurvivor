import {GameData} from "../StartData/StartData";
import {spawnEnemies} from "./EnemyFunctions/SpawnEnemies";

export const enemiesUpdate = (gameDate:GameData) => {
    spawnEnemies(gameDate)
}