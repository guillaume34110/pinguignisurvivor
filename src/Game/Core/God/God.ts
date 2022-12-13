
import {HitBox, Sprite, SpriteBox, SpriteBoxInterface} from "../StartData/StartData";

export interface God {
    spriteBox: SpriteBox,
    // EXPERIENCE :
    xpActual: number,
    xpToReach: number,
    xpTotal:number
    level: number,

}
