
import { Creature } from './Creature';
import {
    creature_collisionWithItem,
    creature_CollisionWithSolidMapBlocks,
    creatures_CollisionWithCreatures,
} from './CreaturesFunctions/Creatures_Collision';
import { creature_Death } from './CreaturesFunctions/Creature_Death';
import { creature_Fertility } from './CreaturesFunctions/Creature_Nursery';
import { creature_Info } from './CreaturesFunctions/Creature_Info';
import { creature_lifeDecrease as creature_LifeDecrease } from './CreaturesFunctions/Creature_lifeDecrease';
import { creature_MaleHuntFemale } from './CreaturesFunctions/Creature_Reproduction';
import { creature_RotateSpriteBy10Degrees } from './CreaturesFunctions/Creature_RotateSprite';
import {
    creature_sensorSetCollisionFlagWithItems,
    creature_sensorSetCollisionWithMapBlocksFlags,
    creature_TurnOnCollision,
    creature_updateSensorsPositionBy10Degrees
} from './CreaturesFunctions/Creature_sensors';
import { creatures_HitBox } from './CreaturesFunctions/Creatures_HitBox';
import { creatures_Hunt } from './CreaturesFunctions/Creature_Hunt';
import { creatures_Move } from './CreaturesFunctions/Creatures_Move';
import {
    GameData,
    Sensor,
    SensorType,
} from '../StartData/StartData';
import { Item } from '../Items/Item';
import { MapBlock } from '../MapBlocks/MapBlock';
import { setCoordinateIndexPosition } from '../Utilities/Coordinate/Coordinate';

interface slicedArraysInterface {
    creatures: Creature[][]
    sensors: Sensor[][]
    mapBlocks: MapBlock[][]
    items: Item[][]
}

const slicedArrays: slicedArraysInterface = { creatures: [], sensors: [], mapBlocks: [], items: [] }
export const fillSkSlicedArraysWithEmptyArray = (gameData: GameData) => {
    slicedArrays.creatures = []
    slicedArrays.sensors = []
    slicedArrays.mapBlocks = []
    slicedArrays.items = []
    for (let i = 0; i < gameData.mapBlocks.length; i++) {
        slicedArrays.creatures.push([])
        slicedArrays.sensors.push([])
        slicedArrays.mapBlocks.push([gameData.mapBlocks[i]])
        slicedArrays.items.push([])
    }
}

export const reFillSkSlicedArraysWithEmptyArray = (gameData: GameData) => {
    slicedArrays.creatures = []
    slicedArrays.items = []
    for (let i = 0; i < gameData.mapBlocks.length; i++) {
        slicedArrays.creatures.push([])
        slicedArrays.items.push([])
    }
}



export const creaturesUpdate_ChristmasPanettone = (gameData: GameData) => {
    /*settings */
    fillSkSlicedArraysWithEmptyArray(gameData)

    for (let i = 0; i < gameData.creatures.length; i++) {
        gameData.creatures[i].hunting = false
        gameData.creatures[i].sensorsFlags.flagLeft = false
        gameData.creatures[i].sensorsFlags.flagRight = false
        gameData.creatures[i].coordinate = setCoordinateIndexPosition(gameData.creatures[i].spriteBox, gameData)
        slicedArrays.creatures[gameData.creatures[i].coordinate].push(gameData.creatures[i])
        for (let j = 0; j < gameData.creatures[i].sensors.sensors.length; j++) {
            creature_updateSensorsPositionBy10Degrees(gameData.creatures[i], gameData.creatures[i].sensors.sensors[j])
            gameData.creatures[i].sensors.sensors[j].coordinate = setCoordinateIndexPosition(gameData.creatures[i].sensors.sensors[j], gameData)
        }
    }

    for (let it = 0; it < gameData.items.length; it++) {
        gameData.items[it].coordinate = setCoordinateIndexPosition(gameData.items[it].spriteBox, gameData)
        slicedArrays.items[gameData.items[it].coordinate].push(gameData.items[it])
    }

    /* logic */
    for (let cc = 0; cc < slicedArrays.creatures.length; cc++) {
        for (let j = 0; j < slicedArrays.creatures[cc].length; j++) {

            const creature = slicedArrays.creatures[cc][j]
            const coordinateCreature = coordinatesMapping(creature.coordinate, gameData)

            for (let s = 0; s < creature.sensors.sensors.length; s++) {
                const sensor = creature.sensors.sensors[s]
                const coordinateSensor = coordinatesMapping(sensor.coordinate, gameData)

                for (let m = 0; m < 8; m++) {
                    for (let it = 0; it < slicedArrays.items[coordinateSensor[m]].length; it++) {
                        const item = slicedArrays.items[coordinateSensor[m]][it]
                        creature_sensorSetCollisionFlagWithItems(creature, sensor, item)
                        creatures_Hunt(creature, sensor, item)
                    }
                    if (sensor.type !== SensorType.Hunt) {
                        for (let kb = 0; kb < slicedArrays.mapBlocks[coordinateSensor[m]].length; kb++) {
                            const mapBlock = slicedArrays.mapBlocks[coordinateSensor[m]][kb]
                            creature_sensorSetCollisionWithMapBlocksFlags(creature, sensor, mapBlock)
                        }

                        for (let kc = 0; kc < slicedArrays.creatures[coordinateSensor[m]].length; kc++) {
                            const creatureFemale = slicedArrays.creatures[coordinateSensor[m]][kc]
                            creature_MaleHuntFemale(creature, sensor, creatureFemale)
                        }
                    }
                }
            }

            for (let m = 0; m < 8; m++) {
                for (let it = 0; it < slicedArrays.items[coordinateCreature[m]].length; it++) {
                    const item = slicedArrays.items[coordinateCreature[m]][it]
                    creature_collisionWithItem(creature, item)
                }
            }

            creature_TurnOnCollision(creature)
            creatures_Move(creature)

            for (let m = 0; m < 8; m++) {
                for (let c = 0; c < slicedArrays.creatures[coordinateCreature[m]].length; c++) {
                    const otherCreature = slicedArrays.creatures[coordinateCreature[m]][c]
                    creatures_CollisionWithCreatures(gameData, "y", creature, otherCreature)
                    creatures_CollisionWithCreatures(gameData, "x", creature, otherCreature)
                }
            }

            creature_RotateSpriteBy10Degrees(creature)
            creatures_HitBox(creature)
            creature_LifeDecrease(creature)
            creature_Info(creature)
            creature_Fertility(creature)

            for (let m = 0; m < 8; m++) {
                for (let mb = 0; mb < slicedArrays.mapBlocks[coordinateCreature[m]].length; mb++) {
                    const mapBlock = slicedArrays.mapBlocks[coordinateCreature[m]][mb]
                    creature_CollisionWithSolidMapBlocks(creature, mapBlock)
                }
            }
        }
    }

    creature_Death(gameData)
}

const coordinatesMapping = (coordinate: number, gameData: GameData): number[] => {
    const array = [coordinate,
        coordinate - 1,
        coordinate + 1,
        coordinate - gameData.howMuchTilesOnLine,
        coordinate + gameData.howMuchTilesOnLine,
        coordinate - gameData.howMuchTilesOnLine + 1,
        coordinate + gameData.howMuchTilesOnLine + 1,
        coordinate - gameData.howMuchTilesOnLine - 1,
        coordinate + gameData.howMuchTilesOnLine - 1,
    ]
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= gameData.howMuchTiles || array[i] < 0) array[i] = 1
    }
    return array
}