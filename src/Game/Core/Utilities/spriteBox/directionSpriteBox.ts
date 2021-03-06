import {SpriteBoxInterface} from "../../StartData/StartData";

export enum DirectionEnum {
    Right,
    Down,
    Left,
    Up,
    DownRight,
    DownLeft,
    UpLeft,
    UpRight,
    Random
}

export const DirectionInRadian = {
    Right: 0,
    Down: Math.PI / 2,
    Left: Math.PI,
    Up: 3 * (Math.PI / 2),
    DownRight: Math.PI / 4,
    DownLeft: 3 * (Math.PI / 4),
    UpLeft: 5 * (Math.PI / 4),
    UpRight: 7 * (Math.PI / 4)
}

export const spriteBoxSetDirection = (
    spriteBox: SpriteBoxInterface, directionToSet: DirectionEnum
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
            spriteBoxSetDirectionWithRadian(spriteBox, DirectionInRadian.DownRight)
            break
        }
        case DirectionEnum.DownLeft: {
            spriteBoxSetDirectionWithRadian(spriteBox, DirectionInRadian.DownLeft)
            break
        }
        case DirectionEnum.UpLeft: {
            spriteBoxSetDirectionWithRadian(spriteBox, DirectionInRadian.UpLeft)
            break
        }
        case DirectionEnum.UpRight: {
            spriteBoxSetDirectionWithRadian(spriteBox, DirectionInRadian.UpRight)
            break
        }
        case DirectionEnum.Random: {
            spriteBoxSetDirectionWithRadian(spriteBox, Math.random() * Math.PI * 2)
            break
        }
        default: {
            break
        }
    }
}

export const spriteBoxSetDirectionWithRadian = (
    spriteBox: SpriteBoxInterface, radAngle: number
) => {
    spriteBox.direction.x = Math.cos(radAngle) * spriteBox.speed
    spriteBox.direction.y = Math.sin(radAngle) * spriteBox.speed
}

export const spriteBoxSetDirectionAccordingOtherSpriteBox = (
    spriteBoxToMove: SpriteBoxInterface, spriteBoxTarget: SpriteBoxInterface
) => {

    if (spriteBoxToMove.speed !== 0) {
        const deltaX = spriteBoxTarget.x - spriteBoxToMove.x
        const deltaY = spriteBoxTarget.y - spriteBoxToMove.y
        const deltaDistance = Math.sqrt((Math.pow(deltaX, 2)) + (Math.pow(deltaY, 2)))

        if (deltaDistance > spriteBoxToMove.speed) {
            const step = deltaDistance / spriteBoxToMove.speed
            spriteBoxToMove.x += deltaX / step
            spriteBoxToMove.y += deltaY / step
            spriteBoxToMove.direction.x = deltaX / step
            spriteBoxToMove.direction.y = deltaY / step
        } else {
            spriteBoxToMove.x += deltaX
            spriteBoxToMove.y += deltaY
            spriteBoxToMove.direction.x = deltaX
            spriteBoxToMove.direction.y = deltaY
        }

    }
}
export const spriteBoxSetDirectionAccordingOtherSpriteBoxLite = (
    spriteBoxToMove: SpriteBoxInterface, spriteBoxTarget: SpriteBoxInterface
) => {
    if (spriteBoxToMove.speed !== 0) {
        const deltaX = spriteBoxTarget.x - spriteBoxToMove.x
        const deltaY = spriteBoxTarget.y - spriteBoxToMove.y

        const stepX = Math.abs(deltaX / spriteBoxToMove.speed)
        spriteBoxToMove.x += deltaX / stepX
        spriteBoxToMove.direction.x = deltaX / stepX

        const stepY = Math.abs(deltaY / spriteBoxToMove.speed)
        spriteBoxToMove.y += deltaY / stepY
        spriteBoxToMove.direction.y = deltaY / stepY

    }
}


export const spriteBoxSetDirectionAccordingPoint = (
    spriteBoxA: SpriteBoxInterface, pointX: number, pointY: number
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
