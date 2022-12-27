import { binarySearch } from '../Utilities/search/BinarySearch';
import { Creature } from './Creature';
import { creature_collisionWithItem,
    creature_CollisionWithSolidMapBlocks,
    creatures_CollisionWithCreatures, } from './CreaturesFunctions/Creatures_Collision';
import { creature_Death } from './CreaturesFunctions/Creature_Death';
import { creature_Fertility } from './CreaturesFunctions/Creature_Nursery';
import { creature_Info } from './CreaturesFunctions/Creature_Info';
import { creature_lifeDecrease as creature_LifeDecrease } from './CreaturesFunctions/Creature_lifeDecrease';
import { creature_MaleHuntFemale } from './CreaturesFunctions/Creature_Reproduction';
import { creature_RotateSprite, creature_RotateSpriteBy10Degrees } from './CreaturesFunctions/Creature_RotateSprite';
import {
    creature_sensorSetCollisionFlagWithItems,
    creature_sensorSetCollisionWithMapBlocksFlags,
    creature_TurnOnCollision,
    creature_updateSensorsPosition,
    creature_updateSensorsPositionBy10Degrees
    } from './CreaturesFunctions/Creature_sensors';
import { creatures_HitBox } from './CreaturesFunctions/Creatures_HitBox';
import { creatures_Hunt } from './CreaturesFunctions/Creature_Hunt';
import { creatures_Move } from './CreaturesFunctions/Creatures_Move';
import { easyQuickSort, fast_quicksort } from '../Utilities/sorting/quickSort';
import { frame, Game } from '../../Components/Game';
import {
    GameData,
    Sensor,
    Sensors,
    SensorType,
    SpriteBox
    } from '../StartData/StartData';
import { Item } from '../Items/Item';
import { MapBlock } from '../MapBlocks/MapBlock';
import { setCoordinateIndexPosition } from '../Utilities/coordinate/Coordinate';



const afterSensorsAvg: number[] = []
const afterCreaturesAvg: number[] = []
const endsAvg: number[] = []
export const creaturesUpdate = (gameData: GameData) => {


    const starts = []
    const afterSensors = []
    const afterCreatures = []
    const ends = []


    for (let i = 0; i < gameData.creatures.length; i++) {
        /** */
        const startCreature = Date.now()
        starts.push(startCreature)

        const creature = gameData.creatures[i]

        creature.hunting = false
        creature.sensorsFlags.flagLeft = false
        creature.sensorsFlags.flagRight = false

        for (let k = 0; k < creature.sensors.sensors.length; k++) {
            const sensor = creature.sensors.sensors[k]
            // creature_updateSensorsPosition(creature, sensor)
            creature_updateSensorsPositionBy10Degrees(creature ,sensor)

            for (let ka = 0; ka < gameData.items.length; ka++) {
                const item = gameData.items[ka]
                creature_sensorSetCollisionFlagWithItems(creature, sensor, item)
                creatures_Hunt(creature, sensor, item)
            }
            if (sensor.type !== SensorType.Hunt) {
                for (let kb = 0; kb < gameData.mapBlocks.length; kb++) {
                    const mapBlock = gameData.mapBlocks[kb]
                    creature_sensorSetCollisionWithMapBlocksFlags(creature, sensor, mapBlock)
                }

                for (let kc = 0; kc < gameData.creatures.length; kc++) {
                    const creatureFemale = gameData.creatures[kc]
                    creature_MaleHuntFemale(creature, sensor, creatureFemale)
                }
            }
        }
        /** */
        const afterSensor = Date.now() - startCreature
        afterSensors.push(afterSensor)
        for (let t = 0; t < gameData.items.length; t++) {
            const item = gameData.items[t]
            creature_collisionWithItem(creature, item)
        }

        creature_TurnOnCollision(creature)
        creatures_Move(gameData, creature)
        const afterItem = Date.now() - startCreature - afterSensor
        for (let j = 0; j < gameData.creatures.length; j++) {
            const otherCreature = gameData.creatures[j]
            creatures_CollisionWithCreatures(gameData, "y", creature, otherCreature)
            creatures_CollisionWithCreatures(gameData, "x", creature, otherCreature)
        }

        const afterCreature = Date.now() - startCreature - afterItem
        afterCreatures.push(afterCreature)

        // creature_RotateSprite(creature)
        creature_RotateSpriteBy10Degrees(creature)
        creatures_HitBox(creature)
        creature_LifeDecrease(creature)
        creature_Info(creature)
        creature_Fertility(creature)

        for (let l = 0; l < gameData.mapBlocks.length; l++) {
            const mapBlock = gameData.mapBlocks[l]
            creature_CollisionWithSolidMapBlocks(creature, mapBlock)
        }
        /**/
        const end = Date.now() - startCreature
        ends.push(end)
    }
    creature_Death(gameData)


    /**/
    afterSensorsAvg.push(afterSensors.reduce((a, b) => a + b, 0) / afterSensors.length)
    afterCreaturesAvg.push(afterCreatures.reduce((a, b) => a + b, 0) / afterCreatures.length)
    endsAvg.push(ends.reduce((a, b) => a + b, 0) / ends.length)


    if (frame === 51) gameData.message = `average afterSensor ${afterSensorsAvg.reduce((a, b) => a + b, 0) / afterSensorsAvg.length} , after creatures ${afterCreaturesAvg.reduce((a, b) => a + b, 0) / afterCreaturesAvg.length} , end ${endsAvg.reduce((a, b) => a + b, 0) / endsAvg.length}`

}

export const sortCreaturesByXPos = (creatures: Creature[]): Creature[] =>
    easyQuickSort(creatures.map((creature, index) => [creature.spriteBox.x, index])).map(X => creatures[X[1]])

export const sortCreaturesByYPos = (creatures: Creature[]): Creature[] =>
    easyQuickSort(creatures.map((creature, index) => [creature.spriteBox.y, index])).map(X => creatures[X[1]])

export const findCreatureByYPos = (creatures: Creature[], yPos: number, yPosPlusW: number): Creature[] => binarySearch(creatures.map((creature, index) => [creature.spriteBox.y, index]), yPos, yPosPlusW).map(Y => creatures[Y[1]])
export const findCreatureByXPos = (creatures: Creature[], xPos: number, xPosPlusW: number): Creature[] => binarySearch(creatures.map((creature, index) => [creature.spriteBox.x, index]), xPos, xPosPlusW).map(X => creatures[X[1]])

interface slicedArraysInterface {
    creatures: Creature[][]
    sensors: Sensor[][]
    mapBlocks: MapBlock[][]
    items: Item[][]
}

const slicedArrays: slicedArraysInterface = { creatures: [], sensors: [], mapBlocks: [], items: [] }
export const fillSkSlicedArraysWithEmptyArray = (gameData: GameData) => {
    slicedArrays.creatures =[]
    slicedArrays.sensors =[]
    slicedArrays.mapBlocks =[]
    slicedArrays.items =[]
    for (let i = 0; i < gameData.mapBlocks.length; i++) {
        slicedArrays.creatures.push([])
        slicedArrays.sensors.push([])
        slicedArrays.mapBlocks.push([gameData.mapBlocks[i]])
        slicedArrays.items.push([])
    }
}

export const reFillSkSlicedArraysWithEmptyArray = (gameData: GameData) => {
    slicedArrays.creatures =[]
    slicedArrays.mapBlocks =[]
    slicedArrays.items =[]
    for (let i = 0; i < gameData.mapBlocks.length; i++) {
        slicedArrays.creatures.push([])
        slicedArrays.items.push([])
    }
}

export const creaturesUpdate2 = (gameData: GameData) => {
   /*settings */
   fillSkSlicedArraysWithEmptyArray(gameData)

    for (let i = 0; i < gameData.creatures.length; i++) {
        gameData.creatures[i].hunting = false
        gameData.creatures[i].sensorsFlags.flagLeft = false
        gameData.creatures[i].sensorsFlags.flagRight = false
        gameData.creatures[i].coordinate = setCoordinateIndexPosition(gameData.creatures[i].spriteBox, gameData)
         slicedArrays.creatures[gameData.creatures[i].coordinate].push(gameData.creatures[i])
        for (let j = 0; j < gameData.creatures[i].sensors.sensors.length; j++) {
            // creature_updateSensorsPosition(gameData.creatures[i], gameData.creatures[i].sensors.sensors[j])
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

            for (let s = 0; s < creature.sensors.sensors.length; s++) {
                const sensor = creature.sensors.sensors[s]
                for (let it = 0; it < slicedArrays.items[sensor.coordinate].length; it++) {
                    const item = slicedArrays.items[sensor.coordinate][it]
                    creature_sensorSetCollisionFlagWithItems(creature, sensor, item)
                    creatures_Hunt(creature, sensor, item)
                }

                if (sensor.type !== SensorType.Hunt) {
                    for (let kb = 0; kb < slicedArrays.mapBlocks[sensor.coordinate].length; kb++) {
                        const mapBlock = slicedArrays.mapBlocks[sensor.coordinate][kb]
                        creature_sensorSetCollisionWithMapBlocksFlags(creature, sensor, mapBlock)
                    }

                    for (let kc = 0; kc < slicedArrays.creatures[sensor.coordinate].length; kc++) {
                        const creatureFemale = slicedArrays.creatures[sensor.coordinate][kc]
                        creature_MaleHuntFemale(creature, sensor, creatureFemale)
                    }
                }
            }

            for (let it = 0; it < slicedArrays.items[cc].length; it++) {
                const item = slicedArrays.items[cc][it]
                creature_collisionWithItem(creature, item)
            }
            creature_TurnOnCollision(creature)
            creatures_Move(gameData, creature)
            for (let c = 0; c < slicedArrays.creatures[cc].length; c++) {
                const otherCreature = slicedArrays.creatures[cc][c]
                creatures_CollisionWithCreatures(gameData, "y", creature, otherCreature)
                creatures_CollisionWithCreatures(gameData, "x", creature, otherCreature)
            }

            // creature_RotateSprite(creature)
            creature_RotateSpriteBy10Degrees(creature)
            creatures_HitBox(creature)
            creature_LifeDecrease(creature)
            creature_Info(creature)
            creature_Fertility(creature)

            for (let m = 0; m < slicedArrays.mapBlocks[cc].length; m++) {
                const mapBlock = slicedArrays.mapBlocks[cc][m]
                creature_CollisionWithSolidMapBlocks(creature, mapBlock)
            }
        }
    }

    creature_Death(gameData)
}