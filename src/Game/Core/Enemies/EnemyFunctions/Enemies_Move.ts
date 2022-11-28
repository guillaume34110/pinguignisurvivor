import {GameData, SpriteBoxInterface} from "../../StartData/StartData";
import {Enemy} from "../Enemy";
import {enemies_CollisionWithEnemies} from "./Enemies_Collision";

export const enemies_Move = (gameData: GameData) => {
    const spriteBoxSetDirectionAccordingOtherSpriteBoxLite = (
        enemyToMove: Enemy, spriteBoxTarget: SpriteBoxInterface
    ) => {
        if (enemyToMove.spriteBox.speed !== 0) {
            const deltaX = spriteBoxTarget.x - enemyToMove.spriteBox.x
            const deltaY = spriteBoxTarget.y - enemyToMove.spriteBox.y

            const stepX = Math.abs(deltaX / enemyToMove.spriteBox.speed)
            enemyToMove.spriteBox.x += deltaX / stepX
            enemyToMove.spriteBox.direction.x = deltaX / stepX

            const stepY = Math.abs(deltaY / enemyToMove.spriteBox.speed)
            enemyToMove.spriteBox.y += deltaY / stepY
            enemies_CollisionWithEnemies(gameData, "y", enemyToMove)
            enemyToMove.spriteBox.direction.y = deltaY / stepY
            enemies_CollisionWithEnemies(gameData, "x", enemyToMove)

        }
    }
    gameData.enemies.forEach(enemy => {
        spriteBoxSetDirectionAccordingOtherSpriteBoxLite(enemy, gameData.hero.spriteBox)
    })
}

export const enemies_CollisionWithBuildingMove = (enemy: Enemy) => {
    enemy.spriteBox.x -= enemy.spriteBox.direction.x * 18
    enemy.spriteBox.y -= enemy.spriteBox.direction.y * 18
}

export const enemies_collisionBetweenMove = (enemyToMove: Enemy, type: string) => {
    if (type === "y") enemyToMove.spriteBox.y -= enemyToMove.spriteBox.direction.y
    if (type === "x") enemyToMove.spriteBox.x -= enemyToMove.spriteBox.direction.x
}
