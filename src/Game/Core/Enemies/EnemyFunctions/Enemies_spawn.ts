import {GameData} from "../../StartData/StartData";
import {EnemyClass} from "../Enemy";
import {enemies} from "../enemies";

let spawnCounter = 0
export const enemies_spawn = (gameData: GameData) => {

    // if (spawnCounter === 0) {
    //     spawnCounter++
    //     for (let i = 0; i < 100; i++) {
    //         // gameData.enemies.push(JSON.parse(JSON.stringify(enemies.mouse)))
    //         gameData.enemies.push(EnemyClass.createEnemy(enemies.mouse))
    //         const lastRabbit = gameData.enemies[gameData.enemies.length - 1]
    //         lastRabbit.spriteBox.x = (500 * Math.random() * 3)
    //         lastRabbit.spriteBox.y = (500 * Math.random() * 3)
    //         lastRabbit.spriteBox.speed +=  Math.random()*0.5
    //         lastRabbit.id = i
    //     }
    // }
}