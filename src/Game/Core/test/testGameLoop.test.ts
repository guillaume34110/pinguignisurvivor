import {GameData, startData} from "../StartData/StartData"

let newValue: GameData = JSON.parse(JSON.stringify(startData))
// a definir l'init state

const testLoop = () => {
    newValue.god.spriteBox.x++
}

const xLoop = (x: number) => {
    for (let i = 0; i < x; i++) {
        testLoop()
    }
}

test("5 frames se passent", () => {
    xLoop(4)

    expect(newValue.god.spriteBox.x).toBe(5)

})
