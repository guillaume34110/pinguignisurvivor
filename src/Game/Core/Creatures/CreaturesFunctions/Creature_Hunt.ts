import { ItemType, Item } from '../../Items/Item';
import { Sensor, SensorType } from '../../StartData/StartData';
import { hitBoxMatch } from '../../Utilities/HitBoxMatch';
import { spriteBoxSetDirectionAccordingOtherSpriteBoxBy10Degrees} from '../../Utilities/SpriteBox/DirectionSpriteBox';
import { Creature } from '../Creature';
export const creatures_Hunt = ( creature: Creature, sensor: Sensor, item: Item) => {
    if (sensor.type === SensorType.Hunt) {
   
        if (item.type === ItemType.FoodVegetable && creature.hunting === false && hitBoxMatch(sensor, item.hitBox)) {

            // spriteBoxSetDirectionAccordingOtherSpriteBoxRad(creature.spriteBox, item.spriteBox)
            spriteBoxSetDirectionAccordingOtherSpriteBoxBy10Degrees(creature.spriteBox, item.spriteBox)

            creature.hunting = true
        }
    }
}