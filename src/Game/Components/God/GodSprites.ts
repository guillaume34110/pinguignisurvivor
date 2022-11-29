import pinguignyFront from "../../Assets/pinguiny/pinguiny-v2-front.png"
import pinguignyBack from "../../Assets/pinguiny/pinguiny-v2-back.png"
import pinguignyLeft from "../../Assets/pinguiny/pinguigny-v2-left.png"
import pinguignyRight from "../../Assets/pinguiny/pinguigny-v2-right.png"
import {EnemiesSprite} from "../../Core/Enemies/EnemiesSprite";
import {GodSprite} from "../../Core/Hero/GodSprite";


const image = new Image()

const pinguignyFrontImage = new Image()
pinguignyFrontImage.src = pinguignyFront
const pinguignyBackImage = new Image()
pinguignyBackImage.src = pinguignyBack
const pinguignyLeftImage = new Image()
pinguignyLeftImage.src = pinguignyLeft
const pinguignyRightImage = new Image()
pinguignyRightImage.src = pinguignyRight

export const selectImg = (sprite: EnemiesSprite | GodSprite): HTMLImageElement => {
    if (sprite === GodSprite.heroFront) return pinguignyFrontImage
    else if (sprite === GodSprite.heroBack) return pinguignyBackImage
    else if (sprite === GodSprite.heroLeft) return pinguignyLeftImage
    else if (sprite === GodSprite.heroRight) return pinguignyRightImage
    else return image
}