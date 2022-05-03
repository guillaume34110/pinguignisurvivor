import { Enemy, enemyGeneric } from "../StartData/StartData"

interface Enemies {
    medusa: Enemy,
    flower: Enemy,
}

export const enemies: Enemies = {

    medusa: {
        type: "",
        level: 1,
        life: 1,
        damage: 1,
        speed: 1,
        sprite: "",
        spriteBox: {
            x: 1,
            y: 1,
            w: 32,
            h: 32,
        }
    },

    flower: {
        type: "",
        level: 1,
        life: 1,
        damage: 1,
        speed: 1,
        sprite: "",
        spriteBox: {
            x: 1,
            y: 1,
            w: 32,
            h: 32,
        }
    }

}

