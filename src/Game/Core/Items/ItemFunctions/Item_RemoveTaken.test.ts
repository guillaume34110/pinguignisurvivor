import { testingItemsSimpleEnvironement } from "../../test/testingEnvironement"
import { Item } from "../Item";
import { item_RemoveTaken } from './Item_RemoveTaken';

const {given,when,then , items} = testingItemsSimpleEnvironement()

given('an array with 4 items', () => {

    when('an item is taken  ', () => {
        then('the item is removed from array', () => {
        const testItems : Item[] = JSON.parse(JSON.stringify(items))
        testItems[0].isTaken = true
        expect(testItems.length).toBe(4)
        item_RemoveTaken(testItems)
        console.log('testItem',testItems)
        expect(testItems.length).toBe(3)})
    })
})