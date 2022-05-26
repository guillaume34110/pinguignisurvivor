import {GameData} from "../StartData/StartData";
import {heroProjectilesMove} from "./HeroProjectileFunctions/HeroProjectileMove";
import {heroProjectileCollisions} from "./HeroProjectileFunctions/HeroProjectileCollision";

export const heroProjectileUpdate = (gameData:GameData) => {
    heroProjectilesMove(gameData)
    heroProjectileCollisions(gameData)
}