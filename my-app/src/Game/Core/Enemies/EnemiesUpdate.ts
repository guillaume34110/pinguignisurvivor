import {GameData} from "../StartData/StartData";
import {spawnEnemies} from "./EnemyFunctions/SpawnEnemies";
import {moveEnemies} from "./EnemyFunctions/MoveEnemies";

export const enemiesUpdate = (gameData:GameData) => {
    spawnEnemies(gameData)
    moveEnemies(gameData)
}