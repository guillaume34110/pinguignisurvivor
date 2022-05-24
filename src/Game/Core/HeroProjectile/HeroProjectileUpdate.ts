import {GameData} from "../StartData/StartData";
import {heroProjectileMoves} from "./HeroProjectileFunctions/HeroProjectileMove";
import {heroProjectileCollisions} from "./HeroProjectileFunctions/HeroProjectileCollision";

export const heroProjectileUpdate = (gameData:GameData) => {
    heroProjectileMoves(gameData)
    heroProjectileCollisions(gameData)
}