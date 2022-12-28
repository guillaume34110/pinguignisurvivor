import { mapBlocks_Init } from "../../MapBlocks/MapBlocks_Init"
import { GameData, SpriteBox, startData } from "../../StartData/StartData"
import { setCoordinateIndexPosition } from "./Coordinate"

const given = describe
const when = describe
const then = it

const gameData: GameData = JSON.parse(JSON.stringify(startData))
mapBlocks_Init(gameData)
const spriteBoxe: SpriteBox = {
    x: 1281,
    y: 1281,
    w: 12,
    h: 16,
    direction: {
        radian: 0,
        degree10:0,
        x: 0.1,
        y: 0.1
    },
    speed: 0.75,
}

given('coordinate', () => {

    when('a spritebox on the map', () => {
        then('should be 1020', () => {
            const t0 = performance.now()
            for (let i = 0 ; i< 100000 ; i++)setCoordinateIndexPosition(spriteBoxe, gameData)
            const t1 = performance.now()
            const result = setCoordinateIndexPosition(spriteBoxe, gameData)
            console.log(`Time it takes to run the function: ${t1 - t0} ms`)
            expect(result).toBe(1020)

        })
    })

})