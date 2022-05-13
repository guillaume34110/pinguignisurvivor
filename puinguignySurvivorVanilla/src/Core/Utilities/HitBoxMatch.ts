import {HitBox, SpriteBox} from "../StartData/StartData.js"

export const HitBoxCls = {

    hitBoxMatch(sprite1: HitBox, sprite2: HitBox) {

        if (sprite1.x < sprite2.x + sprite2.w
            && sprite1.x + sprite1.w > sprite2.x
            && sprite1.y < sprite2.y + sprite2.h
            && sprite1.y + sprite1.h > sprite2.y) {
            return true // hit ca touche !
        }
        return false
    },

    hitBoxDraw(spriteBox: SpriteBox) {

    }
}