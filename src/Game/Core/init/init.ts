
import { GameData } from "../StartData/StartData";
import { fillSkSlicedArraysWithEmptyArray } from "../Creatures/CreaturesUpdate";
import { item_Init } from "../Items/Item_Init";
import { Creatures_Init } from "../Creatures/Creatures_Init";

export const initCore = (gameData: GameData) => {
    // mapBlocks_Init(gameData)
   //  Creatures_Init(gameData)
    item_Init(gameData)
    fillSkSlicedArraysWithEmptyArray(gameData)

}