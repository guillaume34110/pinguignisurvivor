import {GameData} from "../../StartData/StartData";
import {
    spriteBoxSetDirectionAccordingOtherSpriteBox,
    spriteBoxSetDirectionAccordingOtherSpriteBoxLite
} from "../../Utilities/directionSpriteBox";
import {Enemy} from "../Enemy";

export const moveEnemies = (gameData: GameData) => {
    gameData.enemies.forEach(enemy => {

        spriteBoxSetDirectionAccordingOtherSpriteBoxLite(enemy.spriteBox, gameData.hero.spriteBox)

    })
}

export const enemyCollisionWithBuildingMove = (enemy: Enemy) => {
    enemy.spriteBox.x -= enemy.spriteBox.direction.x * 3
    enemy.spriteBox.y -= enemy.spriteBox.direction.y * 3
}

export const collisionBetweenEnemiesMove = (enemyToMove: Enemy, enemyTarget: Enemy) => {

}
