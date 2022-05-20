import terrainImg from "../Assets/terrain/wallpaperbetter.com_1280x1024.jpg";
import {GameData} from "../Core/StartData/StartData";

const image = new Image()
image.src = terrainImg
export const terrainRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const hero = gameData.hero
    targetGl.drawImage(image, hero.spriteBox.x/4 ,hero.spriteBox.y/4 , 1280/4, 720/4, 0, 0, 1280, 720)
}

