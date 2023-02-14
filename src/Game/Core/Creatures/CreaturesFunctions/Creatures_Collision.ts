import { GameData } from "../../StartData/StartData";
import { hitBoxMatch } from "../../Utilities/HitBoxMatch";
import { creatures_CollisionWithMapBlockMove, creatures_collisionBetweenMove, creatures_pushOtherCreature } from './Creatures_Move';
import { Creature } from "../Creature";
import { MapBlock, MapBlockType } from "../../MapBlocks/MapBlock";
import { creature_MakeBabyWithCreature } from "./Creature_Nursery";
import { Item, ItemType } from "../../Items/Item";
import { creature_Nutrition } from './Creature_Nutrition';

export const creatures_CollisionWithCreatures = (gameData: GameData, type: string, creatureBoxToMove: Creature, otherCreature: Creature) => {

    if (otherCreature !== creatureBoxToMove) {
        if (hitBoxMatch(otherCreature.hitBox, creatureBoxToMove.hitBox)) {
            creature_MakeBabyWithCreature(gameData.creatures, creatureBoxToMove, otherCreature)
            if (creatureBoxToMove.typeFoodToEat.includes(otherCreature.type)) creature_Nutrition(null, otherCreature, creatureBoxToMove)
            if (type === "x"
                && ((creatureBoxToMove.hitBox.x - otherCreature.hitBox.x > 0
                    && creatureBoxToMove.spriteBox.direction.x < 0)
                    || (creatureBoxToMove.hitBox.x - otherCreature.hitBox.x < 0
                        && creatureBoxToMove.spriteBox.direction.x > 0)
                )) {
                if (otherCreature.weight >= creatureBoxToMove.weight) creatures_collisionBetweenMove(creatureBoxToMove, type)
                else creatures_pushOtherCreature(otherCreature, creatureBoxToMove, type)
            }
            if (type === "y"
                && ((creatureBoxToMove.hitBox.y - otherCreature.hitBox.y > 0
                    && creatureBoxToMove.spriteBox.direction.y < 0)
                    || (creatureBoxToMove.hitBox.y - otherCreature.hitBox.y < 0
                        && creatureBoxToMove.spriteBox.direction.y > 0)
                )) {
                if (otherCreature.weight >= creatureBoxToMove.weight) creatures_collisionBetweenMove(creatureBoxToMove, type)
                else creatures_pushOtherCreature(otherCreature, creatureBoxToMove, type)
            }
        }
    }
}


export const creature_CollisionWithSolidMapBlocks = (creature: Creature, mapBlock: MapBlock) => {

    if (mapBlock.type === MapBlockType.Water || mapBlock.type === MapBlockType.Space) {

        if (hitBoxMatch(mapBlock.hitBox, creature.hitBox)) {
            creature.lifeTime = 0
            console.log("fall in space ")
        }
    }
}

export const creature_collisionWithItem = (creature: Creature, item: Item) => {

    if (hitBoxMatch(item.hitBox, creature.hitBox)) {
        if (creature.typeFoodToEat.includes(item.type)) creature_Nutrition(item, null, creature)
        if ((item.type === ItemType.Rock)
            || (item.type === ItemType.SeedsTree))
            creatures_CollisionWithMapBlockMove(creature)
    }
}

