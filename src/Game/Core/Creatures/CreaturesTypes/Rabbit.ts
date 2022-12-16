import { SensorType } from "../../StartData/StartData";
import { CreaturesSprite } from "../CreaturesSprite";

export const rabbit = {
    id: 0,
    type: "rabbit",
    maxHealth: 1000,
    health: 1000,
    damage: 1,
    sprite: {
        front: CreaturesSprite.rabbitFront,
        back: CreaturesSprite.rabbitBack,
        left: CreaturesSprite.rabbitLeft,
        right: CreaturesSprite.rabbitRight,
        sprite: CreaturesSprite.rabbitFront
    },
    spriteBox: {
        x: 1,
        y: 1,
        w: 16,
        h: 32,
        direction: {
            radian: 0,
            x: 0,
            y: 0
        },
        speed: 1,
    },
    hitBox: {
        x: 1,
        y: 1,
        w: 16,
        h: 16,
    },
    sensors: {
        sensors: [
            {
                distanceFromCreature: 15,
                degOffset: 20 ,
                x:0,
                 y:0,
                h: 15,
                w: 15,
                type: SensorType.Collision
            }
        ]
    },
    fertility: 0
}