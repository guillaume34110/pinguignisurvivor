import { MapBlockType } from "../../MapBlocks/MapBlock";
import { SensorType } from "../../StartData/StartData";
import { Creature, CreatureSex, CreatureType } from "../Creature";
import { CreaturesSprite } from "../CreaturesSprite";

export const worms: Creature = {
    id: 0,
    name: 'worms',
    type: CreatureType.Worms,
    maxLifeTime: 4_000,
    lifeTime: 4_000,
    lifePoint : 100,
    lifePointMax : 100,
    creatureWhoAttack : [],
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
            degree10: 0,
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
    coordinate: 0,
    weight: 0.01,
    maxWeight:0.1,
    price: 0,
    sellPrice: 0,
    valueAsFood: 400,
    typeFoodToEat: [],
    huntingInhibitor: 0,
    gestation: false,
    gestationTime: 0,
    gestationMaxTime: 0,
    hunger: 4000,
    hungerMax: 8000,
    mapBlockToDrop: [MapBlockType.Dirt, MapBlockType.Grass],
    unLikedMapBlock: [MapBlockType.Snow],
    memory: {
        mapBlocksOrdered: [],
        creaturesPositions: [],
        family: [],
        housePosition: { x: 0, y: 0 },
        itemsPositions: [],
        detectedCreatures : [], 
        detectedItems : [], 
        detectedMapBlocks : []
    }
}