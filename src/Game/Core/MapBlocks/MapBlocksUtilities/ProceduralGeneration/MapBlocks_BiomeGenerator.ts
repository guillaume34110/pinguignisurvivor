import { MapBlock, MapBlockType } from '../../MapBlock';
import { mapBlocksGeneric } from '../../MapBlocks';
import { MapPreset } from '../../MapBlocks_Init';

export const mapBlocks_biomeGenerator = (mapPreset: MapPreset, totalMapBlocks: number, lineStep: number): MapBlock[] => {
    let mapBlocks: MapBlock[] = []
    Object.keys(mapPreset).forEach(key => {
        // @ts-ignore 
        if (mapPreset[key] > 0) {
            const parameters = assignParameter(totalMapBlocks, returnNumberValueForKey(mapPreset, key), mapBlocks)
            mapBlocks = addNewPositions(parameters.MapBlockTable, parameters.howMuch, lineStep, parameters.Seeds, mapBlockDetermination(key))
}})
return mapBlocks
}

const mapBlockDetermination = (key: string): MapBlock => {
    if (Object.keys(mapBlocksGeneric).includes(key)) // @ts-ignore 
        return mapBlocksGeneric[key]
    else return mapBlocksGeneric.grassGround
}

const returnNumberValueForKey = (obj: Object, key: string): number => {
    const value = Object.entries(obj).find(obj => obj[0] === key)?.[1]
    if (typeof value === 'number') return value
    else return 0
}

const addNewPositions = (MapBlockTable: MapBlock[], howMuch: number, lineStep: number, seeds: number[], mapBlockGeneric: MapBlock): MapBlock[] => {

    MapBlockTable[seeds[0]] = mapBlockGeneric

    for (let i = 0; i < howMuch; i++) {
        const positions: SeedPositions = createSeed(Math.random(), seeds[i], lineStep)
        seeds.push(determinationNextPositionLoop(positions, MapBlockTable, mapBlockGeneric, lineStep))
    }
    return MapBlockTable
}

const assignParameter = (totalMapBlocks: number, mapPreset: number, mapBlockTable: MapBlock[]): Parameters => {
    return {
        Seeds: [~~(Math.random() * totalMapBlocks - 1)],
        howMuch: (mapPreset * totalMapBlocks) / 100,
        MapBlockTable: mapBlocks(mapBlockTable, totalMapBlocks)
    }
}

const mapBlocks = (mapBlockTable: MapBlock[], totalMapBlocks: number): MapBlock[] => {
    if (mapBlockTable.length === 0) return tableGenerator(totalMapBlocks)
    else return mapBlockTable
}

const determinationNextPositionLoop = (positions: SeedPositions, MapBlockTable: MapBlock[], mapBlockGeneric: MapBlock, lineStep: number): number => {
    let antiInfinite = 0
    let nextPosition: number = -1
    let newSeedOnEmptyBlocks = -1
    let seedPosition: SeedPositions = JSON.parse(JSON.stringify(positions))
    const howMuchTry = 2000
    while (nextPosition < 0 && antiInfinite < howMuchTry) {
        antiInfinite++
        newSeedOnEmptyBlocks++
        if (nextPosition < 0 && Math.random() < 0.35) nextPosition = HoleFilling(MapBlockTable, mapBlockGeneric, lineStep)
        if (nextPosition < 0) nextPosition = determinationNextPosition(seedPosition, MapBlockTable, mapBlockGeneric)
        if (nextPosition < 0) seedPosition = generateSeedPositions(seedPosition, MapBlockTable, mapBlockGeneric, lineStep, Math.random())
        if (nextPosition < 0 && newSeedOnEmptyBlocks > (howMuchTry / 200)) {
            newSeedOnEmptyBlocks = -1
            seedPosition = generateSeedPositions(seedPosition, MapBlockTable, mapBlocksGeneric.emptyGround, lineStep, Math.random())
        }
    }
    if (nextPosition === -1) console.log("error -1")
    return nextPosition
}



const generateSeedPositions = (positions: SeedPositions, MapBlockTable: MapBlock[], mapBlockGeneric: MapBlock, lineStep: number, random: number): SeedPositions => {
    const newSeeds: SeedPositions[] = []
    MapBlockTable.forEach((mapBlock, index) => {
        if (mapBlock.type === mapBlockGeneric.type) {
            const seed = createSeed(Math.random(), index, lineStep)
            if (
                MapBlockTable[seed.bottom]?.type === MapBlockType.emptyGround
                || MapBlockTable[seed.top]?.type === MapBlockType.emptyGround
                || MapBlockTable[seed.left]?.type === MapBlockType.emptyGround
                || MapBlockTable[seed.right]?.type === MapBlockType.emptyGround
            ) newSeeds.push(seed)
        }
    }
    )
    const seed = newSeeds[~~(random * newSeeds.length - 1)]
    if (seed !== undefined) return seed

    else return positions
}

const createSeed = (random: number, seed: number, lineStep: number): SeedPositions => {
    return {
        left: seed - 1,
        right: seed + 1,
        top: seed - lineStep,
        bottom: seed + lineStep,
        random: random,
    }
}

const HoleFilling = (mapBlockTable: MapBlock[], mapBlockGeneric: MapBlock, lineStep: number): number => {
    const inContactWith3: number[] = []
    const inContactWith2: number[] = []
    for (let i = 0; i < mapBlockTable.length - 1; i++) {
        const mapBlock = mapBlockTable[i]
        let isHoleCounter = 0

        if (mapBlock.type === MapBlockType.emptyGround) {

            if (mapBlockTable[i - lineStep]?.type === mapBlockGeneric.type) isHoleCounter++
            if (mapBlockTable[i + lineStep]?.type === mapBlockGeneric.type) isHoleCounter++
            if (mapBlockTable[i - 1]?.type === mapBlockGeneric.type) isHoleCounter++
            if (mapBlockTable[i + 1]?.type === mapBlockGeneric.type) isHoleCounter++
            if (isHoleCounter === 4) {
                mapBlockTable[i] = JSON.parse(JSON.stringify(mapBlockGeneric))
                return i
            }
            else if (isHoleCounter === 3) {
                inContactWith3.push(i)
            }
            else if (isHoleCounter === 2) {
                inContactWith2.push(i)
            }
        }


    }
    if (inContactWith3.length > 0) {
        mapBlockTable[inContactWith3[0]] = JSON.parse(JSON.stringify(mapBlockGeneric))
        return inContactWith3[0]
    }
    if (inContactWith2.length > 0) {
        mapBlockTable[inContactWith2[0]] = JSON.parse(JSON.stringify(mapBlockGeneric))
        return inContactWith2[0]
    }
    return -1
}

const determinationNextPosition = (positions: SeedPositions, mapBlockTable: MapBlock[], mapBlockGeneric: MapBlock,): number => {

    const positionDetermination = (): number => {
        switch (true) {
            case (positions.random < 0.25 && mapBlockTable[positions.left]?.type === MapBlockType.emptyGround):
                return positions.left;
            case (positions.random < 0.5 && mapBlockTable[positions.right]?.type === MapBlockType.emptyGround):
                return positions.right;
            case (positions.random < 0.75 && mapBlockTable[positions.top]?.type === MapBlockType.emptyGround):
                return positions.top;
            case (mapBlockTable[positions.bottom]?.type === MapBlockType.emptyGround):
                return positions.bottom;
            case (mapBlockTable[positions.left]?.type === MapBlockType.emptyGround):
                return positions.left;
            case (mapBlockTable[positions.right]?.type === MapBlockType.emptyGround):
                return positions.right;
            case (mapBlockTable[positions.top]?.type === MapBlockType.emptyGround):
                return positions.top;
            default:
                return positions.bottom;
        }
    }
    const newPosition: number = positionDetermination()
    if (mapBlockTable[newPosition]?.type === MapBlockType.emptyGround) {
        mapBlockTable[newPosition] = JSON.parse(JSON.stringify(mapBlockGeneric))
        return newPosition
    }
    else {
        return -1
    }
}

const tableGenerator = (totalMapBlocks: number): MapBlock[] => {
    const table: MapBlock[] = []
    for (let i = 0; i < totalMapBlocks; i++) {
        table.push(JSON.parse(JSON.stringify(mapBlocksGeneric.emptyGround)))
    }
    return table
}

interface SeedPositions {
    left: number,
    right: number,
    top: number,
    bottom: number,
    random: number,
}

interface Parameters {
    Seeds: number[],
    howMuch: number,
    MapBlockTable: MapBlock[]
}