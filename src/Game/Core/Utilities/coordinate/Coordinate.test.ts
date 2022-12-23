import { mapBlocks_Init } from "../../MapBlocks/MapBlocks_Init"
import { GameData, SpriteBox, startData } from "../../StartData/StartData"
import { foundIndexWithCoordinate, setCoordinateIndexposition } from "./coordinate"

const given = describe
const when = describe
const then = it

const gameData: GameData = JSON.parse(JSON.stringify(startData))
mapBlocks_Init(gameData)
const spriteBoxe : SpriteBox = {
        x: 1281,
        y: 1281,
        w: 12,
        h: 16,
        direction: {
            radian: 0,
            x: 0.1,
            y: 0.1
        },
        speed: 0.75,
}

given('coordinate', () => {

    when('a spritebox on the map', () => {
        then('should be 2020', () => {          
            expect(setCoordinateIndexposition(spriteBoxe , gameData)).toBe(2020)
        })       
    })       
    
})