import {GameData} from "../../StartData/StartData";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";
import {enemies_collisionBetweenMove} from "./Enemies_Move";
import {Enemy} from "../Enemy";

export const enemies_CollisionWithEnemies = (gameData: GameData, type: string, enemyBoxToMove: Enemy) => {
    gameData.enemies.forEach(enemyToCompare => {
        if (enemyToCompare !== enemyBoxToMove) {
            if (hitBoxMatch(enemyToCompare.hitBox, enemyBoxToMove.hitBox)) {
                if (type === "x"
                    && ((enemyBoxToMove.hitBox.x - enemyToCompare.hitBox.x > 0
                        && enemyBoxToMove.spriteBox.direction.x < 0)
                    || (enemyBoxToMove.hitBox.x - enemyToCompare.hitBox.x < 0
                            && enemyBoxToMove.spriteBox.direction.x > 0)
                ))enemies_collisionBetweenMove(enemyBoxToMove, type)
                if (type === "y"
                    && ((enemyBoxToMove.hitBox.y - enemyToCompare.hitBox.y > 0
                            && enemyBoxToMove.spriteBox.direction.y < 0)
                        || (enemyBoxToMove.hitBox.y - enemyToCompare.hitBox.y < 0
                            && enemyBoxToMove.spriteBox.direction.y > 0)
                    ))enemies_collisionBetweenMove(enemyBoxToMove, type)
            }
        }
    })
}