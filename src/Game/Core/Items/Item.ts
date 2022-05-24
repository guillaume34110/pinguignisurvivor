import {DirectionClass, HitBox, SpriteBoxInterface, SpriteBox} from "../StartData/StartData";
import {ItemSprite} from "./ItemSprite";

export interface Item {
    id: number,
    type: string,
    sprite: ItemSprite,
    value: number,
    spriteBox: SpriteBoxInterface,
    hitBox: HitBox,
}

export class ItemClass implements Item {

    constructor(
        public hitBox: HitBox,
        public sprite: ItemSprite,
        public value: number,
    ) {
    }

    public id: number = 0
    public type: string = "type"
    public spriteBox: SpriteBoxInterface = new SpriteBox(
        this.hitBox.x,
        this.hitBox.y,
        this.hitBox.w,
        this.hitBox.h,
        new DirectionClass(0, 0, 0),
        0,
    )

}