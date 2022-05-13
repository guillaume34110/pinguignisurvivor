import {GameData} from "../../StartData/StartData.js";

export const enemiesHitBox = (gameData:GameData) => {
    gameData.enemies.forEach(enemy => {
        enemy.hitBox = {
            x: enemy.spriteBox.x ,
            y: enemy.spriteBox.y - enemy.spriteBox.w / 16,
            w: enemy.spriteBox.w,
            h: enemy.spriteBox.h * 0.6,
        }
    })
}