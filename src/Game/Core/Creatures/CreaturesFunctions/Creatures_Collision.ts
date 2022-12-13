import {GameData} from "../../StartData/StartData";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";
import {creatures_collisionBetweenMove} from "./Creatures_Move";
import {Creature} from "../Creature";

export const creatures_CollisionWithEnemies = (gameData: GameData, type: string, enemyBoxToMove: Creature) => {
    gameData.creatures.forEach(enemyToCompare => {
        if (enemyToCompare !== enemyBoxToMove) {
            if (hitBoxMatch(enemyToCompare.hitBox, enemyBoxToMove.hitBox)) {
                if (type === "x"
                    && ((enemyBoxToMove.hitBox.x - enemyToCompare.hitBox.x > 0
                        && enemyBoxToMove.spriteBox.direction.x < 0)
                    || (enemyBoxToMove.hitBox.x - enemyToCompare.hitBox.x < 0
                            && enemyBoxToMove.spriteBox.direction.x > 0)
                ))creatures_collisionBetweenMove(enemyBoxToMove, type)
                if (type === "y"
                    && ((enemyBoxToMove.hitBox.y - enemyToCompare.hitBox.y > 0
                            && enemyBoxToMove.spriteBox.direction.y < 0)
                        || (enemyBoxToMove.hitBox.y - enemyToCompare.hitBox.y < 0
                            && enemyBoxToMove.spriteBox.direction.y > 0)
                    ))creatures_collisionBetweenMove(enemyBoxToMove, type)
            }
        }
    })
}