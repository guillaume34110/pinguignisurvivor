import { MapBlockType } from '../MapBlocks/MapBlock';
import { HitBox } from '../StartData/StartData';
import { MapBlocksBorderSprite } from './MapBlockBorderSprite';

export interface MapBlockBorder {
    spriteBox: HitBox,
    sprite: MapBlocksBorderSprite,
    type: MapBlockType,
    isCorner : boolean,
    position : BorderPositions[],
    layer : number ,
}

export enum BorderPositions { 
     Down = "Down" ,Up = 'Up' , Left = "Left" , Right = "Right"
}