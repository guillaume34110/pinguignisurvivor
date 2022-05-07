import {GameData} from "../StartData/StartData";
import {heroSpriteBoxUpdate} from "./HeroSpriteBox";
import {heroMove} from "./HeroMove";
import {heroCollisionMove} from "./HeroColisionMove";

export const heroUpdate = (gameData:GameData) => {
    heroMove(gameData)
    heroSpriteBoxUpdate(gameData)
}