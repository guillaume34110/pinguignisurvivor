import * as PIXI from 'pixi.js'
import dirtGroundDown from "../../Assets/mapBlocks/borders/dirt/border_dirt_01_down.png"
import dirtGroundLeft from "../../Assets/mapBlocks/borders/dirt/border_dirt_01_left.png"
import dirtGroundUp from "../../Assets/mapBlocks/borders/dirt/border_dirt_01_up.png"
import dirtGroundRight from "../../Assets/mapBlocks/borders/dirt/border_dirt_01_right.png"
import dirtGroundDown02 from "../../Assets/mapBlocks/borders/dirt/border_dirt_02_down.png"
import dirtGroundLeft02 from "../../Assets/mapBlocks/borders/dirt/border_dirt_02_left.png"
import dirtGroundUp02 from "../../Assets/mapBlocks/borders/dirt/border_dirt_02_up.png"
import dirtGroundRight02 from "../../Assets/mapBlocks/borders/dirt/border_dirt_02_right.png"
import grassGroundDown from "../../Assets/mapBlocks/borders/grass/border_grass_01_down.png"
import grassGroundLeft from "../../Assets/mapBlocks/borders/grass/border_grass_01_left.png"
import grassGroundUp from "../../Assets/mapBlocks/borders/grass/border_grass_01_up.png"
import grassGroundRight from "../../Assets/mapBlocks/borders/grass/border_grass_01_right.png"
import grassGroundDown02 from "../../Assets/mapBlocks/borders/grass/border_grass_02_down.png"
import grassGroundLeft02 from "../../Assets/mapBlocks/borders/grass/border_grass_02_left.png"
import grassGroundUp02 from "../../Assets/mapBlocks/borders/grass/border_grass_02_up.png"
import grassGroundRight02 from "../../Assets/mapBlocks/borders/grass/border_grass_02_right.png"
import snowGroundDown from "../../Assets/mapBlocks/borders/snow/border_snow_01_down.png"
import snowGroundLeft from "../../Assets/mapBlocks/borders/snow/border_snow_01_left.png"
import snowGroundUp from "../../Assets/mapBlocks/borders/snow/border_snow_01_up.png"
import snowGroundRight from "../../Assets/mapBlocks/borders/snow/border_snow_01_right.png"
import snowGroundDown02 from "../../Assets/mapBlocks/borders/snow/border_snow_02_down.png"
import snowGroundLeft02 from "../../Assets/mapBlocks/borders/snow/border_snow_02_left.png"
import snowGroundUp02 from "../../Assets/mapBlocks/borders/snow/border_snow_02_up.png"
import snowGroundRight02 from "../../Assets/mapBlocks/borders/snow/border_snow_02_right.png"
import waterDown from "../../Assets/mapBlocks/borders/water/border_water_01_down_4frames.png"
import waterLeft from "../../Assets/mapBlocks/borders/water/border_water_01_left_4frames.png"
import waterUp from "../../Assets/mapBlocks/borders/water/border_water_01_up_4frames.png"
import waterRight from "../../Assets/mapBlocks/borders/water/border_water_01_right_4frames.png"
import { MapBlocksBorderSprite } from '../../Core/MapBlockBorder/MapBlockBorderSprite'

const dirtGroundDownTexture = PIXI.Texture.from(dirtGroundDown);
const dirtGroundLeftTexture = PIXI.Texture.from(dirtGroundLeft);
const dirtGroundUpTexture = PIXI.Texture.from(dirtGroundUp);
const dirtGroundRightTexture = PIXI.Texture.from(dirtGroundRight);

const dirtGroundDownTexture02 = PIXI.Texture.from(dirtGroundDown02);
const dirtGroundLeftTexture02 = PIXI.Texture.from(dirtGroundLeft02);
const dirtGroundUpTexture02 = PIXI.Texture.from(dirtGroundUp02);
const dirtGroundRightTexture02 = PIXI.Texture.from(dirtGroundRight02);

const grassGroundDownTexture = PIXI.Texture.from(grassGroundDown);
const grassGroundLeftTexture = PIXI.Texture.from(grassGroundLeft);
const grassGroundUpTexture = PIXI.Texture.from(grassGroundUp);
const grassGroundRightTexture = PIXI.Texture.from(grassGroundRight);

const grassGroundDownTexture02 = PIXI.Texture.from(grassGroundDown02);
const grassGroundLeftTexture02 = PIXI.Texture.from(grassGroundLeft02);
const grassGroundUpTexture02 = PIXI.Texture.from(grassGroundUp02);
const grassGroundRightTexture02 = PIXI.Texture.from(grassGroundRight02);

const snowGroundDownTexture = PIXI.Texture.from(snowGroundDown);
const snowGroundLeftTexture = PIXI.Texture.from(snowGroundLeft);
const snowGroundUpTexture = PIXI.Texture.from(snowGroundUp);
const snowGroundRightTexture = PIXI.Texture.from(snowGroundRight);

const snowGroundDownTexture02 = PIXI.Texture.from(snowGroundDown02);
const snowGroundLeftTexture02 = PIXI.Texture.from(snowGroundLeft02);
const snowGroundUpTexture02 = PIXI.Texture.from(snowGroundUp02);
const snowGroundRightTexture02 = PIXI.Texture.from(snowGroundRight02);

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