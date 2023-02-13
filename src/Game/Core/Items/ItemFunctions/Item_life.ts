
import { GameData } from '../../StartData/StartData';
export const item_life = (gameData: GameData) => {
    gameData.items.forEach(item => {
        item.life -= 1
        if (item.life <= 0) item.isTaken = true
    })
}