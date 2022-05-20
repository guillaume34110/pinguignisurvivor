import {HitBox, SpriteBox} from "../StartData/StartData";
import {ItemSprite} from "./ItemSprite";

export interface Item {
    id: number,
    type: "string",
    sprite: ItemSprite,
    value: number,
    spriteBox: SpriteBox,
    hitBox : HitBox,
}