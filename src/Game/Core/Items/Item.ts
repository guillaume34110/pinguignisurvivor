import {SpriteBox} from "../StartData/StartData";

export interface Item {
    id: number,
    type: "string",
    sprite: "string",
    value: number,
    spriteBox: SpriteBox,
}