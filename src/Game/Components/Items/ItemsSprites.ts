import seedsPng from "../../Assets/items/seeds.png"
import rockPng from "../../Assets/items/rock.png"
import {ItemSprite} from "../../Core/Items/ItemSprite";

import * as PIXI from 'pixi.js'

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

//pixi

const seedsPixi = PIXI.Texture.from(seedsPng)
const rockPixi = PIXI.Texture.from(rockPng)

export const selectImgPixi = (sprite:ItemSprite): PIXI.Texture => {
    if (sprite === ItemSprite.Seeds ) return seedsPixi
    if (sprite === ItemSprite.Rock) return rockPixi
    else return PIXI.Texture.WHITE
}

