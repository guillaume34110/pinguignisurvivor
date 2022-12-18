import seedsPng from "../../Assets/items/seeds.png"
import rockPng from "../../Assets/items/rock.png"
import {ItemSprite} from "../../Core/Items/ItemSprite";


const image = new Image()

const seeds = new Image()
seeds.src = seedsPng

const rock = new Image()
rock.src = rockPng

export const selectImg = (sprite:ItemSprite): HTMLImageElement => {
    if (sprite === ItemSprite.Seeds ) return seeds
    if (sprite === ItemSprite.Rock) return rock
    else return image
}