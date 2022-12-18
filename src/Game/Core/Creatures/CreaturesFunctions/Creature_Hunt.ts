import { GameData, SensorType } from '../../StartData/StartData';
import { hitBoxMatch } from '../../Utilities/HitBoxMatch';
import { spriteBoxSetDirectionAccordingOtherSpriteBoxLite } from '../../Utilities/spriteBox/directionSpriteBox';
export const creatures_Hunt = (gameData: GameData) => {
    gameData.creatures.forEach(creature => {
        creature.hunting = false
            creature.sensors.sensors.forEach(sensor => {
                if (sensor.type === SensorType.Hunt) {
                    gameData.items.forEach(item => {
                        if ( creature.hunting === false && hitBoxMatch(sensor, item.hitBox)) {
                            spriteBoxSetDirectionAccordingOtherSpriteBoxLite(creature.spriteBox, item.spriteBox)
                            creature.hunting = true
                            
                        }
                    })
                }
            })
        
    })
}