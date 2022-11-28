import {GameData} from "../../StartData/StartData";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";
import {collisionBetweenEnemiesMove} from "./MoveEnemies";
import {Enemy} from "../Enemy";

export const enemiesCollisionWithEnemies = (gameData: GameData, type: string, enemyBoxToMove: Enemy) => {
    gameData.enemies.forEach(enemyToCompare => {
        if (enemyToCompare !== enemyBoxToMove) {
            if (hitBoxMatch(enemyToCompare.hitBox, enemyBoxToMove.hitBox)) {
                if (type === "x"
                    && ((enemyBoxToMove.hitBox.x - enemyToCompare.hitBox.x > 0
                        && enemyBoxToMove.spriteBox.direction.x < 0)
                    || (enemyBoxToMove.hitBox.x - enemyToCompare.hitBox.x < 0
                            && enemyBoxToMove.spriteBox.direction.x > 0)
                ))collisionBetweenEnemiesMove(enemyBoxToMove, type)
                if (type === "y"
                    && ((enemyBoxToMove.hitBox.y - enemyToCompare.hitBox.y > 0
                            && enemyBoxToMove.spriteBox.direction.y < 0)
                        || (enemyBoxToMove.hitBox.y - enemyToCompare.hitBox.y < 0
                            && enemyBoxToMove.spriteBox.direction.y > 0)
                    ))collisionBetweenEnemiesMove(enemyBoxToMove, type)
            }
        }
    })
}