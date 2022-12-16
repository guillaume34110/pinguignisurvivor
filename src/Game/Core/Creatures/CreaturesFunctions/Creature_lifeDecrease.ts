import { GameData } from "../../StartData/StartData";

export const creature_lifeDecrease = (gameData : GameData  ) => { 
gameData.creatures.forEach( creature => { 
    creature.health -=1
})
}