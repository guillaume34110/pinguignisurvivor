
import { Item } from '../Item';
export const item_life = (items: Item[]) => {
    items.forEach(item => {
        item.life -= 1
        if (item.life <= 0) item.isTaken = true
    })
}