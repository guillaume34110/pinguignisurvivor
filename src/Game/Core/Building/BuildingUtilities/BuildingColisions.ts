import {GameData} from "../../StartData/StartData";
import {heroCollisionMove} from "../../Hero/HeroUtilities/HeroColisionMove";
import {enemyCollisionWithBuildingMove} from "../../Enemies/EnemyFunctions/MoveEnemies";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";

export const buildingCollisionWithHero = (gameData: GameData) => {

    const collision = gameData.building.map(building => {
        if (hitBoxMatch(building.hitBox, gameData.hero.hitBox)) return true
        else return false
    })
    if (collision.includes(true)) heroCollisionMove(gameData)
}

export const buildingCollisionWithEnemies = (gameData: GameData) => {
    gameData.building.forEach(building => {
        gameData.enemies.forEach(enemy => {
            if (hitBoxMatch(building.hitBox, enemy.hitBox)) enemyCollisionWithBuildingMove(enemy)
        })
    })
}