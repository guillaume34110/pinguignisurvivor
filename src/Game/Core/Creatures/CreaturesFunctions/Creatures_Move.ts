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
   // if (type === "y") creatureToMove.spriteBox.y -= creatureToMove.spriteBox.direction.y
    //if (type === "x") creatureToMove.spriteBox.x -= creatureToMove.spriteBox.direction.x
    if (type === "x" || type === "y") creatureToMove.spriteBox[type] -= creatureToMove.spriteBox.direction[type];
}

export const creature_setDirectionRadian = (creatureToMove: Creature) => {
    const { x: creatureX, y: creatureY } = creatureToMove.spriteBox.direction;
    creatureToMove.spriteBox.direction.radian = Math.atan(creatureY / creatureX) + (creatureX < 0 ? Math.PI : 0);
}

export const creature_loseSpeed = (creature: Creature) => {
    creature.spriteBox.direction.x -= creature.spriteBox.direction.x / 100;
    creature.spriteBox.direction.y -= creature.spriteBox.direction.y / 100;
}