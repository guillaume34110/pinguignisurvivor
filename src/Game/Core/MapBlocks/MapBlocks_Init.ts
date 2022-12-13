import { Interface } from "readline";
import {GameData} from "../StartData/StartData";
import { mapBlocks_biomeGenerator } from "./MapBlocksUtilities/ProceduralGeneration/MapBlocks_BiomeGenerator";
import { mapBlocks_SpaceBlocks } from "./MapBlocksUtilities/ProceduralGeneration/MapBlocks_Space";
import { mapBlocks_disposition } from "./MapBlocksUtilities/ProceduralGeneration/MapBlocks_disposition";

export const mapBlocks_Init = (gameData:GameData) => {
    const HowMuchMapBlocks = 1000
    const lineStep = 50 
    gameData.mapBlocks =  mapBlocks_biomeGenerator(mapPresets, HowMuchMapBlocks , lineStep)
    for (let i = 0; i < HowMuchMapBlocks; i++) {
        const line  = Math.floor(i/lineStep)  
        mapBlocks_SpaceBlocks( gameData.mapBlocks , i , HowMuchMapBlocks , line , lineStep )
        const mapBlock = gameData.mapBlocks[i]
        mapBlocks_disposition(mapBlock , i , HowMuchMapBlocks , line , lineStep)
    }
}

const mapPresets : MapPreset = { 
    grassGround  : 30 ,
    snowGround   : 35,
    dirtGround : 35
  }

  export interface MapPreset {
    dirtGround : number  
    snowGround : number  
    grassGround : number 
  }