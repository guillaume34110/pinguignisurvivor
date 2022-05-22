import {GameData} from "../../StartData/StartData";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";

export const itemCollisions = (gameData: GameData) => {
    gameData.items.forEach((item) => {
        if (hitBoxMatch(gameData.hero.hitBox, item.hitBox)) {

            item.sleepPosition() // en -999_999 pour l'instant

            // todo create hero class with function IncreaseExperience() and levelUp()
            gameData.hero.xpActual += item.value
            gameData.hero.xpTotal += item.value
            if (gameData.hero.xpActual >= gameData.hero.xpToReach) {
                gameData.hero.xpToReach += gameData.hero.xpActual
                gameData.hero.xpActual = 0
                gameData.hero.level++
                console.log("levelUP => " + gameData.hero.level)
            }
            console.log("GAIN_XP => " + gameData.hero.xpActual + "/" + gameData.hero.xpToReach + " | total: " + gameData.hero.xpTotal)
        }
    })
}