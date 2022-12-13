import {GameData} from "../../StartData/StartData";

export const creatures_HitBox = (gameData: GameData) => {
    gameData.creatures.forEach(enemy => {
        enemy.hitBox.x = enemy.spriteBox.x
        enemy.hitBox.y = enemy.spriteBox.y + enemy.spriteBox.h / 2
    })
}
//  w: enemy.spriteBox.w,
//     h: enemy.spriteBox.h * 0.6,