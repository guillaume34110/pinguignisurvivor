import {GameData} from "../../StartData/StartData";
import {enemies} from "../enemies";
import {HitBoxCls} from "../../Utilities/HitBoxMatch";
import {collisionBetweenEnemiesMove, enemyCollisionWithBuildingMove} from "./MoveEnemies";

export const enemiesCollisionWithEnemies = (gameData: GameData) => {
    gameData.enemies.forEach(enemyToCompare => {
        gameData.enemies.forEach(enemyTarget => {
            if (enemyToCompare !== enemyTarget ) {
                if (HitBoxCls.hitBoxMatch(enemyToCompare.hitBox, enemyTarget.hitBox)) collisionBetweenEnemiesMove(enemyToCompare ,enemyTarget)
            }
        })
    })
}