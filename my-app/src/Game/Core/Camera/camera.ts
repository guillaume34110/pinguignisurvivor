import { GameData } from "../StartData/StartData"
//1280/720
export const camera = (gameData:GameData) => { 
    gameData.camera.x = gameData.hero.spriteBox.x - 300
    gameData.camera.y = gameData.hero.spriteBox.y -550
}