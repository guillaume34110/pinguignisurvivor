import {GameData} from "../StartData/StartData.js"
//1280/720
export const camera = (gameData: GameData) => {
    gameData.camera.y = gameData.hero.spriteBox.x - 600
    gameData.camera.x = gameData.hero.spriteBox.y  -150
}