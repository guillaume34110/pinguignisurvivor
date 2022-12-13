import rabbitFront from "../../Assets/pinguiny/rabbit.png";
import rabbitBack from "../../Assets/pinguiny/rabbit-back.png"
import rabbitLat from "../../Assets/pinguiny/rabbit-lateral.png"
import batFront from "../../Assets/pinguiny/bat-front.png"
import batBack from "../../Assets/pinguiny/bat-back.png"
import batLat from "../../Assets/pinguiny/bat-lateral.png"
import mouseFront from "../../Assets/pinguiny/mouse-front.png"
import mouseBack from "../../Assets/pinguiny/mouse-back.png"
import mouseLat from "../../Assets/pinguiny/mouse-lateral.png"
import { CreaturesSprite } from "../../Core/Creatures/CreaturesSprite";

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

export const selectImg = (sprite: CreaturesSprite ): HTMLImageElement => {
    if (sprite === CreaturesSprite.rabbitFront) return rabbitFrontImage
    else if (sprite === CreaturesSprite.rabbitBack) return rabbitBackImage
    else if (sprite === CreaturesSprite.rabbitLeft) return rabbitLatImage
    else if (sprite === CreaturesSprite.rabbitRight) return rabbitLatImage
    else if (sprite === CreaturesSprite.batFront) return batFrontImage
    else if (sprite === CreaturesSprite.batBack) return batBackImage
    else if (sprite === CreaturesSprite.batLeft) return batLatImage
    else if (sprite === CreaturesSprite.batRight) return batLatImage
    else if (sprite === CreaturesSprite.mouseFront) return mouseFrontImage
    else if (sprite === CreaturesSprite.mouseBack) return mouseBackImage
    else if (sprite === CreaturesSprite.mouseLeft) return mouseLatImage
    else if (sprite === CreaturesSprite.mouseRight) return mouseLatImage

    else return image
}