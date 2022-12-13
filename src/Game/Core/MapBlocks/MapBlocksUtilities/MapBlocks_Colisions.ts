import { creatures_CollisionWithMapBlockMove } from "../../Creatures/CreaturesFunctions/Creatures_Move";
import {GameData} from "../../StartData/StartData";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";



export const mapBlocksCollisionWithCreatures = (gameData: GameData) => {
    gameData.mapBlocks.forEach(mapBlocks => {
        gameData.creatures.forEach(enemy => {
            if (hitBoxMatch(mapBlocks.hitBox, enemy.hitBox)) creatures_CollisionWithMapBlockMove(enemy)
        })
    })
}