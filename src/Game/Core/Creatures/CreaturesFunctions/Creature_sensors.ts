import {  Sensor, SensorType } from "../../StartData/StartData"
import { getCenterSpriteBox } from "../../Utilities/SpriteBox/PositionSpriteBox"
import { Creature } from "../Creature"
import { hitBoxMatch } from "../../Utilities/HitBoxMatch";
import { spriteBoxAddX10DegreesDirection } from "../../Utilities/SpriteBox/DirectionSpriteBox";
import { Item, ItemType } from "../../Items/Item";
import { MapBlock } from "../../MapBlocks/MapBlock";
import { mapBlocksGeneric } from "../../MapBlocks/MapBlocks";
import { LightTrigonometry } from "../../Utilities/OurTrigonometry/LightTrigo";

export const creature_sensorSetCollisionWithMapBlocksFlags = (creature: Creature, sensor: Sensor, mapBlock: MapBlock) => {
        if (mapBlock.type === mapBlocksGeneric.spaceBorder.type 
            || mapBlock.type === mapBlocksGeneric.waterGround.type 
            || (creature.unLikedMapBlock.includes(mapBlock.type)  && Math.random() > 0.96)) {
            if (hitBoxMatch(mapBlock.hitBox, sensor)) {
                if (sensor.type === SensorType.TurnLeft) creature.sensorsFlags.flagLeft = true
                else if (sensor.type === SensorType.TurnRight) creature.sensorsFlags.flagRight = true
            }
        }
    }



export const creature_sensorSetCollisionFlagWithItems = (creature: Creature, sensor: Sensor, item: Item) => {
    if (sensor.type === SensorType.TurnLeft || sensor.type === SensorType.TurnRight) {
        if (item.type === ItemType.Rock) {
            if (hitBoxMatch(item.hitBox, sensor)) {
                if (sensor.type === SensorType.TurnLeft) creature.sensorsFlags.flagLeft = true
                else if (sensor.type === SensorType.TurnRight) creature.sensorsFlags.flagRight = true
            }
        }
    }
}


export const creature_TurnOnCollision = (creature: Creature) => {
    switch (true) {
        case creature.sensorsFlags.flagLeft && creature.sensorsFlags.flagRight:
            if (!creature.hunting)spriteBoxAddX10DegreesDirection(creature.spriteBox, 50);
            else spriteBoxAddX10DegreesDirection(creature.spriteBox, 120);
            break;
        case creature.sensorsFlags.flagLeft:
            if (!creature.hunting) spriteBoxAddX10DegreesDirection(creature.spriteBox, 10);
            else  spriteBoxAddX10DegreesDirection(creature.spriteBox, 60);
            break;
        case creature.sensorsFlags.flagRight:
            if (!creature.hunting)spriteBoxAddX10DegreesDirection(creature.spriteBox, -10);
             else  spriteBoxAddX10DegreesDirection(creature.spriteBox, -60);
            break;
    }
}

export const creature_updateSensorsPosition = (creature: Creature, sensor: Sensor) => {

    if (sensor.type === SensorType.TurnRight || sensor.type === SensorType.TurnLeft) {
        const x = creature.spriteBox.direction.x
        const y = creature.spriteBox.direction.y
        let creatureRad = Math.atan(y / x)
        if (x < 0 && y < 0) {
            creatureRad += Math.PI
        }
        else if (x < 0) {
            creatureRad += Math.PI
        }
        const offsetRad = (sensor.degOffset * Math.PI / 180) + creatureRad
        sensor.x = getCenterSpriteBox(creature.spriteBox).x + (Math.cos(offsetRad) * sensor.distanceFromCreature)
        sensor.y = getCenterSpriteBox(creature.spriteBox).y + (Math.sin(offsetRad) * sensor.distanceFromCreature)
    }
    else if (sensor.type === SensorType.Hunt) {
        
        sensor.x = getCenterSpriteBox(creature.spriteBox).x - (sensor.w / 2)
        sensor.y = getCenterSpriteBox(creature.spriteBox).y -( sensor.h / 2)
    }
}

export const creature_updateSensorsPositionBy10Degrees = (creature: Creature, sensor: Sensor) => {

    if (sensor.type === SensorType.TurnRight || sensor.type === SensorType.TurnLeft) {
        const offset10Degrees = ~~(36 + sensor.degOffset/10 + creature.spriteBox.direction.degree10) % 36
        
        sensor.x = getCenterSpriteBox(creature.spriteBox).x + (LightTrigonometry.coordinateCoupleBy10DegreesStep0To350Degrees[offset10Degrees].x * sensor.distanceFromCreature)
        sensor.y = getCenterSpriteBox(creature.spriteBox).y + (LightTrigonometry.coordinateCoupleBy10DegreesStep0To350Degrees[offset10Degrees].y * sensor.distanceFromCreature)
    }
    else if (sensor.type === SensorType.Hunt) {
        
        sensor.x = getCenterSpriteBox(creature.spriteBox).x - (sensor.w / 2)
        sensor.y = getCenterSpriteBox(creature.spriteBox).y -( sensor.h / 2)
    }
}
