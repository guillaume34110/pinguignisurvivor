import { Item } from '../../Items/Item';
import { Creature} from "../Creature";

export const creature_Nutrition = (item: Item | null, creatureToEat: Creature | null, creature: Creature) => {
    if (item !== null) {
        if (creature.hunger < creature.hungerMax) {
            creature.hunger += item.valueAsFood
            if (creature.lifePointMax > creature.lifePoint) creature.lifePoint += item.valueAsFood / 1000
            if (creature.weight < creature.maxWeight) {
                creature.weight += item.valueAsFood / 1000
                if(creature.weight > creature.maxWeight) creature.weight = creature.maxWeight
            }  
            item.isTaken = true
        }
    }
    if (creatureToEat !== null) {
        if (creature.hunger < creature.hungerMax) {
            creatureToEat.lifePoint -= creature.damage * (creature.weight/creatureToEat.weight)
            if (creatureToEat.lifePoint < 0){
            creature.hunger += creatureToEat.valueAsFood
            if (creature.lifePointMax > creature.lifePoint) creature.lifePoint += creatureToEat.valueAsFood / 1000
            if (creature.weight < creature.maxWeight){
                 creature.weight += creatureToEat.valueAsFood / 1000 
                if(creature.weight > creature.maxWeight) creature.weight = creature.maxWeight
                }
        }
        }
    }
}
export const creature_hungry = (creature: Creature) => {

    if (creature.hunger <= 0) creature.lifePoint -= 0.1
    if (creature.hunger <= 0 && creature.weight > creature.maxWeight/50 ) creature.weight -= creature.weight/1000 
    else creature.hunger--

}

export const creature_size = (creature :Creature) => { 
    const size =  Math.log(1 + creature.weight)*30
    creature.spriteBox.h = size
     creature.hitBox.h = size
     creature.spriteBox.w = size
     creature.hitBox.w = size
}