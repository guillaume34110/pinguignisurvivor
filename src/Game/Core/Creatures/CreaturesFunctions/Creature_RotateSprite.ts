import { Creature } from '../Creature';
export const creature_RotateSprite = (creature: Creature) => {

    const directionRadian = creature.spriteBox.direction.radian % (2 * Math.PI)

    if (directionRadian > -Math.PI / 4
        && directionRadian <= Math.PI / 4) {
        creature.sprite.sprite = creature.sprite.right
    } else if (directionRadian > Math.PI / 4
        && directionRadian <= Math.PI * 3 / 4) {
        creature.sprite.sprite = creature.sprite.front
    } else if (directionRadian > Math.PI * 3 / 4
        && directionRadian <= Math.PI * 5 / 4) {
        creature.sprite.sprite = creature.sprite.left
    } else {
        creature.sprite.sprite = creature.sprite.back
    }

}

export const creature_RotateSpriteBy10Degrees = (creature: Creature) => {

    const direction10Degrees = creature.spriteBox.direction.degree10

    if (direction10Degrees < 5) {
        creature.sprite.sprite = creature.sprite.right
    }
    else if (direction10Degrees < 14) {
        creature.sprite.sprite = creature.sprite.front
    }
    else if (direction10Degrees < 23) {
        creature.sprite.sprite = creature.sprite.left
    }
    else if (direction10Degrees < 32) {
        creature.sprite.sprite = creature.sprite.back
    }
    else {
        creature.sprite.sprite = creature.sprite.right
    }

}

