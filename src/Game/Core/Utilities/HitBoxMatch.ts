import { HitBox, Sensor, SpriteBox } from '../StartData/StartData';


export const hitBoxMatch = (sprite1: HitBox|Sensor|SpriteBox, sprite2: HitBox|Sensor|SpriteBox) : Boolean=> {
    return sprite1.x < sprite2.x + sprite2.w
    && sprite1.x + sprite1.w > sprite2.x
    && sprite1.y < sprite2.y + sprite2.h
    && sprite1.y + sprite1.h > sprite2.y
}

