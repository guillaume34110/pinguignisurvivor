import { GameData } from "../StartData/StartData";

export const heroMove = ({hero, keys: {keyState}}: GameData) => {


    let speedX = 0
    let speedY = 0


    if (keyState.down) {
        speedX += hero.moveSpeed
        hero.sprite.sprite = hero.sprite.front
    }
    if (keyState.up) {
        speedX -= hero.moveSpeed
        hero.sprite.sprite = hero.sprite.back
    }

    if (keyState.right) {
        speedY += hero.moveSpeed
        hero.sprite.sprite =hero.sprite.right
    }
    if (keyState.left) {
        speedY -= hero.moveSpeed
        hero.sprite.sprite =  hero.sprite.left
    }

    if (speedX !== 0 && speedY === 0) hero.spriteBox.x += speedX
    if (speedY !== 0 && speedX === 0) hero.spriteBox.y += speedY
    if (speedY !== 0 && speedX !== 0) {

        hero.spriteBox.x += speedX * 0.8
        hero.spriteBox.y += speedY * 0.8
    }


}

