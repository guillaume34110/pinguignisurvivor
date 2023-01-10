import * as PIXI from 'pixi.js'
import dirtGroundDown from "../../Assets/mapBlocks/borders/dirt/border_dirt_down_01.png"
import dirtGroundLeft from "../../Assets/mapBlocks/borders/dirt/border_dirt_left_01.png"
import dirtGroundUp from "../../Assets/mapBlocks/borders/dirt/border_dirt_up_01.png"
import dirtGroundRight from "../../Assets/mapBlocks/borders/dirt/border_dirt_right_01.png"
import grassGroundDown from "../../Assets/mapBlocks/borders/grass/border_grass_down_01.png"
import grassGroundLeft from "../../Assets/mapBlocks/borders/grass/border_grass_left_01.png"
import grassGroundUp from "../../Assets/mapBlocks/borders/grass/border_grass_up_01.png"
import grassGroundRight from "../../Assets/mapBlocks/borders/grass/border_grass_right_01.png"
import snowGroundDown from "../../Assets/mapBlocks/borders/snow/border_snow_down_01.png"
import snowGroundLeft from "../../Assets/mapBlocks/borders/snow/border_snow_left_01.png"
import snowGroundUp from "../../Assets/mapBlocks/borders/snow/border_snow_up_01.png"
import snowGroundRight from "../../Assets/mapBlocks/borders/snow/border_snow_right_01.png"
import waterDown from "../../Assets/mapBlocks/borders/water/border_water_down_01_4frames.png"
import waterLeft from "../../Assets/mapBlocks/borders/water/border_water_left_01_4frames.png"
import waterUp from "../../Assets/mapBlocks/borders/water/border_water_up_01_4frames.png"
import waterRight from "../../Assets/mapBlocks/borders/water/border_water_right_01_4frames.png"
import { MapBlocksBorderSprite } from '../../Core/MapBlockBorder/MapBlockBorderSprite'

const dirtGroundDownTexture = PIXI.Texture.from(dirtGroundDown);
const dirtGroundLeftTexture = PIXI.Texture.from(dirtGroundLeft);
const dirtGroundUpTexture = PIXI.Texture.from(dirtGroundUp);
const dirtGroundRightTexture = PIXI.Texture.from(dirtGroundRight);

const grassGroundDownTexture = PIXI.Texture.from(grassGroundDown);
const grassGroundLeftTexture = PIXI.Texture.from(grassGroundLeft);
const grassGroundUpTexture = PIXI.Texture.from(grassGroundUp);
const grassGroundRightTexture = PIXI.Texture.from(grassGroundRight);

const snowGroundDownTexture = PIXI.Texture.from(snowGroundDown);
const snowGroundLeftTexture = PIXI.Texture.from(snowGroundLeft);
const snowGroundUpTexture = PIXI.Texture.from(snowGroundUp);
const snowGroundRightTexture = PIXI.Texture.from(snowGroundRight);

const waterDownTexture = PIXI.Texture.from(waterDown);
const waterLeftTexture = PIXI.Texture.from(waterLeft);
const waterUpTexture = PIXI.Texture.from(waterUp);
const waterRightTexture = PIXI.Texture.from(waterRight);

export const selectTexture = (sprite: MapBlocksBorderSprite): PIXI.Texture => {
    switch (sprite) {
        case MapBlocksBorderSprite.GroundDirtDown: return dirtGroundDownTexture
        case MapBlocksBorderSprite.GroundDirtLeft: return dirtGroundLeftTexture
        case MapBlocksBorderSprite.GroundDirtRight: return dirtGroundRightTexture
        case MapBlocksBorderSprite.GroundDirtUp: return dirtGroundUpTexture
        case MapBlocksBorderSprite.GroundGrassDown: return grassGroundDownTexture
        case MapBlocksBorderSprite.GroundGrassLeft: return grassGroundLeftTexture
        case MapBlocksBorderSprite.GroundGrassRight: return grassGroundRightTexture
        case MapBlocksBorderSprite.GroundGrassUp: return grassGroundUpTexture
        case MapBlocksBorderSprite.GroundSnowDown: return snowGroundDownTexture
        case MapBlocksBorderSprite.GroundSnowLeft: return snowGroundLeftTexture
        case MapBlocksBorderSprite.GroundSnowRight: return snowGroundRightTexture
        case MapBlocksBorderSprite.GroundSnowUp: return snowGroundUpTexture
        case MapBlocksBorderSprite.WaterDown: return waterDownTexture
        case MapBlocksBorderSprite.WaterLeft: return waterLeftTexture
        case MapBlocksBorderSprite.WaterRight: return waterRightTexture
        case MapBlocksBorderSprite.WaterUp: return waterUpTexture
        default: return dirtGroundDownTexture
    }
}