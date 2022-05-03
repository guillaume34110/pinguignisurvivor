import { SpriteBox } from "../StartData/StartData"

export const hitBoxMatch = (sprite1: SpriteBox, sprite2: SpriteBox) => {

    if (sprite1.x < sprite2.x + sprite2.w 
        && sprite1.x + sprite1.w > sprite2.x 
        && sprite1.y < sprite2.y + sprite2.h 
        && sprite1.y + sprite1.h > sprite2.y) {
        return true // hit ca touche !
    }
    return false
}