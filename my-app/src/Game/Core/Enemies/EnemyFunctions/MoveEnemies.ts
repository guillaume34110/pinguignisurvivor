import {GameData} from "../../StartData/StartData";
import {spriteBoxSetDirectionAccordingOtherSpriteBox} from "../../Utilities/directionSpriteBox";
import {Enemy} from "../Enemy";

export const moveEnemies = (gameData: GameData) => {
   gameData.enemies.forEach(enemy => {

       spriteBoxSetDirectionAccordingOtherSpriteBox(enemy.spriteBox , gameData.hero.spriteBox)

    })
}

export const enemyCollisionMove = (enemy : Enemy) => {
    enemy.spriteBox.x -= enemy.spriteBox.direction.x*3
    enemy.spriteBox.y -= enemy.spriteBox.direction.y*3
}