import { animation4Frames, animation4FramesOLD } from "./Game"

const given = describe
const when = describe
const then = it



given('bench test rad', () => {

    when('a spriteBox on the map', () => {
        then('should be 1020', () => {
            const t0 = performance.now()
            for (let i = 0 ; i< 100000 ; i++)animation4Frames(30)
            const t1 = performance.now()
            console.log(`Time it takes to run the new animation 4 frames: ${t1 - t0} ms`)
            expect(1).toBe(1)
        })
    })
    when('a spriteBox on the map', () => {
        then('should be 1020', () => {
            const t0 = performance.now()
            for (let i = 0 ; i< 100000 ; i++)animation4FramesOLD(30)
            const t1 = performance.now()
            console.log(`Time it takes to run the old animation 4 frames: ${t1 - t0} ms`)
            expect(1).toBe(1)
        })
    })
})