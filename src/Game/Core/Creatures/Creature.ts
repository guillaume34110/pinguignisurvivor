import {  Item, ItemType } from '../Items/Item';
import { MapBlock, MapBlockType } from '../MapBlocks/MapBlock';
import {HitBox, Sensors, SensorsFlag as SensorsFlags, Sprite, SpriteBoxInterface} from "../StartData/StartData";
import { MapBlocks } from '../MapBlocks/MapBlocks';

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
    maxLifeTime: number,
    lifeTime: number,
    lifePoint : number, 
    lifePointMax : number,
    creatureWhoAttack : [],
    damage: number, 
    fertility : number,
    maxFertilityFemale : number,
    maxFertilityMale : number,
    sex : CreatureSex,
    hunting : Boolean,
    coordinate : number,
    weight : number,
    maxWeight : number,
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
    unLikedMapBlock : MapBlockType[],
    memory : Memory , 
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


export interface Memory{
    mapBlocksOrdered : (MapBlock|null)[]
    itemsPositions : ItemPositions[]
    creaturesPositions : CreaturePositions[] 
    housePosition : {x: number, y: number}
    family : Creature[]
    detectedItems : Item[],
    detectedCreatures : Creature[]
    detectedMapBlocks : MapBlock[]
}

export interface ItemPositions {
    itemType : ItemType ,
    coordinates  : number[]
}

export interface CreaturePositions {
    creatureType : CreatureType ,
    coordinates : number[]
}
