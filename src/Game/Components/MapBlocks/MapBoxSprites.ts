import { MapBlocksSprite } from "../../Core/MapBlocks/MapBlocksSprite"
import dirt_ground from "../../Assets/mapBlocks/dirt_ground.png"
import grass_ground from "../../Assets/mapBlocks/grass_ground.png"
import snow_ground from "../../Assets/mapBlocks/snow_ground.png"
import space_border from "../../Assets/mapBlocks/space_border.png"
import * as PIXI from 'pixi.js'

const dirt_groundTexture = PIXI.Texture.from(dirt_ground);
const grass_groundTexture = PIXI.Texture.from(grass_ground);
const snow_groundTexture = PIXI.Texture.from(snow_ground);
const space_borderTexture = PIXI.Texture.from(space_border);

export const selectTexture = (sprite: MapBlocksSprite): PIXI.Texture => {
    switch (sprite) {
        case MapBlocksSprite.ground_dirt: return dirt_groundTexture
        case MapBlocksSprite.ground_grass:return grass_groundTexture
        case MapBlocksSprite.ground_snow: return snow_groundTexture
        case MapBlocksSprite.border_space: return space_borderTexture
        default: return dirt_groundTexture
    }
}