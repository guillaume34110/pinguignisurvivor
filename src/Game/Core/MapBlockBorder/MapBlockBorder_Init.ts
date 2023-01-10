import { MapBlock } from "../MapBlocks/MapBlock";
import { GameData } from "../StartData/StartData";
import { MapBlockBorder } from './MapBlockBorder';

export const mapBlocksBorder_Init = (gameData: GameData) => {
gameData.mapBlocksBorder = []
    gameData.mapBlocks.forEach((block) => {
        const lateralMapBlocks = lateralMapBlocksDetermination(gameData , block)
        const borders = determineMapBlockBorders(lateralMapBlocks , block)
        borderDispositions2(gameData ,borders, block)
    }
    )
}

interface MapBlockDetermination {
    up: MapBlock
    down: MapBlock
    left: MapBlock
    right: MapBlock
}

const lateralMapBlocksDetermination = (gameData: GameData, mapBlock: MapBlock): MapBlockDetermination => {
    const getIndex = (index: number): number => {
        let result = mapBlock.id + index
        if (result < 0) result = 0
        if (result > gameData.howMuchTiles -1) result = gameData.howMuchTiles - 1
        return ~~result
    }

    return {
        up: gameData.mapBlocks[getIndex(-gameData.howMuchTilesOnLine)],
        down: gameData.mapBlocks[getIndex(gameData.howMuchTilesOnLine)],
        left: gameData.mapBlocks[getIndex(-1)],
        right: gameData.mapBlocks[getIndex(1)]
    }
}

interface MapBlockBorderDetermination {
    up: MapBlockBorder|null
    down:  MapBlockBorder|null
    left:  MapBlockBorder|null
    right:  MapBlockBorder|null
}

const determineMapBlockBorders = (lateralMapBlocks : MapBlockDetermination, block : MapBlock) : MapBlockBorderDetermination => {
    return Object.entries(lateralMapBlocks).reduce((acc, [key, value]) => {
       // @ts-ignore
        acc[key] = value.layer > block.layer ? value.borders[key] : null;
        return acc
    }, { up : null, down:null,left:null,right:null})
}

const directions = ['up', 'down', 'left', 'right']; 

const borderDispositions2 = (gameData : GameData , borders : MapBlockBorderDetermination , block : MapBlock) => { 
    
    directions.forEach(direction => {
//@ts-ignore
        if (borders[direction] !== null) {
//@ts-ignore
            gameData.mapBlocksBorder.push(JSON.parse(JSON.stringify(borders[direction])))
            gameData.mapBlocksBorder[gameData.mapBlocksBorder.length-1].spriteBox = block.spriteBox
        }
    })
}
