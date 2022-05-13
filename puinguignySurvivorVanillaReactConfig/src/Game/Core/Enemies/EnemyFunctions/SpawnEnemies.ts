import {GameData} from "../../StartData/StartData";
import {enemies} from "../enemies";
let spawnCounter  = 0
export const spawnEnemies = (gameData:GameData) => {

    if (spawnCounter === 0) {
        spawnCounter++
    for(let i = 0 ; i< 500 ; i++){
        gameData.enemies.push(JSON.parse(JSON.stringify(enemies.rabbit)))
        const lastRabbit = gameData.enemies[gameData.enemies.length-1]
        lastRabbit.spriteBox.x = (500 * Math.random()*2)
        lastRabbit.spriteBox.y = (500 * Math.random()*2)
        lastRabbit.spriteBox.speed +=  Math.random()*0.5
        lastRabbit.id = i
    }
}}