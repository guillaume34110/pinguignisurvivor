import { GameData } from "../../StartData/StartData"

export const item_RemoveTaken = (gameData: GameData) => { 
    gameData.items = gameData.items.filter(item => !item.isTaken)
}