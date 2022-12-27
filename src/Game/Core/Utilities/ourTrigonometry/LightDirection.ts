import { SpriteBox } from "../../StartData/StartData"
import { LightTrigonometry } from "./LightTrigo"

export const LightDirection = {

    add10Degrees(spriteBox: SpriteBox) {
        if (spriteBox.direction.degree10 === 35) {
            spriteBox.direction.degree10 = 0
        } else spriteBox.direction.degree10 += 1
    },

    remove10Degrees(spriteBox: SpriteBox) {
        if (spriteBox.direction.degree10 === 0) {
            spriteBox.direction.degree10 = 35
        } else spriteBox.direction.degree10 -= 1
    },

    addX10Degrees(spriteBox: SpriteBox, x10Degrees: number) {
        const degree = (~~x10Degrees) % 36
        if (x10Degrees < 0) {
            const newDirection = spriteBox.direction.degree10 + degree
            if (newDirection < 0) {
                spriteBox.direction.degree10 = Math.abs(newDirection % 36)
            } else {
                spriteBox.direction.degree10 = newDirection
            }
        } else {
            const newDirection = spriteBox.direction.degree10 + degree
            if (newDirection > 35) {
                spriteBox.direction.degree10 = newDirection % 36
            } else {
                spriteBox.direction.degree10 = newDirection
            }
        }
    },

    setXYby10DegreesAngle(spriteBox: SpriteBox) {
        const checkedDirection = (~~spriteBox.direction.degree10 + 36) % 36
        const coupleXY = LightTrigonometry.coordinateCoupleBy10DegreesStep0To350Degrees[checkedDirection]
        spriteBox.direction.x = coupleXY.x * spriteBox.speed
        spriteBox.direction.y = coupleXY.y * spriteBox.speed
    },

    setXYby10DegreesAngleWithAngle(spriteBox: SpriteBox, degree10Angle: number) {
        const checkedDirection = (~~degree10Angle + 36) % 36
        const coupleXY = LightTrigonometry.coordinateCoupleBy10DegreesStep0To350Degrees[checkedDirection]
        spriteBox.direction.x = coupleXY.x * spriteBox.speed
        spriteBox.direction.y = coupleXY.y * spriteBox.speed
    },

    setDirectionIn10degreesModeAccordingXYPointToReach(spriteBox: SpriteBox, x: number, y: number) {
        spriteBox.direction.degree10 = LightTrigonometry.getDirectionIn10degreesModeAccordingXYPointToReach(x, y)
    },

}

abstract class LightDirectionClass {

    static add10Degrees(spriteBox: SpriteBox) {
        if (spriteBox.direction.degree10 === 35) {
            spriteBox.direction.degree10 = 0
        } else spriteBox.direction.degree10 += 1
    }

    static remove10Degrees(spriteBox: SpriteBox) {
        if (spriteBox.direction.degree10 === 0) {
            spriteBox.direction.degree10 = 35
        } else spriteBox.direction.degree10 -= 1
    }

    static addX10Degrees(spriteBox: SpriteBox, x10Degrees: number) {
        const degree = (~~x10Degrees) % 36
        if (x10Degrees < 0) {
            const newDirection = spriteBox.direction.degree10 + degree
            if (newDirection < 0) {
                spriteBox.direction.degree10 = Math.abs(newDirection % 36)
            } else {
                spriteBox.direction.degree10 = newDirection
            }
        } else {
            const newDirection = spriteBox.direction.degree10 + degree
            if (newDirection > 35) {
                spriteBox.direction.degree10 = newDirection % 36
            } else {
                spriteBox.direction.degree10 = newDirection
            }
        }
    }

    static setXYbyAngle(spriteBox: SpriteBox) {
        const checkedDirection = (~~spriteBox.direction.degree10 + 36) % 36
        const coupleXY = LightTrigonometry.coordinateCoupleBy10DegreesStep0To350Degrees[checkedDirection]
        spriteBox.direction.x = coupleXY.x * spriteBox.speed
        spriteBox.direction.y = coupleXY.y * spriteBox.speed
    }

}
