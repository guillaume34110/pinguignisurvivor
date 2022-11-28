import {GameData} from "../StartData/StartData";
import {enemies_spawn} from "./EnemyFunctions/Enemies_spawn";
import {enemies_Move} from "./EnemyFunctions/Enemies_Move";
import {enemies_HitBox} from "./EnemyFunctions/Enemies_HitBox";
import {collision_EnemiesWithHero} from "./EnemyFunctions/Collision_EnemyWithHero";

export const enemiesUpdate = (gameData:GameData) => {
    enemies_spawn(gameData)
    enemies_HitBox(gameData)
    enemies_Move(gameData)
    collision_EnemiesWithHero(gameData)
}