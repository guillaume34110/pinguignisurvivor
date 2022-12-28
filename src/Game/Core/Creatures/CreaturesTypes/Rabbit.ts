import { SensorType } from "../../StartData/StartData";
import { CreatureSex, CreatureType } from "../Creature";
import { CreaturesSprite } from "../CreaturesSprite";

export const rabbit = {
    id: 0,
    type: CreatureType.Rabbit,
    maxHealth: 13_000,
    health: 13_000,
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
            degree10:0,
            x: 0.1,
            y: 0.1
        },
        speed: 1.7,
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
                distanceFromCreature: 80,
                degOffset: 30,
                x: 0,
                y: 0,
                h: 25,
                w: 25,
                type: SensorType.TurnRight,
                flag: false,
                coordinate : 0
            },
            {
                distanceFromCreature: 80,
                degOffset: 330,
                x: 0,
                y: 0,
                h: 25,
                w: 25,
                type: SensorType.TurnLeft,
                flag: false,
                coordinate : 0
            },
            {
                distanceFromCreature: 0,
                degOffset: 0,
                x: 0,
                y: 0,
                h: 210,
                w: 210,
                type: SensorType.Hunt,
                flag: false,
                coordinate : 0
            },
        ]
    },
    sensorsFlags: {
        flagLeft: false,
        flagRight: false
    },
    fertility: 0,
    maxFertilityMale: 200,
    maxFertilityFemale: 3000,
    sex: CreatureSex.Male,
    lifeBar: { x: 0, y: 0, h: 10, wMax: 16, wCurrent: 16 },
    hunting: false,
    coordinate : 0
}