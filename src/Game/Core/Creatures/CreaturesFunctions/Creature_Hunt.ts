import { ItemType } from '../../Items/Item';
import { GameData, SensorType } from '../../StartData/StartData';
import { hitBoxMatch } from '../../Utilities/HitBoxMatch';
import { spriteBoxSetDirectionAccordingOtherSpriteBoxLite, spriteBoxSetDirectionAccordingOtherSpriteBoxRad } from '../../Utilities/spriteBox/directionSpriteBox';
export const creatures_Hunt = (gameData: GameData) => {
    gameData.creatures.forEach(creature => {
        creature.hunting = false
            creature.sensors.sensors.forEach(sensor => {
                if (sensor.type === SensorType.Hunt) {
                    gameData.items.forEach(item => {
                        if (item.type === ItemType.foodVegetable && creature.hunting === false && hitBoxMatch(sensor, item.hitBox)) {
                            spriteBoxSetDirectionAccordingOtherSpriteBoxRad(creature.spriteBox, item.spriteBox)
                            creature.hunting = true
                            
                        }
                    })
                }
            })
        
    })
}