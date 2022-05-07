import {GameData} from "../../StartData/StartData";
import {enemies} from "../enemies";
let spawnCounter  = 0
export const spawnEnemies = (gameData:GameData) => {
    spawnCounter++
    if (spawnCounter === 300) {
        spawnCounter = 0
        gameData.enemies.push(JSON.parse(JSON.stringify(enemies.rabbit)))
        const lastRabbit = gameData.enemies[gameData.enemies.length-1]
        lastRabbit.spriteBox.x = (gameData.hero.spriteBox.x * Math.random()*2)
        lastRabbit.spriteBox.y = (gameData.hero.spriteBox.y * Math.random()*2)
    }
}