import {GameData} from "../StartData/StartData";

export const heroSpriteBoxUpdate = ({hero}: GameData) => {
    hero.hitBox = {
        x: hero.spriteBox.x - hero.spriteBox.h / 4,
        y: hero.spriteBox.y - hero.spriteBox.w / 16,
        w: hero.spriteBox.w,
        h: hero.spriteBox.h * 0.6
    }
}