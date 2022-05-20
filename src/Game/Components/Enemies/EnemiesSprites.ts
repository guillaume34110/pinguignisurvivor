import rabbitFront from "../../Assets/pinguiny/rabbit.png";
import rabbitBack from "../../Assets/pinguiny/rabbit-back.png"
import rabbitLat from "../../Assets/pinguiny/rabbit-lateral.png"
import batFront from "../../Assets/pinguiny/bat-front.png"
import batBack from "../../Assets/pinguiny/bat-back.png"
import batLat from "../../Assets/pinguiny/bat-lateral.png"
import mouseFront from "../../Assets/pinguiny/mouse-front.png"
import mouseBack from "../../Assets/pinguiny/mouse-back.png"
import mouseLat from "../../Assets/pinguiny/mouse-lateral.png"
import {EnemiesSprite} from "../../Core/Enemies/EnemiesSprite";
import {HeroSprite} from "../../Core/Hero/HeroSprite";

const image = new Image()

const rabbitFrontImage = new Image()
rabbitFrontImage.src = rabbitFront
const rabbitBackImage = new Image()
rabbitBackImage.src = rabbitBack
const rabbitLatImage = new Image()
rabbitLatImage.src = rabbitLat

const batFrontImage = new Image()
batFrontImage.src = batFront
const batBackImage = new Image()
batBackImage.src = batBack
const batLatImage = new Image()
batLatImage.src = batLat

const mouseFrontImage = new Image()
mouseFrontImage.src = mouseFront
const mouseBackImage = new Image()
mouseBackImage.src = mouseBack
const mouseLatImage = new Image()
mouseLatImage.src = mouseLat

export const selectImg = (sprite: EnemiesSprite | HeroSprite): HTMLImageElement => {
    if (sprite === EnemiesSprite.rabbitFront) return rabbitFrontImage
    else if (sprite === EnemiesSprite.rabbitBack) return rabbitBackImage
    else if (sprite === EnemiesSprite.rabbitLateral) return rabbitLatImage
    else if (sprite === EnemiesSprite.batFront) return batFrontImage
    else if (sprite === EnemiesSprite.batBack) return batBackImage
    else if (sprite === EnemiesSprite.batLateral) return batLatImage
    else if (sprite === EnemiesSprite.mouseFront) return mouseFrontImage
    else if (sprite === EnemiesSprite.mouseBack) return mouseBackImage
    else if (sprite === EnemiesSprite.mouseLateral) return mouseLatImage
    else return image
}