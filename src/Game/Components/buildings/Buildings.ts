import {GameData} from "../../Core/StartData/StartData";
import {isOnScreen} from "../Game";
import buildingImg from "../../Assets/buildings/grey128.png"

const image = new Image()
image.src = buildingImg

export const buildingsRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {


    const hero = gameData.hero

    gameData.building.forEach((building, index) => {
        if (isOnScreen(hero, building.spriteBox)) {
            targetGl.drawImage(image, 0, 0, 128, 128, building.spriteBox.x - hero.spriteBox.x + 600, building.spriteBox.y - hero.spriteBox.y + 300, 128, 128)
        }
    })

}