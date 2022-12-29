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

import * as PIXI from 'pixi.js'
import { CreatureSex } from '../../Core/Creatures/Creature';


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
 
        switch (sex) {
            case CreatureSex.Female:
                switch (sprite) {
                    case CreaturesSprite.rabbitFront: return rabbitFrontTexture
                    case CreaturesSprite.rabbitBack: return rabbitBackTexture
                    case CreaturesSprite.rabbitLeft: return rabbitLeftTexture
                    case CreaturesSprite.rabbitRight: return rabbitRightTexture
                    case CreaturesSprite.batFront: return batFrontTexture
                    case CreaturesSprite.batBack: return batBackTexture
                    case CreaturesSprite.batLeft: return batLatTexture
                    case CreaturesSprite.batRight: return batLatTexture
                    case CreaturesSprite.mouseFront: return mouseFrontTexture
                    case CreaturesSprite.mouseBack: return mouseBackTexture
                    case CreaturesSprite.mouseLeft: return mouseLeftTexture
                    case CreaturesSprite.mouseRight: return mouseRightTexture
                    default: return PIXI.Texture.EMPTY
                }
            case CreatureSex.Male:
                switch (sprite) {
                    case CreaturesSprite.rabbitFront: return rabbitMaleFrontTexture
                    case CreaturesSprite.rabbitBack: return rabbitMaleBackTexture
                    case CreaturesSprite.rabbitLeft: return rabbitMaleLeftTexture
                    case CreaturesSprite.rabbitRight: return rabbitMaleRightTexture
                    case CreaturesSprite.batFront: return batFrontTexture
                    case CreaturesSprite.batBack: return batBackTexture
                    case CreaturesSprite.batLeft: return batLatTexture
                    case CreaturesSprite.batRight: return batLatTexture
                    case CreaturesSprite.mouseFront: return mouseMaleFrontTexture
                    case CreaturesSprite.mouseBack: return mouseMaleBackTexture
                    case CreaturesSprite.mouseLeft: return mouseMaleLeftTexture
                    case CreaturesSprite.mouseRight: return mouseMaleRightTexture
                    default: return PIXI.Texture.EMPTY
                }
            default: return PIXI.Texture.EMPTY
        }
    }



