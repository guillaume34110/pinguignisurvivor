
import { Item } from "../Item"

export const item_RemoveTaken = (items: Item[]) => { 

    console.log('testItem1',items)
    items = items.filter(item => !item.isTaken)
    console.log('testItem2',items)
}