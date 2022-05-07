import {GameData} from "../StartData/StartData";
import {heroSpriteBoxUpdate} from "./HeroUtilities/HeroHitBox";
import {heroMove} from "./HeroUtilities/HeroMove";

export const heroUpdate = (gameData:GameData) => {
    heroMove(gameData)
    heroSpriteBoxUpdate(gameData)
}