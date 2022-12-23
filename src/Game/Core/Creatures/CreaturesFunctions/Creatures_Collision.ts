import { GameData } from "../../StartData/StartData";
import { hitBoxMatch } from "../../Utilities/HitBoxMatch";
import { creatures_CollisionWithMapBlockMove, creatures_collisionBetweenMove } from "./Creatures_Move";
import { Creature } from "../Creature";
import { MapBlock, MapBlockType } from "../../MapBlocks/MapBlock";
import { creature_MakeBaby } from "./Creature_Nursery";
import { Item, ItemType } from "../../Items/Item";

export const creatures_CollisionWithCreatures = (gameData: GameData, type: string, enemyBoxToMove: Creature, otherCreature: Creature) => {

    if (otherCreature !== enemyBoxToMove) {
        if (hitBoxMatch(otherCreature.hitBox, enemyBoxToMove.hitBox)) {
            creature_MakeBaby(gameData, enemyBoxToMove, otherCreature)
            if (type === "x"
                && ((enemyBoxToMove.hitBox.x - otherCreature.hitBox.x > 0
                    && enemyBoxToMove.spriteBox.direction.x < 0)
                    || (enemyBoxToMove.hitBox.x - otherCreature.hitBox.x < 0
                        && enemyBoxToMove.spriteBox.direction.x > 0)
                )) creatures_collisionBetweenMove(enemyBoxToMove, type)
            if (type === "y"
                && ((enemyBoxToMove.hitBox.y - otherCreature.hitBox.y > 0
                    && enemyBoxToMove.spriteBox.direction.y < 0)
                    || (enemyBoxToMove.hitBox.y - otherCreature.hitBox.y < 0
                        && enemyBoxToMove.spriteBox.direction.y > 0)
                )) creatures_collisionBetweenMove(enemyBoxToMove, type)
        }
    }

}
export const creatures_CollisionWithCreaturesWithoutHitboxMatch = ( type: string, enemyBoxToMove: Creature, otherCreature: Creature) => {

    if (otherCreature !== enemyBoxToMove) {     
            
            if (type === "x"
                && ((enemyBoxToMove.hitBox.x - otherCreature.hitBox.x > 0
                    && enemyBoxToMove.spriteBox.direction.x < 0)
                    || (enemyBoxToMove.hitBox.x - otherCreature.hitBox.x < 0
                        && enemyBoxToMove.spriteBox.direction.x > 0)
                )) creatures_collisionBetweenMove(enemyBoxToMove, type)
            if (type === "y"
                && ((enemyBoxToMove.hitBox.y - otherCreature.hitBox.y > 0
                    && enemyBoxToMove.spriteBox.direction.y < 0)
                    || (enemyBoxToMove.hitBox.y - otherCreature.hitBox.y < 0
                        && enemyBoxToMove.spriteBox.direction.y > 0)
                )) creatures_collisionBetweenMove(enemyBoxToMove, type)
        }
}


export const creature_CollisionWithSolidMapBlocks = (creature: Creature, mapBlock: MapBlock) => {

    if (mapBlock.type === MapBlockType.space) {
        if (hitBoxMatch(mapBlock.hitBox, creature.hitBox)) {
            creature.health = 0
            console.log("fall in space ")
        }
    }

}


export const creature_collisionWithItem = (creature: Creature, item: Item) => {

    if (hitBoxMatch(item.hitBox, creature.hitBox)) {
        if (item.type === ItemType.foodVegetable) creature_EatFood(item, creature)
        if (item.type === ItemType.Solid) creatures_CollisionWithMapBlockMove(creature)
    }
}


export const creature_EatFood = (item: Item, creature: Creature) => {

    creature.health += item.value
    if (creature.health > creature.maxHealth) {
        creature.health = creature.maxHealth
    }
    item.isTaken = true

}

