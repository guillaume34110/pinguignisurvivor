import { Creature } from "../Creatures/Creature";
import { MapBlockType } from "../MapBlocks/MapBlock";
import {DirectionClass, HitBox, SpriteBoxInterface, SpriteBox, GameData} from "../StartData/StartData";
import {ItemSprite} from "./ItemSprite";
import { rock } from "./ItemsTypes/Rock";

export enum ItemType { 
    Seeds = "Seeds" , Rock = "Rock" , SeedsTree ="SeedsTree"
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
    baby : Creature | Item |null,
    solid : boolean, 
    dieWhenMakeABaby : Boolean
}

export enum BabyType {
Item = "Item" , Creature = "Creature"  , None = "None"
}