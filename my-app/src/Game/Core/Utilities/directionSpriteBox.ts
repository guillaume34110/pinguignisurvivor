import {SpriteBox} from "../StartData/StartData";

export enum DirectionEnum {
    Up, Left, Down, Right, DownRight, DownLeft, UpLeft, UpRight, Random
}

export const spriteBoxSetDirection = (
    spriteBox: SpriteBox, directionToSet: DirectionEnum
) => {
    switch (directionToSet) {
        case DirectionEnum.Up: {
            spriteBox.direction.x = 0
            spriteBox.direction.y = -spriteBox.speed
            break
        }
        case DirectionEnum.Down: {
            spriteBox.direction.x = 0
            spriteBox.direction.y = spriteBox.speed
            break
        }
        case DirectionEnum.Left: {
            spriteBox.direction.x = -spriteBox.speed
            spriteBox.direction.y = 0
            break
        }
        case DirectionEnum.Right: {
            spriteBox.direction.x = spriteBox.speed
            spriteBox.direction.y = 0
            break
        }
        case DirectionEnum.DownRight: {
            spriteBoxSetDirectionByAngle(spriteBox, Math.PI / 4)
            break
        }
        case DirectionEnum.DownLeft: {
            spriteBoxSetDirectionByAngle(spriteBox, 3 * (Math.PI / 4))
            break
        }
        case DirectionEnum.UpLeft: {
            spriteBoxSetDirectionByAngle(spriteBox, 5 * (Math.PI / 4))
            break
        }
        case DirectionEnum.UpRight: {
            spriteBoxSetDirectionByAngle(spriteBox, 7 * (Math.PI / 4))
            break
        }
        case DirectionEnum.Random: {
            spriteBoxSetDirectionByAngle(spriteBox, Math.random() * Math.PI * 2)
            break
        }
        default: {
            break
        }
    }
}

export const spriteBoxSetDirectionByAngle = (
    spriteBox: SpriteBox, radAngle: number
) => {
    spriteBox.direction.x = Math.cos(radAngle) * spriteBox.speed
    spriteBox.direction.y = Math.sin(radAngle) * spriteBox.speed
}

export const spriteBoxSetDirectionAccordingOtherSpriteBox = (
    spriteBoxToMove: SpriteBox, spriteBoxTarget: SpriteBox
) => {

    if (spriteBoxToMove.speed !== 0) {
        const deltaX = spriteBoxTarget.x - spriteBoxToMove.x
        const deltaY = spriteBoxTarget.y - spriteBoxToMove.y
        const deltaDistance = Math.sqrt((Math.pow(deltaX, 2)) + (Math.pow(deltaY, 2)))

        if (deltaDistance > spriteBoxToMove.speed) {
            const step = deltaDistance / spriteBoxToMove.speed
            spriteBoxToMove.x += deltaX / step
            spriteBoxToMove.y += deltaY / step
        } else {
            spriteBoxToMove.x += deltaX
            spriteBoxToMove.y += deltaY
        }

    }
}

export const spriteBoxSetDirectionAccordingPoint = (
    spriteBoxA: SpriteBox, pointX: number, pointY: number
) => {

    if (spriteBoxA.speed !== 0) {
        const deltaX = pointX - spriteBoxA.x
        const deltaY = pointY - spriteBoxA.y
        const deltaDistance = Math.sqrt((Math.pow(deltaX, 2)) + (Math.pow(deltaY, 2)))

        if (deltaDistance > spriteBoxA.speed) {
            const step = deltaDistance / spriteBoxA.speed
            spriteBoxA.direction.x = deltaX / step
            spriteBoxA.direction.y = deltaY / step
        } else {
            spriteBoxA.direction.x = deltaX
            spriteBoxA.direction.y = deltaY
        }
    }

}
