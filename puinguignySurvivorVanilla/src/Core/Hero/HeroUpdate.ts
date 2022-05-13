import {GameData} from "../StartData/StartData.js";
import {heroSpriteBoxUpdate} from "./HeroUtilities/HeroHitBox.js";
import {heroMove} from "./HeroUtilities/HeroMove.js";

export const heroUpdate = (gameData:GameData) => {
    heroMove(gameData)
    heroSpriteBoxUpdate(gameData)
}