import { mapBlocks_Init } from "../../MapBlocks/MapBlocks_Init"
import { GameData, SpriteBox, startData } from "../../StartData/StartData"
import { creature_updateSensorsPosition, creature_updateSensorsPositionBy10Degrees } from "./Creature_sensors"
import { Creature } from '../Creature';
import { mouse } from "../CreaturesTypes/Mouse";


const given = describe
const when = describe
const then = it

const gameData: GameData = JSON.parse(JSON.stringify(startData))
mapBlocks_Init(gameData)
const creature : Creature = {...mouse}

given('bench test rad', () => {

    when('a spritebox on the map', () => {
        then('should be 1020', () => {
            const t0 = performance.now()
            for (let i = 0 ; i< 100000 ; i++)creature_updateSensorsPositionBy10Degrees(creature, creature.sensors.sensors[0])
            const t1 = performance.now()
            console.log(`Time it takes to run the max degree: ${t1 - t0} ms`)
            expect(1).toBe(1)

        })
    })
    when('a spritebox on the map', () => {
        then('should be 1020', () => {
            const t0 = performance.now()
            for (let i = 0 ; i< 100000 ; i++)creature_updateSensorsPosition(creature, creature.sensors.sensors[0])
            const t1 = performance.now()
            console.log(`Time it takes to run the other degree: ${t1 - t0} ms`)
            expect(1).toBe(1)

        })
    })
    

})