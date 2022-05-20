import itemImg from "../../Assets/items/img.png";
import {GameData} from "../../Core/StartData/StartData";
import {animation4Frames, isOnScreen} from "../Game";


const image = new Image()
image.src = itemImg

export const itemsRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {


    const hero = gameData.hero

    gameData.items.forEach((item, index) => {
        if (isOnScreen(hero, item.spriteBox)) {
            targetGl.drawImage(
                image,
                animation4Frames(16),
                0,
                16,
                16,
                item.spriteBox.x - hero.spriteBox.x + 600,
                item.spriteBox.y - hero.spriteBox.y + 300,
                item.spriteBox.w,
                item.spriteBox.h
            )
        }
    })

}