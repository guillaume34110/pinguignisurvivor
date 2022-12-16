import { SensorType } from '../../StartData/StartData';
import { Creature } from '../Creature';
import { CreaturesSprite } from '../CreaturesSprite';

export const mouse: Creature = {
    id: 0,
    type: "mouse",
    maxHealth: 5000,
    health: 5000,
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
        w: 16,
        h: 32,
        direction: {
            radian: 0,
            x: 1,
            y: 1
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
            distanceFromCreature: 50,
                degOffset: 20,
                x:0,
                y:0,
                h: 15,
                w: 15,
                type: SensorType.TurnRight
            },
            {
                distanceFromCreature: 50,
                degOffset: 340,
                x:0,
                y:0,
                h: 15,
                w: 15,
                type: SensorType.TurnLeft
            }
        ]
    },
    fertility: 0
}