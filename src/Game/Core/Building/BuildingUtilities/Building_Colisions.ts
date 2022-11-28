import {GameData} from "../../StartData/StartData";
import {hero_CollisionMove} from "../../Hero/HeroUtilities/Hero_ColisionMove";
import {enemies_CollisionWithBuildingMove} from "../../Enemies/EnemyFunctions/Enemies_Move";
import {hitBoxMatch} from "../../Utilities/HitBoxMatch";

export const building_CollisionWithHero = (gameData: GameData) => {

    const collision = gameData.building.map(building => {
        if (hitBoxMatch(building.hitBox, gameData.hero.hitBox)) return true
        else return false
    })
    if (collision.includes(true)) hero_CollisionMove(gameData)
}

export const buildingCollisionWithEnemies = (gameData: GameData) => {
    gameData.building.forEach(building => {
        gameData.enemies.forEach(enemy => {
            if (hitBoxMatch(building.hitBox, enemy.hitBox)) enemies_CollisionWithBuildingMove(enemy)
        })
    })
}