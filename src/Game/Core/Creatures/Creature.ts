import {HitBox, Sensors, SensorsFlag as SensorsFlags, Sprite, SpriteBoxInterface} from "../StartData/StartData";

export interface Creature {
    id: number
    // GRAPHICAL AND POSITION :
    sprite: Sprite,
    spriteBox: SpriteBoxInterface,
    hitBox: HitBox,
    sensors : Sensors
    sensorsFlags : SensorsFlags
    // STATS :
    type: string,
    maxHealth: number,
    health: number,
    damage: number, 
    fertility : number,
    maxFertilityFemale : number,
    maxFertilityMale : number,
    sex : CreatureSex,
    lifeBar : LifeBar,
    hunting : Boolean,
}

export interface LifeBar {
    x : number,
    y : number, 
    h : number, 
    wMax: number, 
    wCurrent : number
}

export enum CreatureSex {
    Male , Female , Herma
}