import { MapBlocksSprite } from "../../Core/MapBlocks/MapBlocksSprite"
import dirt_ground from "../../Assets/mapBlocks/dirt_ground.png"
import grass_ground from "../../Assets/mapBlocks/grass_ground.png"
import snow_ground from "../../Assets/mapBlocks/snow_ground.png"
import space_border1 from "../../Assets/mapBlocks/space_border4frames1.png"
import space_border2 from "../../Assets/mapBlocks/space_border4frames2.png"
import space_border3 from "../../Assets/mapBlocks/space_border4frames3.png"
import space_border4 from "../../Assets/mapBlocks/space_border4frames4.png"
import water_4frames1 from "../../Assets/mapBlocks/Sprite-water-4frames1.png"
import water_4frames2 from "../../Assets/mapBlocks/Sprite-water-4frames2.png"
import water_4frames3 from "../../Assets/mapBlocks/Sprite-water-4frames3.png"
import water_4frames4 from "../../Assets/mapBlocks/Sprite-water-4frames4.png"
import * as PIXI from 'pixi.js'
import { frame } from "../Game"

const dirtGroundTexture = PIXI.Texture.from(dirt_ground);
const grassGroundTexture = PIXI.Texture.from(grass_ground);
const snowGroundTexture = PIXI.Texture.from(snow_ground);
const spaceBorderTexture1 = PIXI.Texture.from(space_border1);
const spaceBorderTexture2 = PIXI.Texture.from(space_border2);
const spaceBorderTexture3 = PIXI.Texture.from(space_border3);
const spaceBorderTexture4 = PIXI.Texture.from(space_border4);

const waterTexture1 = PIXI.Texture.from(water_4frames1);
const waterTexture2 = PIXI.Texture.from(water_4frames2);
const waterTexture3 = PIXI.Texture.from(water_4frames3);
const waterTexture4 = PIXI.Texture.from(water_4frames4);

export const selectTexture = (sprite: MapBlocksSprite): PIXI.Texture => {
    switch (sprite) {
        case MapBlocksSprite.ground_dirt: return dirtGroundTexture
        case MapBlocksSprite.ground_grass: return grassGroundTexture
        case MapBlocksSprite.ground_snow: return snowGroundTexture
       
        case MapBlocksSprite.border_space: 
        if (frame <= 15) return spaceBorderTexture1
        else if (frame <= 30) return spaceBorderTexture2
        else if (frame <= 45) return spaceBorderTexture3
        else return spaceBorderTexture4

        case MapBlocksSprite.ground_water:
            if (frame <= 15) return waterTexture1
            else if (frame <= 30) return waterTexture2
            else if (frame <= 45) return waterTexture3
            else return waterTexture4

        default: return dirtGroundTexture
    }
}