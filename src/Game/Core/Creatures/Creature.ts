import {HitBox, Sensors, Sprite, SpriteBoxInterface} from "../StartData/StartData";

export interface Creature {
    id: number
    // GRAPHICAL AND POSITION :
    sprite: Sprite,
    spriteBox: SpriteBoxInterface,
    hitBox: HitBox,
    sensors : Sensors
    // STATS :
    type: string,
    maxHealth: number,
    health: number,
    damage: number, 
    fertility : number,
}



