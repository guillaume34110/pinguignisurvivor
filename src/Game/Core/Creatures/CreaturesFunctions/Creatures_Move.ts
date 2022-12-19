import { GameData } from '../../StartData/StartData';
import { Creature } from '../Creature';
import { moveSpriteBoxWithRadian } from '../../Utilities/spriteBox/directionSpriteBox';

export const creatures_Move = (gameData: GameData, creature: Creature) => {

    creature.spriteBox.direction.radian += (Math.random() - 0.5) / 10
    moveSpriteBoxWithRadian(creature.spriteBox)

}

export const creatures_CollisionWithMapBlockMove = (creature: Creature) => {

    creature.spriteBox.x -= creature.spriteBox.direction.x * 10
    creature.spriteBox.y -= creature.spriteBox.direction.y * 10
    creature.spriteBox.direction.radian -= Math.PI * 2 / 3
}

export const creatures_collisionBetweenMove = (creatureToMove: Creature, type: string) => {
    if (type === "y") creatureToMove.spriteBox.y -= creatureToMove.spriteBox.direction.y
    if (type === "x") creatureToMove.spriteBox.x -= creatureToMove.spriteBox.direction.x
}

export const creature_setDirectionRadian = (creatureToMove: Creature) => {
    const creatureX = creatureToMove.spriteBox.direction.x
    const creatureY = creatureToMove.spriteBox.direction.y
    creatureToMove.spriteBox.direction.radian = Math.atan(creatureX / creatureY)
    if ((creatureX < 0 && creatureY < 0) || creatureX < 0) {
        creatureToMove.spriteBox.direction.radian += Math.PI
    }
}

export const creature_loseSpeed = (creature: Creature) => {
    if (creature.spriteBox.direction.x > 0) creature.spriteBox.direction.x -= creature.spriteBox.direction.x / 100
    else creature.spriteBox.direction.x -= creature.spriteBox.direction.x / 100

    if (creature.spriteBox.direction.y > 0) creature.spriteBox.direction.y -= creature.spriteBox.direction.y / 100
    else creature.spriteBox.direction.y -= creature.spriteBox.direction.y / 100
}