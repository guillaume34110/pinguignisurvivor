import {GameData} from "../../StartData/StartData";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";
import {creatures_collisionBetweenMove} from "./Creatures_Move";
import {Creature} from "../Creature";
import { mouse } from "../CreaturesTypes/Mouse";

export const creatures_CollisionWithEnemies = (gameData: GameData, type: string, enemyBoxToMove: Creature) => {
    gameData.creatures.forEach(enemyToCompare => {
        if (enemyToCompare !== enemyBoxToMove) {
            if (hitBoxMatch(enemyToCompare.hitBox, enemyBoxToMove.hitBox)) {
                creature_MakeBaby(gameData , enemyBoxToMove , enemyToCompare)
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

const creature_MakeBaby = (gameData : GameData, enemyBoxToMove : Creature , enemyToCompare : Creature ) => { 
 
    if (enemyBoxToMove.fertility> 1000  && enemyToCompare.fertility> 1000){
        enemyBoxToMove.fertility = 0
        enemyToCompare.fertility = 0
        console.log("baby born")
    gameData.creatures.push(JSON.parse(JSON.stringify(mouse)))
 const last = gameData.creatures[gameData.creatures.length - 1]
        last.spriteBox.x =( enemyBoxToMove.spriteBox.x + enemyToCompare.spriteBox.x) / 2
        last.spriteBox.y =( enemyBoxToMove.spriteBox.y + enemyToCompare.spriteBox.y) / 2
        last.spriteBox.speed +=  Math.random()*0.5
        last.id = gameData.creatures.length - 1}
}

export const creature_Fertility = (gameData: GameData) => { 
    gameData.creatures.forEach(creature =>  {
        creature.fertility++
    })
} 