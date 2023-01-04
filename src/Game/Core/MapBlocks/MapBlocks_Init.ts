import { Interface } from "readline";
import { GameData } from "../StartData/StartData";
import { mapBlocks_biomeGenerator } from "./MapBlocksUtilities/ProceduralGeneration/MapBlocks_BiomeGenerator";
import { mapBlocks_SpaceBlocks } from "./MapBlocksUtilities/ProceduralGeneration/MapBlocks_Space";
import { mapBlocks_disposition } from "./MapBlocksUtilities/ProceduralGeneration/MapBlocks_disposition";
import { mapBlocks_HitBox } from "./MapBlocksUtilities/MapBlocks_HitBox";
import { setCoordinateIndexPosition } from "../Utilities/Coordinate/Coordinate";

export const mapBlocks_Init = (gameData: GameData) => {

  gameData.mapBlocks = mapBlocks_biomeGenerator(gameData.mapPreset, gameData.howMuchTiles, gameData.howMuchTilesOnLine)
  for (let i = 0; i < gameData.howMuchTiles; i++) {
    const line = ~~(i / gameData.howMuchTilesOnLine)
    mapBlocks_SpaceBlocks(gameData.mapBlocks, i, gameData.howMuchTiles, line, gameData.howMuchTilesOnLine)
    const mapBlock = gameData.mapBlocks[i]
    mapBlocks_disposition(mapBlock, i, gameData.howMuchTiles, line, gameData.howMuchTilesOnLine)
    mapBlock.coordinate = setCoordinateIndexPosition(mapBlock.spriteBox, gameData)
  }
  mapBlocks_HitBox(gameData)

}

export interface MapPreset {
  dirtGround: number
  snowGround: number
  grassGround: number
  waterGround: number
}