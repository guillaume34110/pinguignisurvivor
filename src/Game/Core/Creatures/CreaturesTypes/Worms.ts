import { SensorType } from "../../StartData/StartData";
import { CreatureSex, CreatureType } from "../Creature";
import { CreaturesSprite } from "../CreaturesSprite";

export const worms = {
    id: 0,
    name : 'worms',
    type: CreatureType.Worms,
    maxHealth: 4_000,
    health: 4_000,
    damage: 1,
    sprite: {
        front: CreaturesSprite.wormsLeft,
        back: CreaturesSprite.wormsRight,
        left: CreaturesSprite.wormsLeft,
        right: CreaturesSprite.wormsRight,
        sprite: CreaturesSprite.wormsLeft
    },
    spriteBox: {
        x: 1,
        y: 1,
        w: 6,
        h: 6,
        direction: {
            radian: 0,
            degree10:0,
            x: 0.1,
            y: 0.1
        },
        speed: 0.1,
    },
    hitBox: {
        x: 1,
        y: 1,
        w: 6,
        h: 6,
    },
    sensors: {
        sensors: [
        
        ]
    },
    sensorsFlags: {
        flagLeft: false,
        flagRight: false
    },
    fertility: 0,
    maxFertilityMale: 0,
    maxFertilityFemale: 0,
    sex: CreatureSex.Sterile,
    hunting: false,
    coordinate : 0,
    weight : 0.01, 
    price : 0,
    sellPrice : 0,
    valueAsFood : 2000
}