import { GameData } from '../../../StartData/StartData';
import { Creature } from '../../Creature';

export const creature_MemoryInit = (gameData : GameData, creature : Creature) => { 
   for (let i = 0 ; i < gameData.howMuchTiles ; i++ )
    creature.memory.mapBlocksOrdered.push(null)
}