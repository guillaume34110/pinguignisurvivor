import {  ItemType } from '../Items/Item';
import { MapBlockType } from '../MapBlocks/MapBlock';
import {HitBox, Sensors, SensorsFlag as SensorsFlags, Sprite, SpriteBoxInterface} from "../StartData/StartData";

export interface Creature {
    id: number
    name : string 
    // GRAPHICAL AND POSITION :
    sprite: Sprite,
    spriteBox: SpriteBoxInterface,
    hitBox: HitBox,
    sensors : Sensors
    sensorsFlags : SensorsFlags
    // STATS :
    type: CreatureType,
    maxHealth: number,
    health: number,
    damage: number, 
    fertility : number,
    maxFertilityFemale : number,
    maxFertilityMale : number,
    sex : CreatureSex,
    hunting : Boolean,
    coordinate : number,
    weight : number,
    price : number,
    sellPrice : number,
    valueAsFood : number, 
    typeFoodToEat : (CreatureType|ItemType) [],
    huntingInhibitor  : number,
    gestation : boolean, 
    gestationTime : number, 
    gestationMaxTime : number,
    hunger : number ,
    hungerMax : number ,
    mapBlockToDrop :MapBlockType[],
    unLikedMapBlock : MapBlockType[]
}

export interface LifeBar {
    x : number,
    y : number, 
    h : number, 
    wMax: number, 
    wCurrent : number
}

export enum CreatureSex {
    Male , Female , Herma , Sterile
}

export enum CreatureType { 
    Mouse = "Mouse", Rabbit = "Rabbit",Worms = "Worms"
}


