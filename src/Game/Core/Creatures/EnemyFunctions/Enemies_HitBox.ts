import {GameData} from "../../StartData/StartData";

export const enemies_HitBox = (gameData: GameData) => {
    gameData.enemies.forEach(enemy => {
        enemy.hitBox.x = enemy.spriteBox.x
        enemy.hitBox.y = enemy.spriteBox.y + enemy.spriteBox.h / 2
    })
}
//  w: enemy.spriteBox.w,
//     h: enemy.spriteBox.h * 0.6,