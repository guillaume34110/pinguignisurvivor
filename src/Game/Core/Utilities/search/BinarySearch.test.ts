import { binarySearch } from './BinarySearch';


const given = describe
const when = describe
const then = it


given('binary search function', () => {
 when('i use binary search', () => {
        then('good sorting', () => {
            expect(binarySearch([[12, 0], [16, 1], [36, 2], [56, 3], [72, 4], [225, 5]], 0, 40)).toStrictEqual([ [12, 0], [16, 1],[36, 2]])
        })
    })

    when('i use binary search', () => {
        then('good sorting', () => {
            expect(binarySearch([[120, 0], [160, 1], [360, 2], [560, 3], [720, 4], [2250, 5]], 360, 2000)).toStrictEqual([ [360, 2], [560, 3], [720, 4]])
        })
    })
  
})