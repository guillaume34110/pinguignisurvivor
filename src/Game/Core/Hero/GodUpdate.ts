import {GameData} from "../StartData/StartData";
import {hero_SpriteBoxUpdate} from "./GodUtilities/God_HitBox";
import {hero_Move} from "./GodUtilities/God_Move";

export const heroUpdate = (gameData:GameData) => {
    hero_Move(gameData)
    hero_SpriteBoxUpdate(gameData)
}