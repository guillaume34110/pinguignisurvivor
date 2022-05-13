import {GameData} from "../../StartData/StartData.js";
import {heroCollisionMove} from "../../Hero/HeroUtilities/HeroColisionMove.js";
import {HitBoxCls} from "../../Utilities/HitBoxMatch.js";
import {enemyCollisionWithBuildingMove} from "../../Enemies/EnemyFunctions/MoveEnemies.js";

export const buildingCollisionWithHero = (gameData: GameData) => {

    const collision = gameData.building.map(building => {
        if (HitBoxCls.hitBoxMatch(building.hitBox, gameData.hero.hitBox)) return true
        else return false
    })
    if (collision.includes(true)) heroCollisionMove(gameData)
}

export const buildingCollisionWithEnemies = (gameData : GameData) => {
     gameData.building.forEach(building => {
        gameData.enemies.forEach(enemy => {
         if (HitBoxCls.hitBoxMatch(building.hitBox, enemy.hitBox)) enemyCollisionWithBuildingMove(enemy)
     } )
    })
}