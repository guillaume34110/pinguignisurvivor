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
}

export enum ItemType { 
    foodVegetable , Solid
}