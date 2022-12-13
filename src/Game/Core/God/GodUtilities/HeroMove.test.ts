import {keydownController} from "../../KeysInputs/keys"
import {GameData, startData} from "../../StartData/StartData"
import {god_Move} from "./God_Move";

const given = describe
const when = describe
const then = it

const gameData: GameData = JSON.parse(JSON.stringify(startData))

const godInit = () => {
    gameData.god.spriteBox.x = 100
    gameData.god.spriteBox.y = 100
    gameData.god.spriteBox.speed = 5
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
given('god is on map and key input is send', () => {

    beforeEach(() => godInit())

    when('keydown input right is received', () => {
        then('god should go right', () => {

            keydownController(gameData.keys, "ArrowRight")
            god_Move(gameData)
            expect(gameData.god.spriteBox.x).toBe(105)


        })
    })

    when('keydown input left is received', () => {
        then('god should go left', () => {
            keydownController(gameData.keys, "ArrowLeft")
            god_Move(gameData)
            expect(gameData.god.spriteBox.x).toBe(95)

        })
    })

    when('keydown input down is received', () => {
        then('god should go down', () => {
            keydownController(gameData.keys, "ArrowDown")
            god_Move(gameData)
            expect(gameData.god.spriteBox.y).toBe(105)
        })
    })

    when('keydown input up is received', () => {
        then('god should go up', () => {
            keydownController(gameData.keys, "ArrowUp")
            god_Move(gameData)
            expect(gameData.god.spriteBox.y).toBe(95)
        })
    })

    when('keydown input right and down is received', () => {
        then('god should go right and down', () => {
            keydownController(gameData.keys, "ArrowRight")
            keydownController(gameData.keys, "ArrowDown")
            god_Move(gameData)

            expect(gameData.god.spriteBox.y).toBe(103.53553390593274)
            expect(gameData.god.spriteBox.y).toBe(103.53553390593274)


        })
    })
})