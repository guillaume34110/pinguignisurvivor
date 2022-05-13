import {SpriteBox} from "../StartData/StartData.js";

export interface Item {
    type: "string",
    sprite: "string",
    value: number,
    spriteBox: SpriteBox,
}