import { moveSpriteBoxAccording10DegreesDirection, rotateSpriteBox10degreesLeft, rotateSpriteBox10degreesRight, rotateSpriteBoxByX10Degrees } from '../../Utilities/spriteBox/directionSpriteBox';
import { Creature } from '../Creature';

export const creatures_Move = (creature: Creature) => {

    const rand = Math.random()
    if (rand < 0.03) {
        rotateSpriteBox10degreesLeft(creature.spriteBox)
    }
    else if (rand > 0.97) {
        rotateSpriteBox10degreesRight(creature.spriteBox)
    }
    moveSpriteBoxAccording10DegreesDirection(creature.spriteBox)

}


export const creatures_CollisionWithMapBlockMove = (creature: Creature) => {
    creature.huntingInhibitor = 200
    creature.spriteBox.x -= creature.spriteBox.direction.x * 10
    creature.spriteBox.y -= creature.spriteBox.direction.y * 10
    rotateSpriteBoxByX10Degrees(creature.spriteBox, ((Math.random()-0.5) *15))

}
export const creatures_CollisionWithMapBlockMoveOld = (creature: Creature) => {
    creature.spriteBox.x -= creature.spriteBox.direction.x * 10
    creature.spriteBox.y -= creature.spriteBox.direction.y * 10
    creature.spriteBox.direction.radian -= Math.PI * 2 / 3

}


export const creatures_collisionBetweenMove = (creatureToMove: Creature, type: string) => {
    if (type === "x" || type === "y") creatureToMove.spriteBox[type] -= creatureToMove.spriteBox.direction[type];
}
export const creatures_pushOtherCreature = (otherCreature:Creature,creatureToMove: Creature, type: string) => { 
    if (type === "x" || type === "y") otherCreature.spriteBox[type] += creatureToMove.spriteBox.direction[type]*2;
    creature_loseSpeed(creatureToMove)
}

export const creature_setDirectionRadian = (creatureToMove: Creature) => {
    const { x: creatureX, y: creatureY } = creatureToMove.spriteBox.direction;
    creatureToMove.spriteBox.direction.radian = Math.atan(creatureY / creatureX) + (creatureX < 0 ? Math.PI : 0);
}

export const creature_loseSpeed = (creature: Creature) => {
    creature.spriteBox.x -= creature.spriteBox.direction.x / 2;
    creature.spriteBox.y -= creature.spriteBox.direction.y / 2;
}