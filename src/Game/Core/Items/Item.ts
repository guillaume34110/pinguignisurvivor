import {DirectionClass, HitBoxClass, SpriteBox, SpriteBoxClass} from "../StartData/StartData";
import {ItemSprite} from "./ItemSprite";

export interface Item {
    id: number,
    type: string,
    sprite: ItemSprite,
    value: number,
    spriteBox: SpriteBox,
    hitBox: HitBoxClass,
}

export class ItemClass implements Item {

    constructor(
        public hitBox: HitBoxClass,
        public sprite: ItemSprite,
        public value: number,
    ) {
    }

    public id: number = 0
    public type: string = "type"
    public spriteBox: SpriteBox = new SpriteBoxClass(
        this.hitBox.x,
        this.hitBox.y,
        this.hitBox.w,
        this.hitBox.h,
        new DirectionClass(0, 0, 0),
        0,
    )

    sleepPosition() {
        this.spriteBox.x = -999_999
        this.spriteBox.y = -999_999
        this.hitBox.x = -999_999
        this.hitBox.y = -999_999
    }

}