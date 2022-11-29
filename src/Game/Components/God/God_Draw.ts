import {GameData} from "../../Core/StartData/StartData";
import {animation4Frames} from "../Game";
import {selectImg} from "./GodSprites";

export const godRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    targetGl.drawImage( selectImg(gameData.hero.sprite.sprite) , animation4Frames(16), 0, 16, 16, 600, 300, gameData.hero.spriteBox.w, gameData.hero.spriteBox.h)
}

