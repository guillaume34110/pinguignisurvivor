import { MapBlock } from "../MapBlocks/MapBlock";
import { GameData } from "../StartData/StartData";
import { MapBlockBorder } from './MapBlockBorder';
import { hitBoxMatch } from '../Utilities/HitBoxMatch';

export const mapBlocksBorder_Init = (gameData: GameData) => {
    gameData.mapBlocksBorder = []
    gameData.mapBlocks.forEach((block) => {
        const lateralMapBlocks = lateralMapBlocksDetermination(gameData, block)
        const borders = determineMapBlockBorders(lateralMapBlocks, block)
        borderDispositions(gameData, borders, block)
        cornersClean(gameData)
    }
    )
}

interface MapBlockDetermination {
    up: MapBlock
    down: MapBlock
    left: MapBlock
    right: MapBlock
    upRight: MapBlock
    upLeft: MapBlock
    downLeft: MapBlock
    downRight: MapBlock
}

const lateralMapBlocksDetermination = (gameData: GameData, mapBlock: MapBlock): MapBlockDetermination => {
    const getIndex = (index: number): number => {
        let result = mapBlock.id + index
        if (result < 0) result = 0
        if (result > gameData.howMuchTiles - 1) result = gameData.howMuchTiles - 1
        return ~~result
    }

    return {
        up: gameData.mapBlocks[getIndex(-gameData.howMuchTilesOnLine)],
        down: gameData.mapBlocks[getIndex(gameData.howMuchTilesOnLine)],
        left: gameData.mapBlocks[getIndex(-1)],
        right: gameData.mapBlocks[getIndex(1)],
        upRight: gameData.mapBlocks[getIndex(-gameData.howMuchTilesOnLine + 1)],
        upLeft: gameData.mapBlocks[getIndex(-gameData.howMuchTilesOnLine - 1)],
        downRight: gameData.mapBlocks[getIndex(gameData.howMuchTilesOnLine + 1)],
        downLeft: gameData.mapBlocks[getIndex(gameData.howMuchTilesOnLine - 1)],
    }
}

interface MapBlockBorderDetermination {
    up: MapBlockBorder | null
    down: MapBlockBorder | null
    left: MapBlockBorder | null
    right: MapBlockBorder | null
    upRight: MapBlockBorder | null
    upLeft: MapBlockBorder | null
    downLeft: MapBlockBorder | null
    downRight: MapBlockBorder | null
}

const determineMapBlockBorders = (lateralMapBlocks: MapBlockDetermination, block: MapBlock): MapBlockBorderDetermination => {
    return Object.entries(lateralMapBlocks).reduce((acc, [key, value]) => {
        // @ts-ignore
        acc[key] = value.layer > block.layer ? borderDetermination(key , value) : null;
        return acc
    }, { up: null, down: null, left: null, right: null, upRight: null, downRight: null, upLeft: null, downLeft: null })
}
const borderDetermination = (key : string , block : MapBlock) => {
    if( block.borders.up === undefined ) return  null
    if (key === 'up') return block.borders.up[Math.floor(Math.random()*block.borders.up.length)]
    else if (key === 'down' ) return block.borders.down[Math.floor(Math.random()*block.borders.down.length)]
    else if (key === 'left' ) return block.borders.left[Math.floor(Math.random()*block.borders.left.length)]
    else if (key === 'right' ) return block.borders.right[Math.floor(Math.random()*block.borders.right.length)]
    else if (key === 'upRight' ) return block.borders.upRight[0]
    else if (key === 'upLeft' ) return block.borders.upLeft[0]
    else if (key === 'downLeft' ) return block.borders.downLeft[0]
    else if (key === 'downRight' ) return block.borders.downRight[0]
    else return null
}
const directionsBorder = ['up', 'down', 'left', 'right', 'downRight', 'downLeft', "upRight", "upLeft"];
//const directionCorner = ['downRight', 'downLeft', "upRight", "upLeft"];

const borderDispositions = (gameData: GameData, borders: MapBlockBorderDetermination, block: MapBlock) => {

    directionsBorder.forEach(direction => {
        //@ts-ignore
        if (borders[direction] !== null /*&& !(directionCorner.includes(direction) && borders[direction].type === MapBlockType.Water)*/) {
            //@ts-ignore
            gameData.mapBlocksBorder.push(JSON.parse(JSON.stringify(borders[direction])))
            gameData.mapBlocksBorder[gameData.mapBlocksBorder.length - 1].spriteBox = block.spriteBox

        }
    })
}

export const cornersClean = (gameData: GameData) => {
    const newBlockArray: MapBlockBorder[] = []
    gameData.mapBlocksBorder.forEach(block1 => {
        if (block1.isCorner) {
            let blockToken = 0
            gameData.mapBlocksBorder.forEach(block2 => {
                if (block2.layer > block1.layer && hitBoxMatch(block1.spriteBox, block2.spriteBox)  ) {
                    if (block1.position.includes(block2.position[0]) || block2.position.includes(block1.position[0])) {
                        blockToken++
                    }
                }
            })
            if (blockToken === 0) newBlockArray.push(block1)
        }
        else newBlockArray.push(block1)
    })
    gameData.mapBlocksBorder = newBlockArray
}