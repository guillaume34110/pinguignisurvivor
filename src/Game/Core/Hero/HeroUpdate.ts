import {GameData} from "../StartData/StartData";
import {hero_SpriteBoxUpdate} from "./HeroUtilities/Hero_HitBox";
import {hero_Move} from "./HeroUtilities/Hero_Move";

export const heroUpdate = (gameData:GameData) => {
    hero_Move(gameData)
    hero_SpriteBoxUpdate(gameData)
}