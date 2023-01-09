import { Item } from '../../Items/Item';
import { Creature, CreatureType } from "../Creature";
import { creature_Death } from './Creature_Death';

export const creature_Nutrition = (item: Item | null, creatureToEat: Creature | null, creature: Creature) => {
    if (item !== null) {
        if (creature.hunger < creature.hungerMax) {
            creature.hunger += item.valueAsFood
            item.isTaken = true
        }
    }
    if (creatureToEat !== null) {
        if (creature.hunger < creature.hungerMax) {
            creature.hunger += creatureToEat.valueAsFood
            creatureToEat.health = 0
        }
    }
}
export const creature_hungry = (creature: Creature) => {

    if (creature.hunger <= 0) creature.health -= 10
    else creature.hunger--
}