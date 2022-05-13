import {GameData} from "../StartData/StartData";
import {heroProjectileMove, heroProjectileMoves} from "./HeroProjectileFunctions/HeroProjectileMove";

export const heroProjectileUpdate = (gameData:GameData) => {
    heroProjectileMoves(gameData)
}