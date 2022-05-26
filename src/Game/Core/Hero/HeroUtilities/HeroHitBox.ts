import {GameData} from "../../StartData/StartData";

export const heroSpriteBoxUpdate = ({hero}: GameData) => {
        hero.hitBox.x= hero.spriteBox.x
        hero.hitBox.y= hero.spriteBox.y  - hero.spriteBox.h /2
}
//  w: hero.spriteBox.w,
//h: hero.spriteBox.h * 0.6,