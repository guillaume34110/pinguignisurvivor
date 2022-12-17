import { GameData } from "../../StartData/StartData";

export const creature_Info = (gameData: GameData) => { 
    creature_lifeBar(gameData)
}

const creature_lifeBar = (gameData: GameData) => { 
gameData.creatures.forEach( creature => {
    creature.lifeBar.x = creature.spriteBox.x
    creature.lifeBar.y = creature.spriteBox.y -10
creature.lifeBar.wCurrent = creature.lifeBar.wMax /(creature.maxHealth/creature.health) 
}

)
}