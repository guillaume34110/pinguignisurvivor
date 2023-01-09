import { SensorType } from '../../StartData/StartData';
import { Creature, CreatureSex, CreatureType } from '../Creature';
import { CreaturesSprite } from '../CreaturesSprite';
import { worms } from './Worms';
import { MapBlockType } from '../../MapBlocks/MapBlock';
import { seeds } from '../../Items/ItemsTypes/Seeds';

export const mouse: Creature = {
    id: 0,
    name : 'mouse',
    type: CreatureType.Mouse,
    maxHealth: 20_000,
    health: 20_000,
    damage: 10,
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
            degree10:0,
            x: 0.1,
            y: 0.1
        },
        speed: 0.75,
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
                coordinate : 0
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
                coordinate : 0
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
                coordinate : 0
            },
        ]
    },
    sensorsFlags: {
        flagLeft: false,
        flagRight: false
    },
    fertility: 0,
    maxFertilityMale: 400,
    maxFertilityFemale: 2000,
    sex: CreatureSex.Male,
    hunting: false,
    coordinate : 0,
    weight : 0.1,
    price : 20,
    sellPrice : 0.2,
    valueAsFood :400,
    typeFoodToEat : [worms.type , seeds.type],
    huntingInhibitor : 0,
    gestation : false, 
    gestationTime : 0, 
    gestationMaxTime : 1000,
    hunger : 2000 ,
    hungerMax : 5000 ,
    mapBlockToDrop : [MapBlockType.Dirt , MapBlockType.Grass],
    unLikedMapBlock : [MapBlockType.Snow],
}