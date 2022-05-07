import {GameData} from "../../StartData/StartData";
import {spriteBoxSetDirectionAccordingOtherSpriteBox} from "../../Utilities/directionSpriteBox";

export const moveEnemies = (gameData: GameData) => {
   gameData.enemies.forEach(enemy => {

       spriteBoxSetDirectionAccordingOtherSpriteBox(enemy.spriteBox , gameData.hero.spriteBox)

    })
}