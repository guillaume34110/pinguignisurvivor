import { Sensor } from "../../StartData/StartData";
import { hitBoxMatch } from "../../Utilities/HitBoxMatch";
import { Creature, CreatureSex } from "../Creature";
import { spriteBoxSetDirectionAccordingOtherSpriteBoxBy10Degrees } from '../../Utilities/SpriteBox/DirectionSpriteBox';

export const creature_MaleHuntFemale = ( creature: Creature, sensor: Sensor, creatureFemale: Creature) => {
    if (creature.sex === CreatureSex.Male && creature.fertility >= creature.maxFertilityMale) {
        if (creatureFemale.type === creature.type && creatureFemale.sex === CreatureSex.Female && creatureFemale.fertility >= creatureFemale.maxFertilityFemale) {
            if (hitBoxMatch(sensor, creatureFemale.hitBox)) {
                spriteBoxSetDirectionAccordingOtherSpriteBoxBy10Degrees(creature.spriteBox, creatureFemale.spriteBox)
            }
        }
    }
}
