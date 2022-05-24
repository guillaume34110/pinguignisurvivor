import {GameData} from "../StartData/StartData";
import {itemCollisions} from "./ItemFunctions/ItemCollision";

export const itemUpdate = (gameData:GameData) => {
    itemCollisions(gameData)
}