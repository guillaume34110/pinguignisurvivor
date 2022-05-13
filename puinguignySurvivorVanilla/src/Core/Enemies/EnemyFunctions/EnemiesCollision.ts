import {GameData} from "../../StartData/StartData.js";
import {enemies} from "../enemies.js";
import {HitBoxCls} from "../../Utilities/HitBoxMatch.js";
import {collisionBetweenEnemiesMove, enemyCollisionWithBuildingMove} from "./MoveEnemies.js";

export const enemiesCollisionWithEnemies = (gameData: GameData) => {
    // gameData.enemies.forEach(enemyToCompare => {
    //     gameData.enemies.forEach(enemyTarget => {
    //         if (enemyToCompare !== enemyTarget ) {
    //             if (HitBoxCls.hitBoxMatch(enemyToCompare.hitBox, enemyTarget.hitBox)) collisionBetweenEnemiesMove(enemyToCompare ,enemyTarget)
    //         }
    //     })
    // })
}