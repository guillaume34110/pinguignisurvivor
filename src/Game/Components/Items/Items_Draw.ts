import itemImg from "../../Assets/items/img.png";
import {GameData} from "../../Core/StartData/StartData";
import {animation4Frames, isOnScreen} from "../Game";
import {selectImg} from "./ItemsSprites";

const image = new Image()
image.src = itemImg

export const items_Refresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const god = gameData.god

    gameData.items.forEach((item, index) => {
        if (isOnScreen(god, item.spriteBox)) {
            targetGl.drawImage(
                selectImg(item.sprite),
                animation4Frames(16),
                0,
                16,
                16,
                item.spriteBox.x - god.spriteBox.x + 600,
                item.spriteBox.y - god.spriteBox.y + 300,
                item.spriteBox.w,
                item.spriteBox.h
            )
        }
    })
}