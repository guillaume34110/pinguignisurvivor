import { SensorType } from '../../StartData/StartData';
import { Creature, CreatureSex } from '../Creature';
import { CreaturesSprite } from '../CreaturesSprite';

export const mouse: Creature = {
    id: 0,
    type: "mouse",
    maxHealth: 10_000,
    health: 10_000,
    damage: 1,
    sprite:
    {
        front: CreaturesSprite.mouseFront,
        back: CreaturesSprite.mouseBack,
        left: CreaturesSprite.mouseLeft,
        right: CreaturesSprite.mouseRight,
        sprite: CreaturesSprite.mouseFront
    },
    spriteBox: {
        x: 1,
        y: 1,
        w: 12,
        h: 16,
        direction: {
            radian: 0,
            x: 0.1,
            y: 0.1
        },
        speed: 1.5,
    },
    hitBox: {
        x: 1,
        y: 1,
        w: 12,
        h: 12,
    },
    sensors: {
        sensors: [
            {
                distanceFromCreature: 40,
                degOffset: 30,
                x: 0,
                y: 0,
                h: 15,
                w: 15,
                type: SensorType.TurnRight,
                flag: false,
            },
            {
                distanceFromCreature: 40,
                degOffset: 330,
                x: 0,
                y: 0,
                h: 15,
                w: 15,
                type: SensorType.TurnLeft,
                flag: false,
            },
            {
                distanceFromCreature: 0,
                degOffset: 0,
                x: 0,
                y: 0,
                h: 120,
                w: 120,
                type: SensorType.Hunt,
                flag: false,
            },
        ]
    },
    sensorsFlags: {
        flagLeft: false,
        flagRight: false
    },
    fertility: 0,
    maxFertilityMale: 250,
    maxFertilityFemale: 750,
    sex: CreatureSex.Male,
    lifeBar: { x: 0, y: 0, h: 8, wMax: 12, wCurrent: 12 },
    hunting: false
}