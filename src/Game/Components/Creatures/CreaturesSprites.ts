import rabbitFront from "../../Assets/creatures/rabbit.png";
import rabbitBack from "../../Assets/creatures/rabbit-back.png"
import rabbitLeft from "../../Assets/creatures/rabbit-left.png"
import rabbitRight from "../../Assets/creatures/rabbit-right.png"
import rabbitMaleFront from "../../Assets/creatures/rabbit-male-front.png";
import rabbitMaleBack from "../../Assets/creatures/rabbit-male-back.png"
import rabbitMaleLeft from "../../Assets/creatures/rabbit-male-left.png"
import rabbitMaleRight from "../../Assets/creatures/rabbit-male-right.png"
import batFront from "../../Assets/creatures/bat-front.png"
import batBack from "../../Assets/creatures/bat-back.png"
import batLat from "../../Assets/creatures/bat-lateral.png"
import mouseFront from "../../Assets/creatures/mouse-front.png"
import mouseBack from "../../Assets/creatures/mouse-back.png"
import mouseLat from "../../Assets/creatures/mouse-lateral.png"
import mouseLeft from "../../Assets/creatures/mousele-left.png"
import mouseMaleFront from "../../Assets/creatures/mouse-male-front.png"
import mouseMaleBack from "../../Assets/creatures/mouse-male-back.png"
import mouseMaleLat from "../../Assets/creatures/mouse-male-right.png"
import mouseMaleLeft from "../../Assets/creatures/mouse-male-left.png"
import wormsLeft from "../../Assets/creatures/ItemCreature/rock-worms-left.png"
import wormsRight from "../../Assets/creatures/ItemCreature/rock-worms-right.png"
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
const rabbitMaleLeftTexture = PIXI.Texture.from(rabbitMaleLeft);

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

const wormsLeftTexture = PIXI.Texture.from(wormsLeft)
const wormsRightTexture = PIXI.Texture.from(wormsRight)

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
        case CreatureSex.Sterile:
            switch (sprite) {
                case CreaturesSprite.wormsLeft: return wormsLeftTexture
                case CreaturesSprite.wormsRight: return wormsRightTexture
                default: return PIXI.Texture.EMPTY
            }
        default: return PIXI.Texture.EMPTY
    }
}



