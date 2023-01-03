import { GameData } from "../../StartData/StartData";
import { hitBoxMatch } from "../../Utilities/HitBoxMatch";
import { creatures_CollisionWithMapBlockMove, creatures_collisionBetweenMove, creatures_pushOtherCreature } from './Creatures_Move';
import { Creature } from "../Creature";
import { MapBlock, MapBlockType } from "../../MapBlocks/MapBlock";
import { creature_MakeBaby } from "./Creature_Nursery";
import { Item, ItemType } from "../../Items/Item";

export const creatures_CollisionWithCreatures = (gameData: GameData, type: string, creatureBoxToMove: Creature, otherCreature: Creature) => {

    if (otherCreature !== creatureBoxToMove) {
        if (hitBoxMatch(otherCreature.hitBox, creatureBoxToMove.hitBox)) {
            creature_MakeBaby(gameData, creatureBoxToMove, otherCreature)
            if (type === "x"
                && ((creatureBoxToMove.hitBox.x - otherCreature.hitBox.x > 0
                    && creatureBoxToMove.spriteBox.direction.x < 0)
                    || (creatureBoxToMove.hitBox.x - otherCreature.hitBox.x < 0
                        && creatureBoxToMove.spriteBox.direction.x > 0)
                )) {
                    if (otherCreature.weight >= creatureBoxToMove.weight) creatures_collisionBetweenMove(creatureBoxToMove, type)
                    else creatures_pushOtherCreature(otherCreature , creatureBoxToMove , type)}
            if (type === "y"
                && ((creatureBoxToMove.hitBox.y - otherCreature.hitBox.y > 0
                    && creatureBoxToMove.spriteBox.direction.y < 0)
                    || (creatureBoxToMove.hitBox.y - otherCreature.hitBox.y < 0
                        && creatureBoxToMove.spriteBox.direction.y > 0)
                )) {
                    if (otherCreature.weight >= creatureBoxToMove.weight) creatures_collisionBetweenMove(creatureBoxToMove, type)
                    else creatures_pushOtherCreature(otherCreature , creatureBoxToMove , type)}
        }
    }

}

export const creatures_CollisionWithCreaturesWithoutHitboxMatch = (type: string, enemyBoxToMove: Creature, otherCreature: Creature) => {

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

    if (mapBlock.type === MapBlockType.Space) {
        if (hitBoxMatch(mapBlock.hitBox, creature.hitBox)) {
            creature.health = 0
            console.log("fall in space ")
        }
    }

}

export const creature_collisionWithItem = (creature: Creature, item: Item) => {

    if (hitBoxMatch(item.hitBox, creature.hitBox)) {
        if (item.type === ItemType.FoodVegetable) creature_EatFood(item, creature)
        if (item.type === ItemType.Rock) creatures_CollisionWithMapBlockMove(creature)
    }
}

export const creature_EatFood = (item: Item, creature: Creature) => {

    /* creature.health += item.value
     if (creature.health > creature.maxHealth) {
         creature.health = creature.maxHealth
     }
     item.isTaken = true*/
    creature.health = creature.health + item.value > creature.maxHealth ? creature.maxHealth : creature.health + item.value;
    item.isTaken = true;

}
