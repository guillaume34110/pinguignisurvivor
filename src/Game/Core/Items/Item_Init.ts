import { MapBlockType } from "../MapBlocks/MapBlock";
import { GameData } from "../StartData/StartData";
import { setCoordinateIndexPosition } from "../Utilities/coordinate/Coordinate";
import { rock } from "./ItemsTypes/Rock";
import { seeds } from './ItemsTypes/Seeds';

export const item_Init = (gameData: GameData) => {
  item_seedsInit(gameData)
  item_RockInit(gameData)
  }

  const item_seedsInit  = (gameData:GameData) => { 
    gameData.mapBlocks.forEach(mapBlock => {
      if (mapBlock.type === MapBlockType.groundGrass || mapBlock.type === MapBlockType.groundDirt) {
        if (Math.random() > 0.90) {
          gameData.items.push(JSON.parse(JSON.stringify(seeds)))
          const lastSeeds = gameData.items[gameData.items.length - 1]
          lastSeeds.spriteBox.x =mapBlock.spriteBox.x 
          lastSeeds.spriteBox.y = mapBlock.spriteBox.y
          lastSeeds.hitBox.x =lastSeeds.spriteBox.x
          lastSeeds.hitBox.y =lastSeeds.spriteBox.y
          lastSeeds.id = gameData.items.length - 1
          lastSeeds.coordinate = setCoordinateIndexPosition(lastSeeds.spriteBox , gameData)
          
        }
      }
    })
  } 

  const item_RockInit = (gameData:GameData) => { 
    gameData.mapBlocks.forEach(mapBlock => {
      if (mapBlock.type !== MapBlockType.space) {
        if (Math.random() > 0.95) {
          gameData.items.push(JSON.parse(JSON.stringify(rock)))
          const lastSeeds = gameData.items[gameData.items.length - 1]
          lastSeeds.spriteBox.x =mapBlock.spriteBox.x +(Math.random() * (mapBlock.spriteBox.w - lastSeeds.spriteBox.w)  )
          lastSeeds.spriteBox.y = mapBlock.spriteBox.y +(Math.random() * (mapBlock.spriteBox.h -  lastSeeds.spriteBox.h))
          lastSeeds.hitBox.x =lastSeeds.spriteBox.x
          lastSeeds.hitBox.y = lastSeeds.spriteBox.y
          lastSeeds.id = gameData.items.length - 1
          lastSeeds.coordinate = setCoordinateIndexPosition(lastSeeds.spriteBox , gameData)
        }
      }
    })
  }