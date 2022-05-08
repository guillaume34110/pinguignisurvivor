import {GameData} from "../../StartData/StartData";
import {spawnEnemies} from "./SpawnEnemies";
import {moveEnemies} from "./MoveEnemies";
import {enemiesHitBox} from "./enemiesHitBox";
import {enemiesCollisionWithEnemies} from "./EnemiesCollision";

export const enemiesUpdate = (gameData:GameData) => {
    spawnEnemies(gameData)
    enemiesHitBox(gameData)
    enemiesCollisionWithEnemies(gameData)
    moveEnemies(gameData)
}