import {GameData} from "../StartData/StartData";
import {spawnEnemies} from "./EnemyFunctions/SpawnEnemies";
import {moveEnemies} from "./EnemyFunctions/MoveEnemies";
import {enemiesHtiBox} from "./EnemyFunctions/enemiesHtiBox";

export const enemiesUpdate = (gameData:GameData) => {
    spawnEnemies(gameData)
    enemiesHtiBox(gameData)
    moveEnemies(gameData)
}