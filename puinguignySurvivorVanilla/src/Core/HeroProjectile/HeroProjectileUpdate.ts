import {GameData} from "../StartData/StartData.js";
import { heroProjectileMoves} from "./HeroProjectileFunctions/HeroProjectileMove.js";

export const heroProjectileUpdate = (gameData:GameData) => {
    heroProjectileMoves(gameData)
}