import { keydownController } from "../KeysInputs/keys"
import { GameData,  startData } from "../StartData/StartData"
import { heroMove } from "./heroMove"


const given = describe
const when = describe
const then = it

const gameData:GameData = JSON.parse(JSON.stringify(startData))

const heroInit = () => { 
    gameData.hero.spriteBox.x = 100
    gameData.hero.spriteBox.y = 100
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
            expect(gameData.hero.spriteBox.y).toBe(105)
        })
    })
})