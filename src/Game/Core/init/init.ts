
import { GameData } from "../StartData/StartData";
import { fillSkSlicedArraysWithEmptyArray } from "../Creatures/CreaturesUpdate";

export const initCore = (gameData: GameData) => {
    // mapBlocks_Init(gameData)
   //  Creatures_Init(gameData)
    //item_Init(gameData)
    fillSkSlicedArraysWithEmptyArray(gameData)

}