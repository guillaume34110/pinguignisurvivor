import { GameData, Sensor, SpriteBoxInterface } from '../../StartData/StartData';
import { getCenterSpriteBox } from '../../Utilities/spriteBox/positionSpriteBox';
import { Creature } from '../Creature';
import { creatures_CollisionWithCreatures } from './Creatures_Collision';
import { creature_sensorTurnOnCollision, creature_updateSensorsPosition } from './Creature_sensors';
import { moveSpriteBoxWithRadian, spriteBoxSetDirectionWithRadian } from '../../Utilities/spriteBox/directionSpriteBox';

export const creatures_Move = (gameData: GameData) => {

    const creature_BasicMove = (
        creatureToMove: Creature
    ) => {
        if (creatureToMove.spriteBox.speed === 0) return
       
        creatureToMove.spriteBox.direction.radian += (Math.random() - 0.5) / 10  
        
     //  creature_setDirectionRadian(creatureToMove)
        creature_sensorTurnOnCollision(gameData,creatureToMove)
        moveSpriteBoxWithRadian(creatureToMove.spriteBox)
        creatures_CollisionWithCreatures(gameData, "y", creatureToMove)
        creatures_CollisionWithCreatures(gameData, "x", creatureToMove)
        creature_updateSensorsPosition(creatureToMove)
        
    }

    gameData.creatures.forEach(creature => {
        creature_BasicMove(creature)
    })
}

export const creatures_CollisionWithMapBlockMove = (creature: Creature) => {

    creature.spriteBox.x -= creature.spriteBox.direction.x * 10
    creature.spriteBox.y -= creature.spriteBox.direction.y * 10
    creature.spriteBox.direction.radian -= Math.PI*2/3
}

export const creatures_collisionBetweenMove = (creatureToMove: Creature, type: string) => {
    if (type === "y") creatureToMove.spriteBox.y -= creatureToMove.spriteBox.direction.y
    if (type === "x") creatureToMove.spriteBox.x -= creatureToMove.spriteBox.direction.x
}

export const creature_setDirectionRadian = (creatureToMove: Creature) => {
    const creatureX = creatureToMove.spriteBox.direction.x
    const creatureY = creatureToMove.spriteBox.direction.y
    creatureToMove.spriteBox.direction.radian = Math.atan(creatureX/creatureY)
    if((creatureX < 0 && creatureY < 0) || creatureX < 0){
        creatureToMove.spriteBox.direction.radian += Math.PI
    }
}

export const creature_loseSpeed = (creature : Creature) => { 
if(creature.spriteBox.direction.x > 0 ) creature.spriteBox.direction.x -= creature.spriteBox.direction.x/100
else creature.spriteBox.direction.x -= creature.spriteBox.direction.x/100

if(creature.spriteBox.direction.y > 0 ) creature.spriteBox.direction.y -= creature.spriteBox.direction.y/100
else creature.spriteBox.direction.y -= creature.spriteBox.direction.y/100 
}