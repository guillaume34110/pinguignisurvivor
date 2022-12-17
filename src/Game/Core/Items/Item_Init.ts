import { MapBlockType } from "../MapBlocks/MapBlock";
import { GameData } from "../StartData/StartData";
import { seeds } from './ItemsTypes/Seeds';

export const item_Init = (gameData: GameData) => {
    gameData.mapBlocks.forEach(mapBlock => {
      if (mapBlock.type === MapBlockType.groundGrass || mapBlock.type === MapBlockType.groundDirt) {
        if (Math.random() > 0.90) {
          gameData.items.push(JSON.parse(JSON.stringify(seeds)))
          const lastSeeds = gameData.items[gameData.items.length - 1]
          lastSeeds.spriteBox.x =mapBlock.spriteBox.x
          lastSeeds.spriteBox.y = mapBlock.spriteBox.y
          lastSeeds.hitBox.x =mapBlock.spriteBox.x
          lastSeeds.hitBox.y = mapBlock.spriteBox.y
          lastSeeds.id = gameData.items.length - 1
        }
      }
    })
  }

