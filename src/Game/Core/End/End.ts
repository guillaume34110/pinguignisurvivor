
import { stopCoreLoop } from '../../Components/Game';
import { menu } from '../../Components/Menu';
import { GameData } from '../StartData/StartData';
export const end = (gameData:GameData) => { 
    if (gameData.time <= gameData.timeBeforeHarvest) return 
    gameData.creatures.forEach(creature =>{
        gameData.gold += creature.sellPrice
        })
    gameData.creatures = []
    gameData.items = []
    gameData.time = 0    
    stopCoreLoop()
    menu(gameData)
}