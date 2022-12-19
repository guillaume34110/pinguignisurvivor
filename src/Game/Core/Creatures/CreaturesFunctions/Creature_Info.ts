import { GameData } from "../../StartData/StartData";
import { Creature } from '../Creature';

export const creature_Info = (creature: Creature) => { 
    creature_lifeBar(creature)
}

const creature_lifeBar = (creature: Creature) => { 

    creature.lifeBar.x = creature.spriteBox.x
    creature.lifeBar.y = creature.spriteBox.y -10
creature.lifeBar.wCurrent = creature.lifeBar.wMax /(creature.maxHealth/creature.health) 
}

