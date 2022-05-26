import {GameData} from "../StartData/StartData";
import {heroProjectiles} from "./heroProjectiles";

export const heroProjectileInit = (gameData:GameData) => {
    gameData.heroProjectiles.push(heroProjectiles.snowBall)
}