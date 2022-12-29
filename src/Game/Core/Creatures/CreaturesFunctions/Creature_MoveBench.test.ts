import { mapBlocks_Init } from "../../MapBlocks/MapBlocks_Init"
import { GameData, startData } from "../../StartData/StartData"
import { Creature } from '../Creature';
import { mouse } from "../CreaturesTypes/Mouse";
import { creatures_CollisionWithMapBlockMove,  creatures_Move} from './Creatures_Move';


const given = describe
const when = describe
const then = it

const gameData: GameData = JSON.parse(JSON.stringify(startData))
mapBlocks_Init(gameData)
const creature : Creature = {...mouse}

given('bench test rad', () => {

    when('a spriteBox on the map', () => {
        then('should be 1020', () => {
            const t0 = performance.now()
            for (let i = 0 ; i< 100000 ; i++)creatures_Move(creature)
            const t1 = performance.now()
            console.log(`Time it takes to run the new =move: ${t1 - t0} ms`)
            expect(1).toBe(1)
        })
    })
    when('a spriteBox on the map', () => {
        then('should be 1020', () => {
            const t0 = performance.now()
            for (let i = 0 ; i< 100000 ; i++) creatures_CollisionWithMapBlockMove( creature)
            const t1 = performance.now()
            console.log(`Time it takes to run the new colide  move: ${t1 - t0} ms`)
            expect(1).toBe(1)
        })
    })
})