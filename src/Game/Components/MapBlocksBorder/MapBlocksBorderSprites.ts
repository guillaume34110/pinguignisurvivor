import * as PIXI from 'pixi.js'
import dirtGroundDown from "../../Assets/mapBlocks/borders/dirt/border_dirt_01_down.png"
import dirtGroundLeft from "../../Assets/mapBlocks/borders/dirt/border_dirt_01_left.png"
import dirtGroundUp from "../../Assets/mapBlocks/borders/dirt/border_dirt_01_up.png"
import dirtGroundRight from "../../Assets/mapBlocks/borders/dirt/border_dirt_01_right.png"
import dirtGroundDown02 from "../../Assets/mapBlocks/borders/dirt/border_dirt_02_down.png"
import dirtGroundLeft02 from "../../Assets/mapBlocks/borders/dirt/border_dirt_02_left.png"
import dirtGroundUp02 from "../../Assets/mapBlocks/borders/dirt/border_dirt_02_up.png"
import dirtGroundRight02 from "../../Assets/mapBlocks/borders/dirt/border_dirt_02_right.png"
import dirtGroundDownRight from "../../Assets/mapBlocks/corners/dirt/corner_dirt_down_right_01.png"
import dirtGroundDownLeft from "../../Assets/mapBlocks/corners/dirt/corner_dirt_down_left_01.png"
import dirtGroundUpRight from "../../Assets/mapBlocks/corners/dirt/corner_dirt_up_right_01.png"
import dirtGroundUpLeft from "../../Assets/mapBlocks/corners/dirt/corner_dirt_up_left_01.png"
import grassGroundDown from "../../Assets/mapBlocks/borders/grass/border_grass_01_down.png"
import grassGroundLeft from "../../Assets/mapBlocks/borders/grass/border_grass_01_left.png"
import grassGroundUp from "../../Assets/mapBlocks/borders/grass/border_grass_01_up.png"
import grassGroundRight from "../../Assets/mapBlocks/borders/grass/border_grass_01_right.png"
import grassGroundDown02 from "../../Assets/mapBlocks/borders/grass/border_grass_02_down.png"
import grassGroundLeft02 from "../../Assets/mapBlocks/borders/grass/border_grass_02_left.png"
import grassGroundUp02 from "../../Assets/mapBlocks/borders/grass/border_grass_02_up.png"
import grassGroundRight02 from "../../Assets/mapBlocks/borders/grass/border_grass_02_right.png"
import grassGroundDownRight from "../../Assets/mapBlocks/corners/grass/corner_grass_down_right_01.png"
import grassGroundDownLeft from "../../Assets/mapBlocks/corners/grass/corner_grass_down_left_01.png"
import grassGroundUpRight from "../../Assets/mapBlocks/corners/grass/corner_grass_up_right_01.png"
import grassGroundUpLeft from "../../Assets/mapBlocks/corners/grass/corner_grass_up_left_01.png"
import snowGroundDown from "../../Assets/mapBlocks/borders/snow/border_snow_01_down.png"
import snowGroundLeft from "../../Assets/mapBlocks/borders/snow/border_snow_01_left.png"
import snowGroundUp from "../../Assets/mapBlocks/borders/snow/border_snow_01_up.png"
import snowGroundRight from "../../Assets/mapBlocks/borders/snow/border_snow_01_right.png"
import snowGroundDown02 from "../../Assets/mapBlocks/borders/snow/border_snow_02_down.png"
import snowGroundLeft02 from "../../Assets/mapBlocks/borders/snow/border_snow_02_left.png"
import snowGroundUp02 from "../../Assets/mapBlocks/borders/snow/border_snow_02_up.png"
import snowGroundRight02 from "../../Assets/mapBlocks/borders/snow/border_snow_02_right.png"
import snowGroundDownRight from "../../Assets/mapBlocks/corners/snow/corner_snow_down_right_01.png"
import snowGroundDownLeft from "../../Assets/mapBlocks/corners/snow/corner_snow_down_left_01.png"
import snowGroundUpRight from "../../Assets/mapBlocks/corners/snow/corner_snow_up_right_01.png"
import snowGroundUpLeft from "../../Assets/mapBlocks/corners/snow/corner_snow_up_left_01.png"
import waterDown1 from "../../Assets/mapBlocks/borders/water/border_water_01_down1.png"
import waterDown2 from "../../Assets/mapBlocks/borders/water/border_water_01_down2.png"
import waterDown3 from "../../Assets/mapBlocks/borders/water/border_water_01_down3.png"
import waterDown4 from "../../Assets/mapBlocks/borders/water/border_water_01_down4.png"
import waterLeft1 from "../../Assets/mapBlocks/borders/water/border_water_01_left1.png"
import waterLeft2 from "../../Assets/mapBlocks/borders/water/border_water_01_left2.png"
import waterLeft3 from "../../Assets/mapBlocks/borders/water/border_water_01_left3.png"
import waterLeft4 from "../../Assets/mapBlocks/borders/water/border_water_01_left4.png"
import waterUp1 from "../../Assets/mapBlocks/borders/water/border_water_01_up1.png"
import waterUp2 from "../../Assets/mapBlocks/borders/water/border_water_01_up2.png"
import waterUp3 from "../../Assets/mapBlocks/borders/water/border_water_01_up3.png"
import waterUp4 from "../../Assets/mapBlocks/borders/water/border_water_01_up4.png"
import waterRight1 from "../../Assets/mapBlocks/borders/water/border_water_01_right1.png"
import waterRight2 from "../../Assets/mapBlocks/borders/water/border_water_01_right2.png"
import waterRight3 from "../../Assets/mapBlocks/borders/water/border_water_01_right3.png"
import waterRight4 from "../../Assets/mapBlocks/borders/water/border_water_01_right4.png"
import waterGroundDownRight from "../../Assets/mapBlocks/corners/water/corner_water_down_right_01.png"
import waterGroundDownLeft from "../../Assets/mapBlocks/corners/water/corner_water_down_left_01.png"
import waterGroundUpRight from "../../Assets/mapBlocks/corners/water/corner_water_up_right_01.png"
import waterGroundUpLeft from "../../Assets/mapBlocks/corners/water/corner_water_up_left_01.png"
import { MapBlocksBorderSprite } from '../../Core/MapBlockBorder/MapBlockBorderSprite'
import { frame } from '../Game'

const dirtGroundDownTexture = PIXI.Texture.from(dirtGroundDown);
const dirtGroundLeftTexture = PIXI.Texture.from(dirtGroundLeft);
const dirtGroundUpTexture = PIXI.Texture.from(dirtGroundUp);
const dirtGroundRightTexture = PIXI.Texture.from(dirtGroundRight);

const dirtGroundDownTexture2 = PIXI.Texture.from(dirtGroundDown02);
const dirtGroundLeftTexture2 = PIXI.Texture.from(dirtGroundLeft02);
const dirtGroundUpTexture2 = PIXI.Texture.from(dirtGroundUp02);
const dirtGroundRightTexture2 = PIXI.Texture.from(dirtGroundRight02);

const dirtGroundDownRightTexture = PIXI.Texture.from(dirtGroundDownRight);
const dirtGroundDownLeftTexture = PIXI.Texture.from(dirtGroundDownLeft);
const dirtGroundUpLeftTexture = PIXI.Texture.from(dirtGroundUpLeft);
const dirtGroundUpRightTexture = PIXI.Texture.from(dirtGroundUpRight);

const grassGroundDownTexture = PIXI.Texture.from(grassGroundDown);
const grassGroundLeftTexture = PIXI.Texture.from(grassGroundLeft);
const grassGroundUpTexture = PIXI.Texture.from(grassGroundUp);
const grassGroundRightTexture = PIXI.Texture.from(grassGroundRight);

const grassGroundDownTexture2 = PIXI.Texture.from(grassGroundDown02);
const grassGroundLeftTexture2 = PIXI.Texture.from(grassGroundLeft02);
const grassGroundUpTexture2 = PIXI.Texture.from(grassGroundUp02);
const grassGroundRightTexture2 = PIXI.Texture.from(grassGroundRight02);

const grassGroundDownRightTexture = PIXI.Texture.from(grassGroundDownRight);
const grassGroundDownLeftTexture = PIXI.Texture.from(grassGroundDownLeft);
const grassGroundUpLeftTexture = PIXI.Texture.from(grassGroundUpLeft);
const grassGroundUpRightTexture = PIXI.Texture.from(grassGroundUpRight);

const snowGroundDownTexture = PIXI.Texture.from(snowGroundDown);
const snowGroundLeftTexture = PIXI.Texture.from(snowGroundLeft);
const snowGroundUpTexture = PIXI.Texture.from(snowGroundUp);
const snowGroundRightTexture = PIXI.Texture.from(snowGroundRight);

const snowGroundDownTexture2 = PIXI.Texture.from(snowGroundDown02);
const snowGroundLeftTexture2 = PIXI.Texture.from(snowGroundLeft02);
const snowGroundUpTexture2 = PIXI.Texture.from(snowGroundUp02);
const snowGroundRightTexture2 = PIXI.Texture.from(snowGroundRight02);

const snowGroundDownRightTexture = PIXI.Texture.from(snowGroundDownRight);
const snowGroundDownLeftTexture = PIXI.Texture.from(snowGroundDownLeft);
const snowGroundUpLeftTexture = PIXI.Texture.from(snowGroundUpLeft);
const snowGroundUpRightTexture = PIXI.Texture.from(snowGroundUpRight);

const waterDown1Texture = PIXI.Texture.from(waterDown1);
const waterDown2Texture = PIXI.Texture.from(waterDown2);
const waterDown3Texture = PIXI.Texture.from(waterDown3);
const waterDown4Texture = PIXI.Texture.from(waterDown4);
const waterLeft1Texture = PIXI.Texture.from(waterLeft1);
const waterLeft2Texture = PIXI.Texture.from(waterLeft2);
const waterLeft3Texture = PIXI.Texture.from(waterLeft3);
const waterLeft4Texture = PIXI.Texture.from(waterLeft4);
const waterUp1Texture = PIXI.Texture.from(waterUp1);
const waterUp2Texture = PIXI.Texture.from(waterUp2);
const waterUp3Texture = PIXI.Texture.from(waterUp3);
const waterUp4Texture = PIXI.Texture.from(waterUp4);
const waterRight1Texture = PIXI.Texture.from(waterRight1);
const waterRight2Texture = PIXI.Texture.from(waterRight2);
const waterRight3Texture = PIXI.Texture.from(waterRight3);
const waterRight4Texture = PIXI.Texture.from(waterRight4);

const waterGroundDownRightTexture = PIXI.Texture.from(waterGroundDownRight);
const waterGroundDownLeftTexture = PIXI.Texture.from(waterGroundDownLeft);
const waterGroundUpLeftTexture = PIXI.Texture.from(waterGroundUpLeft);
const waterGroundUpRightTexture = PIXI.Texture.from(waterGroundUpRight);

export const selectTexture = (sprite: MapBlocksBorderSprite): PIXI.Texture => {
    switch (sprite) {
        case MapBlocksBorderSprite.GroundDirtDown: return dirtGroundDownTexture
        case MapBlocksBorderSprite.GroundDirtLeft: return dirtGroundLeftTexture
        case MapBlocksBorderSprite.GroundDirtRight: return dirtGroundRightTexture
        case MapBlocksBorderSprite.GroundDirtUp: return dirtGroundUpTexture
        case MapBlocksBorderSprite.GroundDirtDown2: return dirtGroundDownTexture2
        case MapBlocksBorderSprite.GroundDirtLeft2: return dirtGroundLeftTexture2
        case MapBlocksBorderSprite.GroundDirtRight2: return dirtGroundRightTexture2
        case MapBlocksBorderSprite.GroundDirtUp2: return dirtGroundUpTexture2
        case MapBlocksBorderSprite.GroundDirtDownLeft : return dirtGroundDownLeftTexture
        case MapBlocksBorderSprite.GroundDirtDownRight : return dirtGroundDownRightTexture
        case MapBlocksBorderSprite.GroundDirtUpLeft : return dirtGroundUpLeftTexture
        case MapBlocksBorderSprite.GroundDirtUpRight : return dirtGroundUpRightTexture
  

        case MapBlocksBorderSprite.GroundGrassDown: return grassGroundDownTexture
        case MapBlocksBorderSprite.GroundGrassLeft: return grassGroundLeftTexture
        case MapBlocksBorderSprite.GroundGrassRight: return grassGroundRightTexture
        case MapBlocksBorderSprite.GroundGrassUp: return grassGroundUpTexture
        case MapBlocksBorderSprite.GroundGrassDown2: return grassGroundDownTexture2
        case MapBlocksBorderSprite.GroundGrassLeft2: return grassGroundLeftTexture2
        case MapBlocksBorderSprite.GroundGrassRight2: return grassGroundRightTexture2
        case MapBlocksBorderSprite.GroundGrassUp2: return grassGroundUpTexture2
        case MapBlocksBorderSprite.GroundGrassDownLeft : return grassGroundDownLeftTexture
        case MapBlocksBorderSprite.GroundGrassDownRight : return grassGroundDownRightTexture
        case MapBlocksBorderSprite.GroundGrassUpLeft : return grassGroundUpLeftTexture
        case MapBlocksBorderSprite.GroundGrassUpRight : return grassGroundUpRightTexture

        case MapBlocksBorderSprite.GroundSnowDown: return snowGroundDownTexture
        case MapBlocksBorderSprite.GroundSnowLeft: return snowGroundLeftTexture
        case MapBlocksBorderSprite.GroundSnowRight: return snowGroundRightTexture
        case MapBlocksBorderSprite.GroundSnowUp: return snowGroundUpTexture
        case MapBlocksBorderSprite.GroundSnowDown2: return snowGroundDownTexture2
        case MapBlocksBorderSprite.GroundSnowLeft2: return snowGroundLeftTexture2
        case MapBlocksBorderSprite.GroundSnowRight2: return snowGroundRightTexture2
        case MapBlocksBorderSprite.GroundSnowUp2: return snowGroundUpTexture2
        case MapBlocksBorderSprite.GroundSnowDownLeft : return snowGroundDownLeftTexture
        case MapBlocksBorderSprite.GroundSnowDownRight : return snowGroundDownRightTexture
        case MapBlocksBorderSprite.GroundSnowUpLeft : return snowGroundUpLeftTexture
        case MapBlocksBorderSprite.GroundSnowUpRight : return snowGroundUpRightTexture
       
        /*animated waterFall*/

        case MapBlocksBorderSprite.WaterDown: 
            if (frame <= 15) return waterDown1Texture
            else if (frame <= 30) return waterDown2Texture
            else if (frame <= 45) return waterDown3Texture
            else return waterDown4Texture

        case MapBlocksBorderSprite.WaterLeft: 
        if (frame <= 15) return waterLeft1Texture
        else if (frame <= 30) return waterLeft2Texture
        else if (frame <= 45) return waterLeft3Texture
        else return waterLeft4Texture

        case MapBlocksBorderSprite.WaterRight:
            if (frame <= 15) return waterRight1Texture
        else if (frame <= 30) return waterRight2Texture
        else if (frame <= 45) return waterRight3Texture
        else return waterRight4Texture

        case MapBlocksBorderSprite.WaterUp: 
        if (frame <= 15) return waterUp1Texture
        else if (frame <= 30) return waterUp2Texture
        else if (frame <= 45) return waterUp3Texture
        else return waterUp4Texture

        case MapBlocksBorderSprite.WaterDownLeft : return waterGroundDownLeftTexture
        case MapBlocksBorderSprite.WaterDownRight : return waterGroundDownRightTexture
        case MapBlocksBorderSprite.WaterUpLeft : return waterGroundUpLeftTexture
        case MapBlocksBorderSprite.WaterUpRight : return waterGroundUpRightTexture

        default: return dirtGroundDownTexture
    }
}