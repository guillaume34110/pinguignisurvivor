import {mapBlocks_Init} from "../MapBlocks/MapBlocks_Init";
import { Creatures_Init } from "../Creatures/Creatures_Init";
import {item_Init} from "../Items/Item_Init";
import {GameData} from "../StartData/StartData";
import { reFillSkSlicedArraysWithEmptyArray } from "../Creatures/CreaturesUpdate";

export const initCore = (gameData:GameData) => {
   // mapBlocks_Init(gameData)
    Creatures_Init(gameData)
    item_Init(gameData)
    reFillSkSlicedArraysWithEmptyArray(gameData)

}