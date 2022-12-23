import { GameData } from "../../StartData/StartData"
import { Creature, CreatureSex, CreatureType } from '../Creature'
import { mouse } from "../CreaturesTypes/Mouse"
import { rabbit } from '../CreaturesTypes/Rabbit';

export const creature_MakeBaby = (gameData: GameData, creature: Creature, creatureToCompare: Creature) => {

    if (creatureToCompare.type === creature.type
        && creatureToCompare.sex !== creature.sex
        && ((creature.sex === CreatureSex.Male && creature.fertility > creature.maxFertilityMale)
            || (creature.sex === CreatureSex.Female && creature.fertility > creature.maxFertilityFemale))
        && ((creatureToCompare.sex === CreatureSex.Male && creatureToCompare.fertility > creatureToCompare.maxFertilityMale)
            || (creatureToCompare.sex === CreatureSex.Female && creatureToCompare.fertility > creatureToCompare.maxFertilityFemale))
      )  {
    creature.fertility = 0
    creatureToCompare.fertility = 0
    console.log("creatures = " , gameData.creatures.length)
    if (creatureToCompare.type === CreatureType.Mouse) gameData.creatures.push(JSON.parse(JSON.stringify(mouse)))
    if (creatureToCompare.type === CreatureType.Rabbit) gameData.creatures.push(JSON.parse(JSON.stringify(rabbit)))
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

export const creature_MakeBabyWithCreature = (creatures: Creature[], creature: Creature, creatureToCompare: Creature) => {

    if (creatureToCompare.type === creature.type
        && creatureToCompare.sex !== creature.sex
        && ((creature.sex === CreatureSex.Male && creature.fertility > creature.maxFertilityMale)
            || (creature.sex === CreatureSex.Female && creature.fertility > creature.maxFertilityFemale))
        && ((creatureToCompare.sex === CreatureSex.Male && creatureToCompare.fertility > creatureToCompare.maxFertilityMale)
            || (creatureToCompare.sex === CreatureSex.Female && creatureToCompare.fertility > creatureToCompare.maxFertilityFemale))
      )  {
    creature.fertility = 0
    creatureToCompare.fertility = 0
    console.log("creatures = " , creatures.length)
    if (creatureToCompare.type === CreatureType.Mouse) creatures.push(JSON.parse(JSON.stringify(mouse)))
    if (creatureToCompare.type === CreatureType.Rabbit) creatures.push(JSON.parse(JSON.stringify(rabbit)))
    const last = creatures[creatures.length - 1]
    last.spriteBox.x = (creature.spriteBox.x + creatureToCompare.spriteBox.x) / 2
    last.spriteBox.y = (creature.spriteBox.y + creatureToCompare.spriteBox.y) / 2
    last.hitBox.x = last.spriteBox.x
    last.hitBox.y = last.spriteBox.y
    last.spriteBox.speed = ((creature.spriteBox.speed + creatureToCompare.spriteBox.speed) / 2) + ((last.spriteBox.speed * (Math.random() - 0.5)) / 10)
    last.id = creatures.length - 1
    if (Math.random() > 0.5) last.sex = CreatureSex.Female
}
}

export const creature_Fertility = (creature: Creature) => {
        creature.fertility++
}