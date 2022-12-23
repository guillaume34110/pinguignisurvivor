import {DirectionClass, HitBox, SpriteBoxInterface, SpriteBox, GameData} from "../StartData/StartData";
import {ItemSprite} from "./ItemSprite";

export interface Item {
    id: number,
    type: ItemType,
    sprite: ItemSprite,
    value: number,
    spriteBox: SpriteBoxInterface,
    hitBox: HitBox,
    isTaken : Boolean,
    coordinate : number,
    unMovable : boolean
}

export enum ItemType { 
    foodVegetable , Solid
}