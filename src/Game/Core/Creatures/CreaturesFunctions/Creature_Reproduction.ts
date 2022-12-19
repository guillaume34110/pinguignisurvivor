import { GameData, Sensor } from "../../StartData/StartData";
import { hitBoxMatch } from "../../Utilities/HitBoxMatch";
import { Creature, CreatureSex } from "../Creature";
import { spriteBoxSetDirectionAccordingOtherSpriteBoxRad } from '../../Utilities/spriteBox/directionSpriteBox';

export const creature_MaleHuntFemale = ( creature: Creature, sensor: Sensor, creatureFemale: Creature) => {
    if (creature.sex === CreatureSex.Male && creature.fertility >= creature.maxFertilityMale) {
        if (creatureFemale.type === creature.type && creatureFemale.sex === CreatureSex.Female && creatureFemale.fertility >= creatureFemale.maxFertilityFemale) {
            if (hitBoxMatch(sensor, creatureFemale.hitBox)) {
                spriteBoxSetDirectionAccordingOtherSpriteBoxRad(creature.spriteBox, creatureFemale.spriteBox)
            }
        }
    }
}
