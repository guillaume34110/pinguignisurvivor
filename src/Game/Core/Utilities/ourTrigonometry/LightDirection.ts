import { SpriteBox } from "../../StartData/StartData"
import { LightTrigo } from "./LightTrigo"

export abstract class LightDirection {
    
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
        const degree = Math.round(x10Degrees) % 36
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
        const checkedDirection = Math.abs(spriteBox.direction.degree10 % 36)
        const coupleXY = LightTrigo.coordinateCoupleBy10DegreesStep0To350Degrees[checkedDirection]
        spriteBox.direction.x = coupleXY.x * spriteBox.speed
        spriteBox.direction.y = coupleXY.y * spriteBox.speed
    }

}
