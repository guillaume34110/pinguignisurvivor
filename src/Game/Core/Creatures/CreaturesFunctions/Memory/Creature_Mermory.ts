
import { Item } from "../../../Items/Item";
import { Creature } from "../../Creature";
import { MapBlock } from '../../../MapBlocks/MapBlock';



export const creature_MapBlockMemory = (creature: Creature , block : MapBlock) =>{
        if (creature.memory.mapBlocksOrdered[block.coordinate] === null) 
            creature.memory.mapBlocksOrdered[block.coordinate] = block     
    }


export const creatures_MemoryCreatures = (creature: Creature, OtherCreature: Creature) => {
    if (creature.typeFoodToEat.includes(OtherCreature.type) || OtherCreature.typeFoodToEat.includes(creature.type)) {
        let savedToken = false
        creature.memory.creaturesPositions.forEach(creaturePosition => {
            if (OtherCreature.type === creaturePosition.creatureType) {
                creaturePosition.coordinates.push(OtherCreature.coordinate)
                savedToken = true
            }
        })
        if (!savedToken) creature.memory.creaturesPositions.push({ creatureType: OtherCreature.type, coordinates: [OtherCreature.coordinate] })
    }
}

export const creatures_MemoryItems = (creature: Creature,  item: Item) => {
    if (creature.typeFoodToEat.includes(item.type)) {
        let savedToken = false
        creature.memory.itemsPositions.forEach(itemPosition => {
            if (item.type === itemPosition.itemType  ) {
                if ( !itemPosition.coordinates.includes(item.coordinate)) itemPosition.coordinates.push(item.coordinate)
                savedToken = true
            }
        })
        if (!savedToken) creature.memory.itemsPositions.push({ itemType: item.type, coordinates: [item.coordinate] })
    }
}