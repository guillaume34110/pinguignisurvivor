import rabbitFront from "../../Assets/pinguiny/rabbit.png";
import rabbitBack from "../../Assets/pinguiny/rabbit-back.png"
import rabbitLat from "../../Assets/pinguiny/rabbit-lateral.png"
import batFront from "../../Assets/pinguiny/bat-front.png"
import batBack from "../../Assets/pinguiny/bat-back.png"
import batLat from "../../Assets/pinguiny/bat-lateral.png"
import mouseFront from "../../Assets/pinguiny/mouse-front.png"
import mouseBack from "../../Assets/pinguiny/mouse-back.png"
import mouseLat from "../../Assets/pinguiny/mouse-lateral.png"
import mouseLeft from "../../Assets/pinguiny/mousele-left.png"
import { CreaturesSprite } from "../../Core/Creatures/CreaturesSprite";
import { scaling } from '../../Core/Scaling/scaling';

import * as PIXI from 'pixi.js'
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
const mouseRightImage = new Image()
mouseRightImage.src = mouseLat
const mouseLeftImage = new Image()
mouseLeftImage.src = mouseLeft

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
    else if (sprite === CreaturesSprite.mouseLeft) return mouseLeftImage
    else if (sprite === CreaturesSprite.mouseRight) return mouseRightImage

    else return image
}
//pixi

const rabbitFrontTexture = PIXI.Texture.from(rabbitFront);
const rabbitBackTexture = PIXI.Texture.from(rabbitBack);
const rabbitLatTexture = PIXI.Texture.from(rabbitLat);

const batFrontTexture = PIXI.Texture.from(batFront);
const batBackTexture = PIXI.Texture.from(batBack);
const batLatTexture = PIXI.Texture.from(batLat);

const mouseFrontTexture = PIXI.Texture.from(mouseFront);
const mouseBackTexture = PIXI.Texture.from(mouseBack);
const mouseRightTexture = PIXI.Texture.from(mouseLat);
const mouseLeftTexture = PIXI.Texture.from(mouseLeft);

export const selectImgPixi = (sprite: CreaturesSprite ): PIXI.Texture => {
    if (sprite === CreaturesSprite.rabbitFront) return rabbitFrontTexture
    else if (sprite === CreaturesSprite.rabbitBack) return rabbitBackTexture
    else if (sprite === CreaturesSprite.rabbitLeft) return rabbitLatTexture
    else if (sprite === CreaturesSprite.rabbitRight) return rabbitLatTexture
    else if (sprite === CreaturesSprite.batFront) return batFrontTexture
    else if (sprite === CreaturesSprite.batBack) return batBackTexture
    else if (sprite === CreaturesSprite.batLeft) return batLatTexture
    else if (sprite === CreaturesSprite.batRight) return batLatTexture
    else if (sprite === CreaturesSprite.mouseFront) return mouseFrontTexture
    else if (sprite === CreaturesSprite.mouseBack) return mouseBackTexture
    else if (sprite === CreaturesSprite.mouseLeft) return mouseLeftTexture
    else if (sprite === CreaturesSprite.mouseRight) return mouseRightTexture

    else return PIXI.Texture.EMPTY;
}