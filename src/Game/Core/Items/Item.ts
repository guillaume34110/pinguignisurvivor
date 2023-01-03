import { Creature } from "../Creatures/Creature";
import { MapBlockType } from "../MapBlocks/MapBlock";
import {DirectionClass, HitBox, SpriteBoxInterface, SpriteBox, GameData} from "../StartData/StartData";
import {ItemSprite} from "./ItemSprite";
import { rock } from "./ItemsTypes/Rock";
import { seeds } from "./ItemsTypes/Seeds";

export enum ItemType { 
    FoodVegetable = "FoodVegetable" , Rock = "Rock" , Tree = "Three"
}
export enum ItemName { 
    Seeds = "Seeds" , Rock = "Rock" , SeedsTree ="SeedsThree"
}
export interface Item {
    id: number,
    type: ItemType,
    name : ItemName,
    sprite: ItemSprite,
    value: number,
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
}

export enum BabyType {
Item = "Item" , Creature = "Creature"  , None = "None"
}