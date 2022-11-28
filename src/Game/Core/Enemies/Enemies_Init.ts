import {GameData, HitBox} from "../StartData/StartData";
import {enemies} from "./enemies";

export const Enemy_Init = (gameData: GameData) => {
    for (let i = 0; i < 200; i++) {
        gameData.enemies.push(enemies.rabbit)
        const lastRabbit = gameData.enemies[gameData.enemies.length - 1]
        lastRabbit.spriteBox.x = (500 * Math.random() * 3)
        lastRabbit.spriteBox.y = (500 * Math.random() * 3)
        lastRabbit.spriteBox.speed +=  Math.random()*0.5
        lastRabbit.id = i
    }
}
