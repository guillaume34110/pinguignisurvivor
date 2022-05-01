import { Keys } from "../StartData/StartData"
import { keydownController, keyupController } from "./keys"

const given = describe
const when = describe
const then = it

 let heroKeys :Keys =
   {
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
    const resetKeys = () => { 
        heroKeys =  {
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
        }}
    }
given('input key controller to move hero',() => {
   
beforeEach(() => {resetKeys()})

    when('input right is received',() => {
        then('Hero should go right', () => {
            heroKeys = keydownController(heroKeys,"ArrowRight")
            expect(heroKeys.keyState.right).toBe(true)
        })
    })

    when('input left is received' ,() => { 
        then('Hero should go left', () => {
            heroKeys = keydownController(heroKeys,"ArrowLeft")
            expect(heroKeys.keyState.left).toBe(true)
        })
    })

    when('input down is received',() => {
        then('Hero should go down', () => {
            heroKeys = keydownController(heroKeys,"ArrowDown")
            expect(heroKeys.keyState.down).toBe(true)
        })
    })

    when('input up is received',() => {
        then('Hero should go up', () => {
            heroKeys = keydownController(heroKeys,"ArrowUp")
            expect(heroKeys.keyState.up).toBe(true)
        })
    })
})