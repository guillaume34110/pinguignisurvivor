
import { Creature } from './Creature';
import {
    creature_collisionWithItem,
    creature_CollisionWithSolidMapBlocks,
    creatures_CollisionWithCreatures,
} from './CreaturesFunctions/Creatures_Collision';
import { creature_Death } from './CreaturesFunctions/Creature_Death';
import { creature_BabyBorn, creature_Fertility, creature_Gestation } from './CreaturesFunctions/Creature_Nursery';
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
import { creatures_HuntCreatures, creatures_HuntItems, creatures_HuntingInhibitor } from './CreaturesFunctions/Creature_Hunt';
import { creatures_Move } from './CreaturesFunctions/Creatures_Move';
import {
    GameData,
    Sensor,
    SensorType,
} from '../StartData/StartData';
import { Item } from '../Items/Item';
import { MapBlock } from '../MapBlocks/MapBlock';
import { creature_hungry, creature_size } from './CreaturesFunctions/Creature_Nutrition';
import { creature_MapBlockMemory, creatures_MemoryCreatures, creatures_MemoryItems } from './CreaturesFunctions/Memory/Creature_Mermory';
import { setCoordinateIndexPosition } from '../Utilities/coordinate/Coordinate';

export interface slicedArraysInterface {
    creatures: Creature[][]
    sensors: Sensor[][]
    mapBlocks: MapBlock[][]
    items: Item[][]
}


export const fillSkSlicedArraysWithEmptyArray = (gameData: GameData) => {
    gameData.slicedArrays.creatures = []
    gameData.slicedArrays.sensors = []
    gameData.slicedArrays.mapBlocks = []
    gameData.slicedArrays.items = []
    for (let i = 0; i < gameData.mapBlocks.length; i++) {
        gameData.slicedArrays.creatures.push([])
        gameData.slicedArrays.sensors.push([])
        gameData.slicedArrays.mapBlocks.push([gameData.mapBlocks[i]])
        gameData.slicedArrays.items.push([])
    }
}

export const reFillSkSlicedArraysWithEmptyArray = (gameData: GameData) => {
    gameData.slicedArrays.creatures = []
    gameData.slicedArrays.items = []
    for (let i = 0; i < gameData.mapBlocks.length; i++) {
        gameData.slicedArrays.creatures.push([])
        gameData.slicedArrays.items.push([])
    }
}



export const creaturesUpdate_ChristmasPanettone = (gameData: GameData) => {
    /*settings */
    reFillSkSlicedArraysWithEmptyArray(gameData)

    for (let i = 0; i < gameData.creatures.length; i++) {

        gameData.creatures[i].hunting = false
        gameData.creatures[i].sensorsFlags.flagLeft = false
        gameData.creatures[i].sensorsFlags.flagRight = false
        gameData.creatures[i].coordinate = setCoordinateIndexPosition(gameData.creatures[i].spriteBox, gameData)
        const arrayToUpdate =  gameData.slicedArrays.creatures[gameData.creatures[i].coordinate]
       if (arrayToUpdate === undefined) return
        arrayToUpdate.push(gameData.creatures[i])
        for (let j = 0; j < gameData.creatures[i].sensors.sensors.length; j++) {
            creature_updateSensorsPositionBy10Degrees(gameData.creatures[i], gameData.creatures[i].sensors.sensors[j])
            gameData.creatures[i].sensors.sensors[j].coordinate = setCoordinateIndexPosition(gameData.creatures[i].sensors.sensors[j], gameData)
        }
    }

    for (let it = 0; it < gameData.items.length; it++) {
        gameData.items[it].coordinate = setCoordinateIndexPosition(gameData.items[it].spriteBox, gameData)
        gameData.slicedArrays.items[gameData.items[it].coordinate].push(gameData.items[it])
    }

    /* logic */
    for (let cc = 0; cc < gameData.slicedArrays.creatures.length; cc++) {
        for (let j = 0; j < gameData.slicedArrays.creatures[cc].length; j++) {

            const creature = gameData.slicedArrays.creatures[cc][j]
            creatures_HitBox(creature)
            creatures_HuntingInhibitor(creature)
            creature_hungry(creature)
            creature_size(creature)
            const coordinateCreature = coordinatesMapping(creature.coordinate, gameData)

            for (let s = 0; s < creature.sensors.sensors.length; s++) {
                const sensor = creature.sensors.sensors[s]
                const coordinateSensor = coordinatesMapping(sensor.coordinate, gameData)

                for (let m = 0; m < 8; m++) {
                    for (let it = 0; it < gameData.slicedArrays.items[coordinateSensor[m]].length; it++) {
                        const item = gameData.slicedArrays.items[coordinateSensor[m]][it]
                        creature_sensorSetCollisionFlagWithItems(creature, sensor, item)
                        creatures_HuntItems(creature, sensor, item)
                    }
                    if (sensor.type !== SensorType.Hunt) {

                            const mapBlock = gameData.slicedArrays.mapBlocks[coordinateSensor[m]][0]
                            creature_sensorSetCollisionWithMapBlocksFlags(creature, sensor, mapBlock)

                        for (let kc = 0; kc < gameData.slicedArrays.creatures[coordinateSensor[m]].length; kc++) {
                            const otherCreature = gameData.slicedArrays.creatures[coordinateSensor[m]][kc]
                            creature_MaleHuntFemale(creature, sensor, otherCreature)
                        }

                    } else if (sensor.type === SensorType.Hunt) {
                        
                        for (let kc = 0; kc < gameData.slicedArrays.creatures[coordinateSensor[m]].length; kc++) {
                            const otherCreature = gameData.slicedArrays.creatures[coordinateSensor[m]][kc]
                            creatures_HuntCreatures(creature,sensor ,otherCreature)
                            creatures_MemoryCreatures(creature, otherCreature)
                        }

                        const mapBlock = gameData.slicedArrays.mapBlocks[coordinateSensor[m]][0]
                        creature_MapBlockMemory(creature, mapBlock)

                        for (let kc = 0; kc < gameData.slicedArrays.items[coordinateSensor[m]].length; kc++) {
                            const otherItems = gameData.slicedArrays.items[coordinateSensor[m]][kc]
                            creatures_MemoryItems(creature, otherItems)
                        }
                    }
                }
            }

            for (let m = 0; m < 8; m++) {
                for (let it = 0; it < gameData.slicedArrays.items[coordinateCreature[m]].length; it++) {
                    const item = gameData.slicedArrays.items[coordinateCreature[m]][it]
                    creature_collisionWithItem(creature, item)
                }
            }

            creature_TurnOnCollision(creature)
            creatures_Move(creature)

            for (let m = 0; m < 8; m++) {
                for (let c = 0; c < gameData.slicedArrays.creatures[coordinateCreature[m]].length; c++) {
                    const otherCreature = gameData.slicedArrays.creatures[coordinateCreature[m]][c]
                    creatures_CollisionWithCreatures(gameData, "y", creature, otherCreature)
                    creatures_CollisionWithCreatures(gameData, "x", creature, otherCreature)
                }
            }

            creature_RotateSpriteBy10Degrees(creature)

            creature_LifeDecrease(creature)
            creature_Fertility(creature)
            creature_Gestation(creature)
            creature_BabyBorn(creature, gameData)

            for (let m = 0; m < 8; m++) {
                    const mapBlock = gameData.slicedArrays.mapBlocks[coordinateCreature[m]][0]
                    creature_CollisionWithSolidMapBlocks(creature, mapBlock)  
            }
        }
    }

    creature_Death(gameData)
}

export const coordinatesMapping = (coordinate: number, gameData: GameData): number[] => {
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

