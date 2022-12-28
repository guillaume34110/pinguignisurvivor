import {God} from "../God/God";
import {Item} from "../Items/Item";
import {MapBlock} from "../MapBlocks/MapBlock";
import {CreaturesSprite} from "../Creatures/CreaturesSprite";

import { Creature } from "../Creatures/Creature";
import { godsGeneric } from "../God/Gods";
import { mapBlocksGeneric } from "../MapBlocks/MapBlocks";

export interface GameData {
    god: God,
    creatures: Creature[],
    items: Item[],
    keys: Keys,
    time: number,
    camera: Camera,
    mapBlocks: MapBlock[],
    message :string,
    howMuchTiles : number ,
    howMuchTilesOnLine : number
}

export class DirectionClass {
    public radian:number = 0
    constructor(
        public degree10: number,
        public x: number,
        public y: number,
    ) {
    }
}

export interface SpriteBoxInterface {
    x: number,
    y: number,
    w: number,
    h: number,
    direction: {
        radian: number,
        degree10: number,
        x: number,
        y: number,
    },
    speed: number,
}

export class SpriteBox {
    constructor(
        public x: number,
        public y: number,
        public w: number,
        public h: number,
        public direction: DirectionClass,
        public speed: number,
    ) {
    }
}

export interface HitBoxInterface {
    x: number,
    y: number,
    w: number,
    h: number,
}

export class HitBox {
    constructor(
        public x: number,
        public y: number,
        public w: number,
        public h: number,
    ) {
    }
}

export interface SpriteAndHitBox {
    spriteBox : SpriteBox
    hitBox : HitBox
}

export interface Sprite {
    front: CreaturesSprite,
    back: CreaturesSprite,
    left: CreaturesSprite,
    right: CreaturesSprite,
    sprite: CreaturesSprite,
}

export interface Keys {
    keysInstant: {
        left: boolean,
        right: boolean,
        up: boolean,
        down: boolean,
    },
    keyState: {
        left: boolean,
        right: boolean,
        up: boolean,
        down: boolean,
    }
}

export interface Camera {
    x: number,
    y: number
}

export interface Sensors {
    sensors : Sensor[]
}
export interface SensorsFlag{
    flagLeft: boolean, 
    flagRight: boolean
}
export interface Sensor {
    distanceFromCreature : number, 
    degOffset : number,
    x : number,
    y : number,
    h : number, 
    w : number, 
    type : SensorType,
    flag : Boolean,
    coordinate : number
}

export enum SensorType {
    Collision, TurnRight , TurnLeft , Hunt
}

export const startData: GameData = {

    god:godsGeneric.god,

    creatures: [],
    items: [],
    keys: {
        keysInstant: {
            left: false,
            right: false,
            up: false,
            down: false,
        },
        keyState: {
            left: false,
            right: false,
            up: false,
            down: false,
        }
    },

    time: 0,
    camera: {
        x: 0,
        y: 0,
    },
    mapBlocks: [
       
    ], message : "",
    howMuchTiles :5000 ,
    howMuchTilesOnLine : 50
}
