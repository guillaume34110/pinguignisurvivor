import {GameData} from "../../StartData/StartData";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";
import {setPositionSpriteBoxHitBox} from "../../Utilities/spriteBox/positionSpriteBox";

export const item_Collisions = (gameData: GameData) => {
    gameData.items.forEach((item) => {
        if (hitBoxMatch(gameData.hero.hitBox, item.hitBox)) {

            setPositionSpriteBoxHitBox(item, -999_999,-999_999)

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
