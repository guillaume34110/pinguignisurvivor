import seedsPng from "../../Assets/items/seeds.png"
import {ItemSprite} from "../../Core/Items/ItemSprite";


const image = new Image()

const seeds = new Image()
seeds.src = seedsPng


export const selectImg = (sprite:ItemSprite): HTMLImageElement => {
    if (sprite === ItemSprite.seeds ) return seeds
    else return image
}