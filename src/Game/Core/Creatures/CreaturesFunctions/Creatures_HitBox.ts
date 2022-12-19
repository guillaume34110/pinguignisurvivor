import { Creature } from "../Creature";

export const creatures_HitBox = (creature: Creature) => {

    creature.hitBox.x = creature.spriteBox.x
    creature.hitBox.y = creature.spriteBox.y + creature.spriteBox.h / 2
}

//  w: enemy.spriteBox.w,
//     h: enemy.spriteBox.h * 0.6,