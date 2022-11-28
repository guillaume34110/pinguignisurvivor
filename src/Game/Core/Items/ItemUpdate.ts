import {GameData} from "../StartData/StartData";
import {item_Collisions} from "./ItemFunctions/Item_Collision";

export const itemUpdate = (gameData:GameData) => {
    item_Collisions(gameData)
}