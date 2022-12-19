import { ItemType, Item } from '../../Items/Item';
import { GameData, Sensor, SensorType } from '../../StartData/StartData';
import { hitBoxMatch } from '../../Utilities/HitBoxMatch';
import { spriteBoxSetDirectionAccordingOtherSpriteBoxRad } from '../../Utilities/spriteBox/directionSpriteBox';
import { Creature } from '../Creature';
export const creatures_Hunt = ( creature: Creature, sensor: Sensor, item: Item) => {
    if (sensor.type === SensorType.Hunt) {
        if (item.type === ItemType.foodVegetable && creature.hunting === false && hitBoxMatch(sensor, item.hitBox)) {
            spriteBoxSetDirectionAccordingOtherSpriteBoxRad(creature.spriteBox, item.spriteBox)
            creature.hunting = true
        }
    }
}