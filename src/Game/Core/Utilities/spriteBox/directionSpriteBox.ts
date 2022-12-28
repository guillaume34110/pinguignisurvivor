import { SpriteBoxInterface } from "../../StartData/StartData";
import { LightDirection } from "../ourTrigonometry/LightDirection";
import { LightTrigonometry } from "../ourTrigonometry/LightTrigo";

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

// ----------------------
//  Direction by Radian :
// ---------------------

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
            spriteBoxSetDirectionXYByRadianAngle(spriteBox, DirectionInRadian.DownRight)
            break
        }
        case DirectionEnum.DownLeft: {
            spriteBoxSetDirectionXYByRadianAngle(spriteBox, DirectionInRadian.DownLeft)
            break
        }
        case DirectionEnum.UpLeft: {
            spriteBoxSetDirectionXYByRadianAngle(spriteBox, DirectionInRadian.UpLeft)
            break
        }
        case DirectionEnum.UpRight: {
            spriteBoxSetDirectionXYByRadianAngle(spriteBox, DirectionInRadian.UpRight)
            break
        }
        case DirectionEnum.Random: {
            spriteBoxSetDirectionXYByRadianAngle(spriteBox, Math.random() * Math.PI * 2)
            break
        }
        default: {
            break
        }
    }
}

export const spriteBoxSetDirectionXYByRadianAngle = (
    spriteBox: SpriteBoxInterface, radAngle: number
) => {
    spriteBox.direction.x = Math.cos(radAngle) * spriteBox.speed
    spriteBox.direction.y = Math.sin(radAngle) * spriteBox.speed
}

export const moveSpriteBoxWithRadian = (spriteBox: SpriteBoxInterface) => {
    spriteBox.direction.x = Math.cos(spriteBox.direction.radian) * spriteBox.speed
    spriteBox.direction.y = Math.sin(spriteBox.direction.radian) * spriteBox.speed
    spriteBox.x += spriteBox.direction.x
    spriteBox.y += spriteBox.direction.y
}

export const spriteBoxSetDirectionAccordingOtherSpriteBoxRad = (spriteBoxToMove: SpriteBoxInterface, spriteBoxTarget: SpriteBoxInterface) => {
    const deltaX = spriteBoxTarget.x - spriteBoxToMove.x
    const deltaY = spriteBoxTarget.y - spriteBoxToMove.y
    const tan = deltaY / deltaX
    if (deltaX > 0) spriteBoxToMove.direction.radian = (Math.atan(tan))
    else spriteBoxToMove.direction.radian = (Math.atan(tan)) + Math.PI
}

export const spriteBoxSetRadianDirectionByAngle = (
    spriteBox: SpriteBoxInterface, degreeAngle: number
) => {
    spriteBox.direction.radian += (degreeAngle * Math.PI / 180)
}

// -------------------------
//  Direction by 10Degrees :
// ------------------------

export const DirectionIn10Degrees = {
    Right: 0,
    Down: 27,
    Left: 18,
    Up: 9,
    DownRight: 35,
    DownLeft: 23,
    UpLeft: 14,
    UpRight: 5
}

export const rotateSpriteBox10degreesRight = (spriteBox: SpriteBoxInterface) => {
    LightDirection.add10Degrees(spriteBox)
}

export const rotateSpriteBox10degreesLeft = (spriteBox: SpriteBoxInterface) => {
    LightDirection.remove10Degrees(spriteBox)
}

export const rotateSpriteBoxByX10Degrees = (spriteBox: SpriteBoxInterface, x10Degrees: number) => {
    LightDirection.addX10Degrees(spriteBox, x10Degrees)
}

export const moveSpriteBoxAccording10DegreesDirection = (spriteBox: SpriteBoxInterface) => {
    LightDirection.setXYby10DegreesAngle(spriteBox)
    spriteBox.x += spriteBox.direction.x
    spriteBox.y += spriteBox.direction.y
}

export const spriteBoxSetDirectionXYBy10DegreesAngle = (
    spriteBox: SpriteBoxInterface, degreeAngle: number
) => {
    LightDirection.setXYby10DegreesAngleWithAngle(spriteBox, degreeAngle)
}

export const spriteBoxAddX10DegreesDirection = (
    spriteBox: SpriteBoxInterface, degreeAngle: number
) => {
    spriteBox.direction.degree10 += ~~(36 + degreeAngle / 10) % 36
}

let x = 0 
let y = 0 
export const spriteBoxSetDirectionAccordingOtherSpriteBoxBy10Degrees = (spriteBoxToMove: SpriteBoxInterface, spriteBoxTarget: SpriteBoxInterface) => {
    x =  spriteBoxTarget.x-spriteBoxToMove.x
    y = spriteBoxTarget.y - spriteBoxToMove.y 
    spriteBoxToMove.direction.degree10 = LightTrigonometry.getDirectionIn10degreesModeAccordingXYPointToReach(x, y)
}

// -------------------
//  Direction by x/y :
// ------------------

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

        const stepX = (deltaX / Math.abs(deltaX / spriteBoxToMove.speed)) / 20
        if (Math.abs(spriteBoxToMove.direction.x + ((deltaX / stepX) / 20)) < spriteBoxToMove.speed) {
            spriteBoxToMove.direction.x += (deltaX / stepX) / 20
            spriteBoxToMove.x += (deltaX / stepX) / 20
        }

        const stepY = (deltaY / Math.abs(deltaY / spriteBoxToMove.speed)) / 20
        if (Math.abs(spriteBoxToMove.direction.y + stepY) < spriteBoxToMove.speed) {
            spriteBoxToMove.direction.y += stepY
            spriteBoxToMove.y += stepY
        }
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
