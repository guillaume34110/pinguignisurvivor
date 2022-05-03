import { keydownController } from "../KeysInputs/keys"
import { GameData,  startData } from "../StartData/StartData"
import { heroMove } from "./heroMove"


const given = describe
const when = describe
const then = it

const gameData:GameData = Object.create(startData)

const heroInit = () => { 
    gameData.hero.x = 100
    gameData.hero.y = 100
    gameData.hero.speed = 5
    gameData.keys = {
        keysInstant: {
            left: false,
            right: false,
            up: false,
            down: false,
        },
        keyState: {
            left: false,
            right: false,
            up: false,
            down: false,
        }
    }
}
given('hero is on map and key input is send', () => {

    beforeEach(() => heroInit())

    when('keydown input right is received', () => {
        then('Hero should go right', () => {
            keydownController(gameData.keys, "ArrowRight")
            heroMove(gameData)
            expect(gameData.hero.x).toBe(105)
        })
    })
})