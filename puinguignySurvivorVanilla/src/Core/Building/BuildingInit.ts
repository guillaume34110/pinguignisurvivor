import {GameData} from "../StartData/StartData.js";

export const buildingInit = (gameData:GameData) => {
    gameData.building[0].spriteBox.x=1000
    gameData.building[0].spriteBox.y=1000
    gameData.building[1].spriteBox.x=1250
    gameData.building[1].spriteBox.y=1250
    gameData.building[2].spriteBox.x=500
    gameData.building[2].spriteBox.y=500
}