import {GameData} from "../../StartData/StartData";

export const timer = (gameData: GameData) => {
    return gameData.time += 16
}