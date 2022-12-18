import { MapBlockType } from "../../MapBlocks/MapBlock"
import { GameData } from "../../StartData/StartData"
import { seeds } from "../ItemsTypes/Seeds"

export const item_Spawn = (gameData: GameData) => {
    item_spawnSeeds(gameData)
}


const item_spawnSeeds = (gameData : GameData) => { 
    const mapBlock = gameData.mapBlocks[Math.floor(Math.random() * gameData.mapBlocks.length - 1)]
    if (mapBlock !== undefined && (mapBlock.type === MapBlockType.groundGrass || mapBlock.type === MapBlockType.groundDirt)) {
        if (Math.random() > 0.980 && !gameData.items.find(item => (item.spriteBox.x === mapBlock.spriteBox.x && item.spriteBox.y === mapBlock.spriteBox.y))) {
            gameData.items.push(JSON.parse(JSON.stringify(seeds)))
            const lastSeeds = gameData.items[gameData.items.length - 1]
            lastSeeds.spriteBox.x = mapBlock.spriteBox.x
            lastSeeds.spriteBox.y = mapBlock.spriteBox.y
            lastSeeds.hitBox.x = mapBlock.spriteBox.x
            lastSeeds.hitBox.y = mapBlock.spriteBox.y
            lastSeeds.id = gameData.items.length - 1
        }
    }
}