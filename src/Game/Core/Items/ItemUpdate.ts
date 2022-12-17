import {GameData} from "../StartData/StartData";
import { item_RemoveTaken } from "./ItemFunctions/Item_RemoveTaken";
import { item_Spawn } from './ItemFunctions/Item_Spawn';

export const itemUpdate = (gameData:GameData) => {
    item_Spawn(gameData)
    item_RemoveTaken(gameData)
}