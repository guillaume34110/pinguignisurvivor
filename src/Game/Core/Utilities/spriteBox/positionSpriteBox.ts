import {SpriteAndHitBox, SpriteBoxInterface} from "../../StartData/StartData";

export const getCenterSpriteBox = (spriteBox:SpriteBoxInterface):{ x: number, y: number } => {
    return {
        x: spriteBox.x + spriteBox.w / 2,
        y: spriteBox.y + spriteBox.h / 2,
    }
}
