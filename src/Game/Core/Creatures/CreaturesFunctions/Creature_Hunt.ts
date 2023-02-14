import { ItemType, Item } from '../../Items/Item';
import { Sensor, SensorType } from '../../StartData/StartData';
import { hitBoxMatch } from '../../Utilities/HitBoxMatch';
import { spriteBoxSetDirectionAccordingOtherSpriteBoxBy10Degrees } from '../../Utilities/SpriteBox/DirectionSpriteBox';
import { Creature } from '../Creature';

export const creatures_HuntItems = (creature: Creature, sensor: Sensor, item: Item) => {
    
    if (sensor.type === SensorType.Hunt && creature.hunger < creature.hungerMax) {
        if (creature.typeFoodToEat.includes(item.type) && creature.hunting === false && creature.huntingInhibitor === 0 && hitBoxMatch(sensor, item.hitBox)) {
            spriteBoxSetDirectionAccordingOtherSpriteBoxBy10Degrees(creature.spriteBox, item.spriteBox)
            creature.hunting = true
        }
    }
}



export const creatures_HuntCreatures = (creature: Creature, sensor: Sensor, creatureToHunt: Creature) => {
    if ( creature.hunger < creature.hungerMax) {
        if (creature.typeFoodToEat.includes(creatureToHunt.type) && creature.hunting === false/* && creature.huntingInhibitor === 0 */&& hitBoxMatch(sensor, creatureToHunt.hitBox)) {
            spriteBoxSetDirectionAccordingOtherSpriteBoxBy10Degrees(creature.spriteBox, creatureToHunt.spriteBox)
            creature.hunting = true
        }
    }
}



export const creatures_HuntingInhibitor = (creature: Creature) => {
    if (creature.huntingInhibitor > 0) creature.huntingInhibitor--
}

