import { GameData } from "../../StartData/StartData";

export const creature_Death = (gameData: GameData) => { 
    gameData.creatures = gameData.creatures.filter(creature=> creature.health > 0 )
}