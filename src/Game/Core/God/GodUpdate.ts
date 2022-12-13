import {GameData} from "../StartData/StartData";
import {god_Move} from "./GodUtilities/God_Move";

export const godUpdate = (gameData:GameData) => {
    god_Move(gameData)
}