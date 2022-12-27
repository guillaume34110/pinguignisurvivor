import { MapBlocksSprite } from "../../Core/MapBlocks/MapBlocksSprite"
import dirt_ground from "../../Assets/mapBlocks/dirt_ground.png"
import grass_ground from "../../Assets/mapBlocks/grass_ground.png"
import snow_ground from "../../Assets/mapBlocks/snow_ground.png"
import space_border from "../../Assets/mapBlocks/space_border.png"
import * as PIXI from 'pixi.js'

const dirt_groundImage = new Image()
dirt_groundImage.src = dirt_ground

const grass_groundImage = new Image()
grass_groundImage.src = grass_ground

const snow_groundImage = new Image()
snow_groundImage.src = snow_ground

const space_borderImage = new Image()
space_borderImage.src = space_border

export const selectImg = (sprite: MapBlocksSprite ): HTMLImageElement => {
    if (sprite === MapBlocksSprite.ground_dirt) return dirt_groundImage
    else if (sprite ===  MapBlocksSprite.ground_grass) return grass_groundImage
    else if (sprite === MapBlocksSprite.ground_snow) return snow_groundImage
    else if (sprite === MapBlocksSprite.border_space) return space_borderImage
    else return dirt_groundImage
}

// pixi
const dirt_groundTexture = PIXI.Texture.from(dirt_ground);
const grass_groundTexture = PIXI.Texture.from(grass_ground);
const snow_groundTexture = PIXI.Texture.from(snow_ground);
const space_borderTexture = PIXI.Texture.from(space_border);

export const selectTexture = (sprite: MapBlocksSprite ): PIXI.Texture => {
    if (sprite === MapBlocksSprite.ground_dirt) return dirt_groundTexture
    else if (sprite ===  MapBlocksSprite.ground_grass) return grass_groundTexture
    else if (sprite === MapBlocksSprite.ground_snow) return snow_groundTexture
    else if (sprite === MapBlocksSprite.border_space) return space_borderTexture
    else return dirt_groundTexture
}