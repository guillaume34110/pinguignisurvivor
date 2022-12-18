import { GameData, Sensor, SensorType } from "../../StartData/StartData"
import { getCenterSpriteBox } from "../../Utilities/spriteBox/positionSpriteBox"
import { Creature } from "../Creature"
import { mapBlocksGeneric } from '../../MapBlocks/MapBlocks';
import { hitBoxMatch } from "../../Utilities/HitBoxMatch";
import { spriteBoxSetPositionByRotateInDegree } from "../../Utilities/spriteBox/directionSpriteBox";
import { ItemType } from "../../Items/Item";

export const creature_sensorTurnOnCollision = (gameData: GameData, creature: Creature) => {
    let flagLeft = false
    let flagRight = false
    creature.sensors.sensors.forEach(sensor => {
        if (sensor.type === SensorType.TurnLeft || sensor.type === SensorType.TurnRight) {
            gameData.mapBlocks.forEach(mapBlock => {
                if (mapBlock.type === mapBlocksGeneric.spaceBorder.type) {
                    if (hitBoxMatch(mapBlock.hitBox, sensor)) {
                        if (sensor.type === SensorType.TurnLeft) flagLeft = true
                        else if (sensor.type === SensorType.TurnRight) flagRight = true
                    }
                }
            })
            gameData.items.forEach(item => {
               if (item.type === ItemType.Solid){
                if (hitBoxMatch(item.hitBox, sensor)) {
                    if (sensor.type === SensorType.TurnLeft) flagLeft = true
                    else if (sensor.type === SensorType.TurnRight) flagRight = true
                }
               }
            })
        }
    })
    if (flagLeft && flagRight) spriteBoxSetPositionByRotateInDegree(creature.spriteBox, 120, 5)
    else if (flagLeft) spriteBoxSetPositionByRotateInDegree(creature.spriteBox, 90, 12)
    else if (flagRight) spriteBoxSetPositionByRotateInDegree(creature.spriteBox, -90, 12)
}

export const creature_updateSensorsPosition = (creature: Creature) => {
    creature.sensors.sensors.forEach((sensor: Sensor) => {
        if (sensor.type === SensorType.TurnRight || sensor.type === SensorType.TurnLeft){
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
        sensor.y = getCenterSpriteBox(creature.spriteBox).y + (Math.sin(offsetRad) * sensor.distanceFromCreature)}
        else if (sensor.type === SensorType.Hunt) {
                sensor.x = getCenterSpriteBox(creature.spriteBox).x -sensor.w / 2
                sensor.y =  getCenterSpriteBox(creature.spriteBox).y - sensor.h / 2   
        }
    })
}