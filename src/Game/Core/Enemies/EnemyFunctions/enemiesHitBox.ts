import {GameData} from "../../StartData/StartData";

export const enemiesHitBox = (gameData:GameData) => {
    gameData.enemies.forEach(enemy => {
            enemy.hitBox.x= enemy.spriteBox.x
        enemy.hitBox.y= enemy.spriteBox.y
    })
}
//  w: enemy.spriteBox.w,
//     h: enemy.spriteBox.h * 0.6,