import {SpriteBox} from "../StartData/StartData";

export interface Item {
    type: "string",
    sprite: "string",
    value: number,
    spriteBox: SpriteBox,
}