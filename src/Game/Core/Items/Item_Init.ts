import {GameData} from "../StartData/StartData";
import { xpBlue } from './ItemsTypes/XpBlue';

export const item_Init = (gameData: GameData) => {
    for (let i = 0; i < 200; i++) {
        gameData.items.push(
          xpBlue
        )
    }
}
