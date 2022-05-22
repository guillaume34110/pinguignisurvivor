import {GameData} from "../StartData/StartData";
import {spawnEnemies} from "./EnemyFunctions/SpawnEnemies";
import {moveEnemies} from "./EnemyFunctions/MoveEnemies";
import {enemiesHitBox} from "./EnemyFunctions/enemiesHitBox";
import {collisionEnemiesWithHero} from "./EnemyFunctions/collisionEnemyWithHero";

export const enemiesUpdate = (gameData:GameData) => {
    spawnEnemies(gameData)
    enemiesHitBox(gameData)

    moveEnemies(gameData)
    collisionEnemiesWithHero(gameData)
}