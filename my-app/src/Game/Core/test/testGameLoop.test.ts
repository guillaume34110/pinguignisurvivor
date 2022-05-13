import {GameData, startData} from "../StartData/StartData"

let newValue: GameData = JSON.parse(JSON.stringify(startData))
// a definir l'init state

const testLoop = () => {
    newValue.hero.spriteBox.x++
}

const xLoop = (x: number) => {
    for (let i = 0; i < x; i++) {
        testLoop()
    }
}

test("5 frames se passent", () => {
    xLoop(5)

    expect(newValue.hero.spriteBox.x).toBe(5)

})
