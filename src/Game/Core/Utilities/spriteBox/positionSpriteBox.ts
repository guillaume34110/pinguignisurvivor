import {SpriteAndHitBox, SpriteBoxInterface} from "../../StartData/StartData";

export const getCenterSpriteBox = (spriteBox:SpriteBoxInterface):{ x: number, y: number } => {
    return {
        x: spriteBox.x + spriteBox.w / 2,
        y: spriteBox.y + spriteBox.h / 2,
    }
}

export const setPositionSpriteBoxHitBox = (reference:SpriteAndHitBox, x:number, y:number) => {
    reference.spriteBox.x = x
    reference.spriteBox.y = y
    reference.hitBox.x = x
    reference.hitBox.y = y
}