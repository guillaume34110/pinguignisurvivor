
import {  testingItemsSimpleEnvironement } from "../../test/testingEnvironement"
import { Item } from "../Item"
import { item_life } from "./Item_life"

const {given,when,then ,  items} = testingItemsSimpleEnvironement()

given('an array with 4 items', () => {

    when('all creature are alive  ', () => {
        then('all creatures lose one lifeTime damage', () => {
        const testItems : Item[] = JSON.parse(JSON.stringify(items))
        testItems[0].life = 100
        item_life(testItems)
        expect(testItems[0].life).toBe(99)})
    })

    when('all creature are alive  ', () => {
        then('all creatures lose one lifeTime damage', () => {
        const testItems : Item[] = JSON.parse(JSON.stringify(items))
        testItems[0].life = 1
        item_life(testItems)
        expect(testItems[0].life).toBe(0)     
        expect(testItems[0].isTaken).toBe(true)})
    })

})