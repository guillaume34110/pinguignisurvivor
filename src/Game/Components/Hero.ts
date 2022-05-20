import {GameData} from "../Core/StartData/StartData";
import heroImg from "../Assets/pinguiny/pinguiny-v2-front.png";
import {animation4Frames} from "./Game";

const image = new Image()
image.src = heroImg
export const heroRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {

    targetGl.drawImage(image, animation4Frames(16), 0, 16, 16, 600, 320, 64, 128)

}

