import {GameData} from "../StartData/StartData.js";
import {spawnEnemies} from "./EnemyFunctions/SpawnEnemies.js";
import {moveEnemies} from "./EnemyFunctions/MoveEnemies.js";
import {enemiesHitBox} from "./EnemyFunctions/enemiesHitBox.js";
import {enemiesCollisionWithEnemies} from "./EnemyFunctions/EnemiesCollision.js";

export const enemiesUpdate = (gameData:GameData) => {
    spawnEnemies(gameData)
    enemiesHitBox(gameData)
    enemiesCollisionWithEnemies(gameData)
    moveEnemies(gameData)
}