import {HitBox, Sprite, SpriteBoxInterface} from "../StartData/StartData";
import {EnemiesSprite} from "./EnemiesSprite";

export interface Enemy {
    id: number
    // GRAPHICAL AND POSITION :
    sprite: Sprite,
    spriteBox: SpriteBoxInterface,
    hitBox: HitBox,

    // STATS :
    type: string,
    maxHealth: number,
    health: number,
    damage: number,
}



