import {GameData} from "../../StartData/StartData.js";

export const heroSpriteBoxUpdate = ({hero}: GameData) => {
    hero.hitBox = {
        x: hero.spriteBox.x ,
        y: hero.spriteBox.y - hero.spriteBox.w / 16,
        w: hero.spriteBox.w,
        h: hero.spriteBox.h * 0.6,
    }
}