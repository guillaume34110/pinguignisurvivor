import rabbitFront from "../../Assets/pinguiny/rabbit.png";
import rabbitBack from "../../Assets/pinguiny/rabbit-back.png"
import rabbitLat from "../../Assets/pinguiny/rabbit-lateral.png"
import rabbitLeft from "../../Assets/pinguiny/rabbit-left.png"
import rabbitRight from "../../Assets/pinguiny/rabbit-right.png"
import rabbitMaleFront from "../../Assets/pinguiny/rabbit-male-front.png";
import rabbitMaleBack from "../../Assets/pinguiny/rabbit-male-back.png"
import rabbitMaleLeft from "../../Assets/pinguiny/rabbit-male-left.png"
import rabbitMaleRight from "../../Assets/pinguiny/rabbit-male-right.png"
import batFront from "../../Assets/pinguiny/bat-front.png"
import batBack from "../../Assets/pinguiny/bat-back.png"
import batLat from "../../Assets/pinguiny/bat-lateral.png"
import mouseFront from "../../Assets/pinguiny/mouse-front.png"
import mouseBack from "../../Assets/pinguiny/mouse-back.png"
import mouseLat from "../../Assets/pinguiny/mouse-lateral.png"
import mouseLeft from "../../Assets/pinguiny/mousele-left.png"
import mouseMaleFront from "../../Assets/pinguiny/mouse-male-front.png"
import mouseMaleBack from "../../Assets/pinguiny/mouse-male-back.png"
import mouseMaleLat from "../../Assets/pinguiny/mouse-male-right.png"
import mouseMaleLeft from "../../Assets/pinguiny/mouse-male-left.png"
import { CreaturesSprite } from "../../Core/Creatures/CreaturesSprite";
import { scaling } from '../../Core/Scaling/scaling';

import * as PIXI from 'pixi.js'
import { CreatureSex } from '../../Core/Creatures/Creature';
import { invert } from "../Utils/PngColorInverter";
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

export const selectImg = (sprite: CreaturesSprite): HTMLImageElement => {
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
const rabbitRightTexture = PIXI.Texture.from(rabbitLeft);
const rabbitLeftTexture = PIXI.Texture.from(rabbitRight);

const rabbitMaleFrontTexture = PIXI.Texture.from(rabbitMaleFront);
const rabbitMaleBackTexture = PIXI.Texture.from(rabbitMaleBack);
const rabbitMaleRightTexture = PIXI.Texture.from(rabbitMaleRight);
const rabbitMaleLeftTexture =PIXI.Texture.from(rabbitMaleLeft);

const batFrontTexture = PIXI.Texture.from(batFront);
const batBackTexture = PIXI.Texture.from(batBack);
const batLatTexture = PIXI.Texture.from(batLat);

const mouseFrontTexture = PIXI.Texture.from(mouseFront);
const mouseBackTexture = PIXI.Texture.from(mouseBack);
const mouseRightTexture = PIXI.Texture.from(mouseLat);
const mouseLeftTexture = PIXI.Texture.from(mouseLeft);

const mouseMaleFrontTexture = PIXI.Texture.from(mouseMaleFront);
const mouseMaleBackTexture = PIXI.Texture.from(mouseMaleBack);
const mouseMaleRightTexture = PIXI.Texture.from(mouseMaleLat);
const mouseMaleLeftTexture = PIXI.Texture.from(mouseMaleLeft);


export const selectImgPixi = (sprite: CreaturesSprite, sex: CreatureSex): PIXI.Texture => {
    if (sex === CreatureSex.Female) {

        if (sprite === CreaturesSprite.rabbitFront) return rabbitFrontTexture
        else if (sprite === CreaturesSprite.rabbitBack) return rabbitBackTexture
        else if (sprite === CreaturesSprite.rabbitLeft) return rabbitLeftTexture
        else if (sprite === CreaturesSprite.rabbitRight) return rabbitRightTexture
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
    else {
        
        if (sprite === CreaturesSprite.rabbitFront) return rabbitMaleFrontTexture
        else if (sprite === CreaturesSprite.rabbitBack) return rabbitMaleBackTexture
        else if (sprite === CreaturesSprite.rabbitLeft) return rabbitMaleLeftTexture
        else if (sprite === CreaturesSprite.rabbitRight) return rabbitMaleRightTexture
        else if (sprite === CreaturesSprite.batFront) return batFrontTexture
        else if (sprite === CreaturesSprite.batBack) return batBackTexture
        else if (sprite === CreaturesSprite.batLeft) return batLatTexture
        else if (sprite === CreaturesSprite.batRight) return batLatTexture
        else if (sprite === CreaturesSprite.mouseFront) return mouseMaleFrontTexture
        else if (sprite === CreaturesSprite.mouseBack) return mouseMaleBackTexture
        else if (sprite === CreaturesSprite.mouseLeft) return mouseMaleLeftTexture
        else if (sprite === CreaturesSprite.mouseRight) return mouseMaleRightTexture
        else return PIXI.Texture.EMPTY;
    }

}