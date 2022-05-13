import {GameData} from "../StartData/StartData";
import {spawnEnemies} from "./EnemyFunctions/SpawnEnemies";
import {moveEnemies} from "./EnemyFunctions/MoveEnemies";
import {enemiesHitBox} from "./EnemyFunctions/enemiesHitBox";
import {enemiesCollisionWithEnemies} from "./EnemyFunctions/EnemiesCollision";

export const enemiesUpdate = (gameData:GameData) => {
    spawnEnemies(gameData)
    enemiesHitBox(gameData)
    enemiesCollisionWithEnemies(gameData)
    moveEnemies(gameData)
}