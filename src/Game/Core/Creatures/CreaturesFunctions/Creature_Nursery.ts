import { GameData } from "../../StartData/StartData"
import { Creature, CreatureSex, CreatureType } from '../Creature'
import { mouse } from "../CreaturesTypes/Mouse"
import { rabbit } from '../CreaturesTypes/Rabbit';
import { gameData } from '../../../Components/Game';
import { creature_Determination, creature_EnsureHitNothingForSpawn } from "../Creatures_Init";
import { slicedArrays } from '../CreaturesUpdate';

export const creature_MakeBaby = (gameData: GameData, creature: Creature, creatureToCompare: Creature) => {

    if (creatureToCompare.type === creature.type
        && creatureToCompare.sex !== creature.sex
        && ((creature.sex === CreatureSex.Male && creature.fertility > creature.maxFertilityMale)
            || (creature.sex === CreatureSex.Female && creature.fertility > creature.maxFertilityFemale))
        && ((creatureToCompare.sex === CreatureSex.Male && creatureToCompare.fertility > creatureToCompare.maxFertilityMale)
            || (creatureToCompare.sex === CreatureSex.Female && creatureToCompare.fertility > creatureToCompare.maxFertilityFemale))
    ) {
        creature.fertility = 0
        creatureToCompare.fertility = 0
        console.log("creatures = ", gameData.creatures.length)
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
    ) {
        creature.fertility = 0
        creatureToCompare.fertility = 0
        creatureToCompare.gestation = true
        creatureToCompare.gestationTime = creatureToCompare.gestationMaxTime
        console.log("creatures = ", creatures.length)

    }
}
export const creature_Fertility = (creature: Creature) => {
  if (!creature.gestation)  creature.fertility++
}
export const creature_gestation = (creature: Creature) => {
    if (creature.gestation) creature.gestationTime--
}

export const creature_BabyBorn = (creature: Creature, gameData: GameData) => {
    const creatures = gameData.creatures
    if (creature.gestation === true && creature.gestationTime <= 0) {
        const newCreature = creature_Determination(creature.type)
        const mapBlock = slicedArrays.mapBlocks[creature.coordinate][0]
        creatures.push(JSON.parse(JSON.stringify(newCreature)))
        const last = creatures[creatures.length - 1]
        creature_EnsureHitNothingForSpawn(gameData ,last , mapBlock )
        last.hitBox.x = last.spriteBox.x
        last.hitBox.y = last.spriteBox.y
        last.spriteBox.speed = ((creature.spriteBox.speed + creature.spriteBox.speed) / 2) + ((last.spriteBox.speed * (Math.random() - 0.5)) / 10)
        last.weight = ((creature.weight + creature.weight) / 2) + ((last.weight * (Math.random() - 0.5)) / 10)
        last.id = creatures.length - 1
        if (Math.random() > 0.5) last.sex = CreatureSex.Female
    }
}
