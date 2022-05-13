import {GameData} from "../StartData/StartData"
//1280/720
export const camera = (gameData: GameData) => {
    gameData.camera.x = gameData.hero.spriteBox.x - 100
    gameData.camera.y = gameData.hero.spriteBox.y - 500
}