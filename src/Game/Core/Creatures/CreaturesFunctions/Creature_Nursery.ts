import { GameData } from "../../StartData/StartData"
import { Creature, CreatureSex } from '../Creature';
import { mouse } from "../CreaturesTypes/Mouse"

export const creature_MakeBaby = (gameData: GameData, creature: Creature, creatureToCompare: Creature) => {

    if (creatureToCompare.sex !== creature.sex
        && ((creature.sex === CreatureSex.Male && creature.fertility > creature.maxFertilityMale)
            || (creature.sex === CreatureSex.Female && creature.fertility > creature.maxFertilityFemale))
        && ((creatureToCompare.sex === CreatureSex.Male && creatureToCompare.fertility > creatureToCompare.maxFertilityMale)
            || (creatureToCompare.sex === CreatureSex.Female && creatureToCompare.fertility > creatureToCompare.maxFertilityFemale))
      )  {
    creature.fertility = 0
    creatureToCompare.fertility = 0
    console.log("creatures = " , gameData.creatures.length)
    gameData.creatures.push(JSON.parse(JSON.stringify(mouse)))
    const last = gameData.creatures[gameData.creatures.length - 1]
    last.spriteBox.x = (creature.spriteBox.x + creatureToCompare.spriteBox.x) / 2
    last.spriteBox.y = (creature.spriteBox.y + creatureToCompare.spriteBox.y) / 2
    last.hitBox.x = last.spriteBox.x
    last.hitBox.y = last.spriteBox.y
    last.spriteBox.speed = ((creature.spriteBox.speed + creatureToCompare.spriteBox.speed) / 2) + ((last.spriteBox.speed * (Math.random() - 0.5)) / 10)
    last.id = gameData.creatures.length - 1
    if (Math.random() > 0.5) last.sex = CreatureSex.Female
}
}

export const creature_Fertility = (creature: Creature) => {
        creature.fertility++
}