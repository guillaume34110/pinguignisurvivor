import { Enemy } from "../StartData/StartData"

interface Enemies {
    medusa: Enemy,
    flozer: Enemy,
}

export const enemies: Enemies = {

    medusa: {
        type: "",
        level: 1,
        life: 1,
        damages: 1,
        speed: 1,
        sprite: "",
        x: 1,
        y: 1,
    },

    flozer: {
        type: "",
        level: 1,
        life: 1,
        damages: 1,
        speed: 1,
        sprite: "",
        x: 1,
        y: 1,
    }

}

