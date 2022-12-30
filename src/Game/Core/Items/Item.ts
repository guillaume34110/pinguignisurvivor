import {DirectionClass, HitBox, SpriteBoxInterface, SpriteBox, GameData} from "../StartData/StartData";
import {ItemSprite} from "./ItemSprite";
import { rock } from "./ItemsTypes/Rock";
import { seeds } from "./ItemsTypes/Seeds";

export enum ItemType { 
    FoodVegetable = "FoodVegetable" , Solid = "Solid"
}
export enum ItemName { 
    Seeds = "Seeds" , Rock = "Rock"
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
    unMovable : boolean
}

