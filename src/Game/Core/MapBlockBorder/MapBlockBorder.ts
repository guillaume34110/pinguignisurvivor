import { MapBlockType } from '../MapBlocks/MapBlock';
import { HitBox } from '../StartData/StartData';
import { MapBlocksBorderSprite } from './MapBlockBorderSprite';

export interface MapBlockBorder {
    spriteBox: HitBox,
    sprite: MapBlocksBorderSprite,
    type: MapBlockType,
    isAnimated: boolean,
}