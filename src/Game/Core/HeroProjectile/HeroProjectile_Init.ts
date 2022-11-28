import {GameData} from "../StartData/StartData";
import {heroProjectiles} from "./heroProjectiles";
import {HeroProjectileClass, HeroProjectileClass2} from "./HeroProjectile";

export const heroProjectileInit = (gameData:GameData) => {
    for (let i = 0 ; i<200 ; i++){
        gameData.heroProjectiles.push( new HeroProjectileClass2(i))
    }
}