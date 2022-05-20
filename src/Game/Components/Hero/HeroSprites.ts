import pinguignyFront from "../../Assets/pinguiny/pinguiny-v2-front.png"
import pinguignyBack from "../../Assets/pinguiny/pinguiny-v2-back.png"
import pinguignyLeft from "../../Assets/pinguiny/pinguigny-v2-left.png"
import pinguignyRight from "../../Assets/pinguiny/pinguigny-v2-right.png"
import {EnemiesSprite} from "../../Core/Enemies/EnemiesSprite";
import {HeroSprite} from "../../Core/Hero/HeroSprite";


const image = new Image()

const pinguignyFrontImage = new Image()
pinguignyFrontImage.src = pinguignyFront
const pinguignyBackImage = new Image()
pinguignyBackImage.src = pinguignyBack
const pinguignyLeftImage = new Image()
pinguignyLeftImage.src = pinguignyLeft
const pinguignyRightImage = new Image()
pinguignyRightImage.src = pinguignyRight

export const selectImg = (sprite: EnemiesSprite | HeroSprite): HTMLImageElement => {
    if (sprite === HeroSprite.heroFront) return pinguignyFrontImage
    else if (sprite === HeroSprite.heroBack) return pinguignyBackImage
    else if (sprite === HeroSprite.heroLeft) return pinguignyLeftImage
    else if (sprite === HeroSprite.heroRight) return pinguignyRightImage
    else return image
}