import { GameData, Sensor, SensorType, SpriteBox } from '../StartData/StartData';
import { creatures_Move } from "./CreaturesFunctions/Creatures_Move";
import { creatures_HitBox } from "./CreaturesFunctions/Creatures_HitBox";
import { creature_lifeDecrease as creature_LifeDecrease } from "./CreaturesFunctions/Creature_lifeDecrease";
import { creature_Death } from "./CreaturesFunctions/Creature_Death";
import { creature_CollisionWithSolidMapBlocks, creature_collisionWithItem, creatures_CollisionWithCreatures, creatures_CollisionWithCreaturesWithoutHitboxMatch } from './CreaturesFunctions/Creatures_Collision';
import { creature_Info } from "./CreaturesFunctions/Creature_Info";
import { creature_MaleHuntFemale } from "./CreaturesFunctions/Creature_Reproduction";
import { creatures_Hunt } from "./CreaturesFunctions/Creature_Hunt";
import { creature_RotateSprite } from "./CreaturesFunctions/Creature_RotateSprite";

import { creature_Fertility, creature_MakeBaby } from './CreaturesFunctions/Creature_Nursery';
import { creature_updateSensorsPosition, creature_sensorSetCollisionFlagWithItems, creature_sensorSetCollisionWithMapBlocksFlag, creature_TurnOnCollision } from './CreaturesFunctions/Creature_sensors';
import { fast_quicksort, easyQuickSort } from '../Utilities/sorting/quickSort';
import { binarySearch } from '../Utilities/search/BinarySearch';
import { Creature } from './Creature';
import { frame, Game } from '../../Components/Game';
import { MapBlock } from '../MapBlocks/MapBlock';
import { Item } from '../Items/Item';
import { setCoordinateIndexposition } from '../Utilities/coordinate/Coordinate';


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
            creature_updateSensorsPosition(creature, sensor)

            for (let ka = 0; ka < gameData.items.length; ka++) {
                const item = gameData.items[ka]
                creature_sensorSetCollisionFlagWithItems(creature, sensor, item)
                creatures_Hunt(creature, sensor, item)
            }
            if (sensor.type !== SensorType.Hunt) {
                for (let kb = 0; kb < gameData.mapBlocks.length; kb++) {
                    const mapBlock = gameData.mapBlocks[kb]
                    creature_sensorSetCollisionWithMapBlocksFlag(creature, sensor, mapBlock)
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
        creature_RotateSprite(creature)
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

const slicedArray: (Creature | Sensor | MapBlock | Item)[][] = []

export const fillSkSlicedArrayWithEmptyArray = (gameData: GameData) => {
    for (let i = 0; i < gameData.mapBlocks.length; i++) slicedArray.push([gameData.mapBlocks[i]])
}

export const creaturesUpdate2 = (gameData: GameData) => {
    const currentArray = [...slicedArray]
    for (let i = 0; i < gameData.creatures.length; i++) {
        gameData.creatures[i].coordinate = setCoordinateIndexposition(gameData.creatures[i].spriteBox, gameData)
        currentArray[gameData.creatures[i].coordinate].push(gameData.creatures[i])
        for (let j = 0; j < gameData.creatures[i].sensors.sensors.length; j++) {
            gameData.creatures[i].sensors.sensors[j].coordinate = setCoordinateIndexposition(gameData.creatures[i].sensors.sensors[j], gameData)
            currentArray[gameData.creatures[i].sensors.sensors[j].coordinate].push(gameData.creatures[i].sensors.sensors[j])
        }

    }
    for (let i = 0; i < gameData.items.length; i++) {
        gameData.items[i].coordinate = setCoordinateIndexposition(gameData.items[i].spriteBox, gameData)
        currentArray[gameData.items[i].coordinate].push(gameData.items[i])
    }

    for (let i = 0; i < currentArray.length; i++) {
        for (let j = 0; j < currentArray[i].length; j++) {
            for (let k = 0; k < currentArray[i].length; k++) {






            }
        }
    }

    creature_Death(gameData)


}