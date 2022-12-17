import { GameData } from "../../StartData/StartData";
import { hitBoxMatch } from "../../Utilities/HitBoxMatch";
import { CreatureSex } from "../Creature";
import { spriteBoxSetDirectionAccordingOtherSpriteBoxLite } from '../../Utilities/spriteBox/directionSpriteBox';

export const creature_MaleHuntFemale = (gameData: GameData) => { 
gameData.creatures.forEach(creature => {
    if (creature.sex === CreatureSex.Male && creature.fertility >= creature.maxFertilityMale) {
        creature.sensors.sensors.forEach(sensor => { 
            gameData.creatures.forEach(creatureFemale => { 
                if (creatureFemale.sex === CreatureSex.Female && creatureFemale.fertility >= creatureFemale.maxFertilityFemale) {
                    if (hitBoxMatch(sensor, creatureFemale.hitBox)) {
                        spriteBoxSetDirectionAccordingOtherSpriteBoxLite(creature.spriteBox,creatureFemale.spriteBox)
                    }
                }
            })
        })
    }
})


}