import {GameData} from "../StartData/StartData";
import {enemies} from "../Enemies/enemies";
import {heroProjectiles} from "./heroProjectiles";

export const heroProjectile_Init = (gameData:GameData) => {
    for (let i = 0 ; i<200 ; i++){
        gameData.enemies.push(enemies.mouse)
        gameData.heroProjectiles.push( heroProjectiles.snowBall)
    }
}