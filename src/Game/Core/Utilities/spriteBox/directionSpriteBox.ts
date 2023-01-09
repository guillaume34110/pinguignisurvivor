import { SpriteBoxInterface } from "../../StartData/StartData";
import { LightDirection } from "../OurTrigonometry/LightDirection";
import { LightTrigonometry } from "../OurTrigonometry/LightTrigo";


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
    spriteBox.direction.degree10 += Math.round(36 + degreeAngle / 10) % 36
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
