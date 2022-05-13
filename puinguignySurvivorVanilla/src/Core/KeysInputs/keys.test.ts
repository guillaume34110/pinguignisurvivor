import {Keys} from "../StartData/StartData.js"
import {keydownController, keyupController} from "./keys.js"

const given = describe
const when = describe
const then = it

let heroKeys: Keys =
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
    heroKeys = {
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
given('input keydown is send on controller to move hero', () => {

    beforeEach(() => resetKeys())

    when('keydown input right is received', () => {
        then('Hero should go right', () => {
            keydownController(heroKeys, "ArrowRight")
            expect(heroKeys.keyState.right).toBe(true)
        })
    })

    when('keydown input left is received', () => {
        then('Hero should go left', () => {
            keydownController(heroKeys, "ArrowLeft")
            expect(heroKeys.keyState.left).toBe(true)
        })
    })

    when('keydown input down is received', () => {

        then('Hero should go down', () => {
            keydownController(heroKeys, "ArrowDown")
            expect(heroKeys.keyState.down).toBe(true)
        })
    })

    when('keydown input up is received', () => {
        then('Hero should go up', () => {
            keydownController(heroKeys, "ArrowUp")
            expect(heroKeys.keyState.up).toBe(true)
        })
    })

    when('keydown input z is received', () => {
        then('Hero should go up', () => {
            keydownController(heroKeys, "z")
            expect(heroKeys.keyState.up).toBe(true)
        })
    })

    when('keydown input right is received first and keydown input left in second', () => {
        then('Hero should go right', () => {
            keydownController(heroKeys, "ArrowRight")
            keydownController(heroKeys, "ArrowLeft")
            expect(heroKeys.keyState.right).toBe(true)
            expect(heroKeys.keyState.left).toBe(false)
        })
    })

    when('keydown input left is received first and keydown input right in second', () => {
        then('Hero should go left', () => {
            keydownController(heroKeys, "ArrowLeft")
            keydownController(heroKeys, "ArrowRight")
            expect(heroKeys.keyState.left).toBe(true)
            expect(heroKeys.keyState.right).toBe(false)
        })
    })

    when('keydown input down is received first and keydown input up in second', () => {
        then('Hero should go down', () => {
            keydownController(heroKeys, "ArrowDown")
            keydownController(heroKeys, "ArrowUp")
            expect(heroKeys.keyState.down).toBe(true)
            expect(heroKeys.keyState.up).toBe(false)
        })
    })

    when('keydown input up is received first and keydown input down in second', () => {
        then('Hero should go up', () => {
            keydownController(heroKeys, "ArrowUp")
            keydownController(heroKeys, "ArrowDown")
            expect(heroKeys.keyState.up).toBe(true)
            expect(heroKeys.keyState.down).toBe(false)
        })
    })

    when('keydown input up is received first and keydown input down in second', () => {
        then('Hero should go up', () => {
            keydownController(heroKeys, "ArrowUp")
            keydownController(heroKeys, "ArrowDown")
            expect(heroKeys.keyState.up).toBe(true)
            expect(heroKeys.keyState.down).toBe(false)
        })
    })
})

given('composed input keydown is send on controller to move the hero ', () => {
    beforeAll(() => resetKeys())
    when('keydown input up is received first and keydown input left in second', () => {
        then('Hero should go up and left', () => {
            keydownController(heroKeys, "ArrowUp")
            keydownController(heroKeys, "ArrowLeft")
            expect(heroKeys.keyState.up).toBe(true)
            expect(heroKeys.keyState.left).toBe(true)
        })
    })
    when('keydown input right is received ', () => {
        then('Hero should go up and left', () => {
            keydownController(heroKeys, "ArrowRight")
            expect(heroKeys.keyState.right).toBe(false)
        })
    })
})

given('composed input keydown is send on controller to move the hero', () => {
    beforeAll(() => resetKeys())
    when('keydown input down is received first and keydown input right in second', () => {
        then('Hero should go down and right', () => {
            keydownController(heroKeys, "ArrowDown")
            keydownController(heroKeys, "ArrowRight")
            expect(heroKeys.keyState.down).toBe(true)
            expect(heroKeys.keyState.right).toBe(true)
        })
    })
    when('keydown input right is received ', () => {
        then('Hero should go down and right', () => {
            keydownController(heroKeys, "ArrowLeft")
            expect(heroKeys.keyState.left).toBe(false)
        })
    })
})

given('composed input keydown and keyup is send on controller to move the hero', () => {
    beforeAll(() => resetKeys())
    when('keydown input right is received', () => {
        then('Hero should go right', () => {
            keydownController(heroKeys, "ArrowRight")
            expect(heroKeys.keyState.right).toBe(true)
        })
    })
    when('keyup input right is received ', () => {
        then('Hero should not go right', () => {
            keyupController(heroKeys, "ArrowRight")
            expect(heroKeys.keyState.right).toBe(false)
        })
    })
})

given('composed input keydown and keyup is send on controller to move the hero', () => {
    beforeAll(() => resetKeys())
    when('keydown input left is received', () => {
        then('Hero should go left', () => {
            keydownController(heroKeys, "ArrowLeft")
            expect(heroKeys.keyState.left).toBe(true)
        })
    })
    when('keyup input left is received ', () => {
        then('Hero should not go left', () => {
            keyupController(heroKeys, "ArrowLeft")
            expect(heroKeys.keyState.left).toBe(false)
        })
    })
})


given('composed input keydown and keyup is send on controller to move the hero', () => {
    beforeAll(() => resetKeys())
    when('keydown input left & up is received', () => {
        then('Hero should go left and up', () => {
            keydownController(heroKeys, "ArrowLeft")
            keydownController(heroKeys, "ArrowUp")
            expect(heroKeys.keyState.left).toBe(true)
            expect(heroKeys.keyState.up).toBe(true)
        })
    })
    when('keyup input left is received ', () => {
        then('Hero should not go left but go up', () => {
            keyupController(heroKeys, "ArrowLeft")
            expect(heroKeys.keyState.left).toBe(false)
            expect(heroKeys.keyState.up).toBe(true)
        })
    })
    when('keyup input up is received ', () => {
        then('Hero should not go up', () => {
            keyupController(heroKeys, "ArrowUp")
            expect(heroKeys.keyState.up).toBe(false)
        })
    })

})


given('composed input keydown and keyup is send on controller to move the hero', () => {
    beforeAll(() => resetKeys())
    when('keydown input left received', () => {
        then('Hero should go left', () => {
            keydownController(heroKeys, "ArrowLeft")
            expect(heroKeys.keyState.left).toBe(true)
        })
    })
    when('keydown input right is received ', () => {
        then('Hero should go left', () => {
            keydownController(heroKeys, "ArrowRight")
            expect(heroKeys.keyState.left).toBe(true)

        })
    })
    when('keyup input left is received ', () => {
        then('Hero should  go right', () => {
            keyupController(heroKeys, "ArrowLeft")
            expect(heroKeys.keyState.right).toBe(true)
        })
    })

})