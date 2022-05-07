import { GameData, HitBox} from "../../StartData/StartData";
import {heroCollisionMove} from "../../Hero/HeroUtilities/HeroColisionMove";
import {HitBoxCls} from "../../Utilities/HitBoxMatch";

export const buildingCollisionWithHero = (gameData: GameData) => {

    const collision = gameData.building.map(building => {
        if (HitBoxCls.hitBoxMatch(building.hitBox, gameData.hero.hitBox)) return true
        else return false
    })
    if (collision.includes(true)) heroCollisionMove(gameData)
}
