import { GameData } from "../../StartData/StartData";
import { Creature } from "../Creature";

export const creature_Death = (gameData: GameData) => { 
    gameData.creatures = death(gameData.creatures)
}

export const death = (creatures : Creature[]) => 
    creatures.filter(creature=> creature.lifeTime > 0 && creature.lifePoint > 0 )
 