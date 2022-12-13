import { GameData, SpriteBoxInterface } from '../../StartData/StartData';
import { Creature } from '../Creature';
import { creatures_CollisionWithEnemies } from './Creatures_Collision';

export const creatures_Hunt = (gameData: GameData) => {

    const spriteBoxSetDirectionAccordingOtherSpriteBoxLite = (
        creatureToMove: Creature, spriteBoxTarget: SpriteBoxInterface
    ) => {
        if (creatureToMove.spriteBox.speed === 0) return
        const deltaX = spriteBoxTarget.x - creatureToMove.spriteBox.x
        const deltaY = spriteBoxTarget.y - creatureToMove.spriteBox.y

        const stepX = Math.abs(deltaX / creatureToMove.spriteBox.speed)
        creatureToMove.spriteBox.x += deltaX / stepX
        creatureToMove.spriteBox.direction.x = deltaX / stepX

        const stepY = Math.abs(deltaY / creatureToMove.spriteBox.speed)
        creatureToMove.spriteBox.y += deltaY / stepY

        creatureToMove.spriteBox.direction.y = deltaY / stepY
        creatures_CollisionWithEnemies(gameData, "y", creatureToMove)
        creatures_CollisionWithEnemies(gameData, "x", creatureToMove)
    }

    gameData.creatures.forEach(creature => {
        spriteBoxSetDirectionAccordingOtherSpriteBoxLite(creature, gameData.god.spriteBox)
    })
}

export const creatures_CollisionWithMapBlockMove = (creature: Creature) => {
    creature.spriteBox.x -= creature.spriteBox.direction.x * 18
    creature.spriteBox.y -= creature.spriteBox.direction.y * 18
}

export const creatures_collisionBetweenMove = (creatureToMove: Creature, type: string) => {
    if (type === "y") creatureToMove.spriteBox.y -= creatureToMove.spriteBox.direction.y
    if (type === "x") creatureToMove.spriteBox.x -= creatureToMove.spriteBox.direction.x
}
