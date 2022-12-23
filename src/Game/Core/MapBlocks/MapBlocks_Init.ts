import { Interface } from "readline";
import {GameData} from "../StartData/StartData";
import { mapBlocks_biomeGenerator } from "./MapBlocksUtilities/ProceduralGeneration/MapBlocks_BiomeGenerator";
import { mapBlocks_SpaceBlocks } from "./MapBlocksUtilities/ProceduralGeneration/MapBlocks_Space";
import { mapBlocks_disposition } from "./MapBlocksUtilities/ProceduralGeneration/MapBlocks_disposition";
import { mapBlocks_HitBox } from "./MapBlocksUtilities/MapBlocks_HitBox";
import { setCoordinateIndexposition } from "../Utilities/coordinate/Coordinate";

export const mapBlocks_Init = (gameData:GameData) => {
   
    gameData.mapBlocks =  mapBlocks_biomeGenerator(mapPresets, gameData.howMuchTiles , gameData.howMuchLinesOfTiles)
    for (let i = 0; i < gameData.howMuchTiles; i++) {
        const line  = Math.floor(i/gameData.howMuchLinesOfTiles)  
        mapBlocks_SpaceBlocks( gameData.mapBlocks , i , gameData.howMuchTiles , line , gameData.howMuchLinesOfTiles )
        const mapBlock = gameData.mapBlocks[i]
        mapBlocks_disposition(mapBlock , i , gameData.howMuchTiles , line , gameData.howMuchLinesOfTiles)
        mapBlock.coordinate = setCoordinateIndexposition(mapBlock.spriteBox , gameData)
    }
    mapBlocks_HitBox(gameData)
    
}

const mapPresets : MapPreset = { 
    grassGround  : 55 ,
    snowGround   : 10,
    dirtGround : 35
  }

  export interface MapPreset {
    dirtGround : number  
    snowGround : number  
    grassGround : number 
  }