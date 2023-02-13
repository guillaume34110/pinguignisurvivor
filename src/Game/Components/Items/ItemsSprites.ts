import seedsPng from "../../Assets/items/seeds.png"
import rockPng from "../../Assets/items/rock.png"
import  seedsTreePng  from "../../Assets/items/seedsTree.png";
import basicGrass from "../../Assets/items/grass.png"
import {ItemSprite} from "../../Core/Items/ItemSprite";

import * as PIXI from 'pixi.js'



//pixi

const seedsPixi = PIXI.Texture.from(seedsPng)
const rockPixi = PIXI.Texture.from(rockPng)
const seedsTreePixi = PIXI.Texture.from(seedsTreePng)
const basicGrassPixi = PIXI.Texture.from(basicGrass)

export const selectImgPixi = (sprite:ItemSprite): PIXI.Texture => {
    switch(sprite) {
        case ItemSprite.Seeds : return seedsPixi
        case ItemSprite.Rock : return rockPixi
        case ItemSprite.SeedsTree : return seedsTreePixi
        case ItemSprite.BasicGrass : return basicGrassPixi
        default : return PIXI.Texture.WHITE
    }
}

