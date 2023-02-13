import { Creature, CreatureType } from "../Creatures/Creature";
import { MapBlockType } from "../MapBlocks/MapBlock";
import {DirectionClass, HitBox, SpriteBoxInterface, SpriteBox, GameData} from "../StartData/StartData";
import {ItemSprite} from "./ItemSprite";
import { rock } from "./ItemsTypes/Rock";

export enum ItemType { 
    Seeds = "Seeds" , Rock = "Rock" , SeedsTree ="SeedsTree" , BasicGrass = "BasicGrass"
}

export interface Item {
    id: number,
    type: ItemType,
    sprite: ItemSprite,
    valueAsFood: number,
    spriteBox: SpriteBoxInterface,
    hitBox: HitBox,
    isTaken : Boolean,
    coordinate : number,
    unMovable : boolean,
    price : number,
    gestation : number,
    gestationMax :number,
    mapBlockToDrop :MapBlockType[],
    babyType : BabyType,
    baby : CreatureType | ItemType |null,
    solid : boolean, 
    dieWhenMakeABaby : Boolean,
    life : number,
    babyProbability : number ,  
}

export enum BabyType {
Item = "Item" , Creature = "Creature"  , None = "None"
}