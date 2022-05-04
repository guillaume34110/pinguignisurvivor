import { GameData } from "../StartData/StartData";

export const heroMove = (gameData:GameData) => { 


let speedX =0
let speedY = 0

if (gameData.keys.keyState.down) {
    speedX += gameData.hero.speed
    gameData.hero.sprite = "pinguigny-front"
}
if (gameData.keys.keyState.up) {
    speedX -= gameData.hero.speed
    gameData.hero.sprite = "pinguigny-back"
}
if (gameData.keys.keyState.right) {
    speedY += gameData.hero.speed
    gameData.hero.sprite = "pinguigny-right"
}
if (gameData.keys.keyState.left) {
    speedY -= gameData.hero.speed
    gameData.hero.sprite = "pinguigny-left"
}

if( speedX !== 0 && speedY  === 0 ) gameData.hero.spriteBox.x += speedX
if( speedY !== 0 && speedX  === 0 ) gameData.hero.spriteBox.y += speedY
if (speedY !== 0 && speedX  !== 0){
    gameData.hero.spriteBox.x += speedX*0.8
    gameData.hero.spriteBox.y += speedY*0.8
}


