import {GameData} from "../StartData/StartData";
import {heroProjectileMoves} from "./HeroProjectileFunctions/HeroProjectileMove";

export const heroProjectileUpdate = (gameData:GameData) => {
    heroProjectileMoves(gameData)
}