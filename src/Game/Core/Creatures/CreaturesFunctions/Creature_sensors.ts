import {  Sensor, SensorType } from "../../StartData/StartData"
import { getCenterSpriteBox } from "../../Utilities/spriteBox/positionSpriteBox"
import { Creature } from "../Creature"
import { hitBoxMatch } from "../../Utilities/HitBoxMatch";
import { spriteBoxSetPositionByRotateInDegree } from "../../Utilities/spriteBox/directionSpriteBox";
import { Item, ItemType } from "../../Items/Item";
import { MapBlock } from "../../MapBlocks/MapBlock";
import { mapBlocksGeneric } from "../../MapBlocks/MapBlocks";

export const creature_sensorSetCollisionWithMapBlocksFlags = (creature: Creature, sensor: Sensor, mapBlock: MapBlock) => {
        if (mapBlock.type === mapBlocksGeneric.spaceBorder.type) {
            if (hitBoxMatch(mapBlock.hitBox, sensor)) {
                if (sensor.type === SensorType.TurnLeft) creature.sensorsFlags.flagLeft = true
                else if (sensor.type === SensorType.TurnRight) creature.sensorsFlags.flagRight = true
            }
        }
    }



export const creature_sensorSetCollisionFlagWithItems = (creature: Creature, sensor: Sensor, item: Item) => {
    if (sensor.type === SensorType.TurnLeft || sensor.type === SensorType.TurnRight) {
        if (item.type === ItemType.Solid) {
            if (hitBoxMatch(item.hitBox, sensor)) {
                if (sensor.type === SensorType.TurnLeft) creature.sensorsFlags.flagLeft = true
                else if (sensor.type === SensorType.TurnRight) creature.sensorsFlags.flagRight = true
            }
        }
    }
}


export const creature_TurnOnCollision = (creature: Creature) => {
    if (creature.sensorsFlags.flagLeft && creature.sensorsFlags.flagRight) spriteBoxSetPositionByRotateInDegree(creature.spriteBox, 50)
    else if (creature.sensorsFlags.flagLeft) spriteBoxSetPositionByRotateInDegree(creature.spriteBox, 5)
    else if (creature.sensorsFlags.flagRight) spriteBoxSetPositionByRotateInDegree(creature.spriteBox, -5)
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
