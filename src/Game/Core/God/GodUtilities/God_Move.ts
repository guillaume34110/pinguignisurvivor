import {GameData} from "../../StartData/StartData";
import {DirectionInRadian, spriteBoxSetDirectionWithRadian} from "../../Utilities/spriteBox/directionSpriteBox";

export const god_Move = (gameData: GameData) => {
    godMoveDetermination(gameData)
    if (gameData.keys.keyState.up || gameData.keys.keyState.left || gameData.keys.keyState.right || gameData.keys.keyState.down) {
        spriteBoxSetDirectionWithRadian(gameData.god.spriteBox, gameData.god.spriteBox.direction.radian)
       
        gameData.god.spriteBox.x += gameData.god.spriteBox.direction.x
        gameData.god.spriteBox.y += gameData.god.spriteBox.direction.y
    }
}

export const godMoveDetermination = (gameData: GameData) => {

    if (gameData.keys.keyState.down && !gameData.keys.keyState.left && !gameData.keys.keyState.right) {
        gameData.god.spriteBox.direction.radian = DirectionInRadian.Down
    }
    if (gameData.keys.keyState.up && !gameData.keys.keyState.left && !gameData.keys.keyState.right) {
        gameData.god.spriteBox.direction.radian = DirectionInRadian.Up
    }
    if (gameData.keys.keyState.right && !gameData.keys.keyState.up && !gameData.keys.keyState.down) {
        gameData.god.spriteBox.direction.radian = DirectionInRadian.Right
    }
    if (gameData.keys.keyState.left && !gameData.keys.keyState.down && !gameData.keys.keyState.down) {
        gameData.god.spriteBox.direction.radian = DirectionInRadian.Left
    }
    if (gameData.keys.keyState.down && gameData.keys.keyState.left) {
        gameData.god.spriteBox.direction.radian = DirectionInRadian.DownLeft
    }
    if (gameData.keys.keyState.down && gameData.keys.keyState.right) {
        gameData.god.spriteBox.direction.radian = DirectionInRadian.DownRight
    }
    if (gameData.keys.keyState.up && gameData.keys.keyState.right) {
        gameData.god.spriteBox.direction.radian = DirectionInRadian.UpRight
    }
    if (gameData.keys.keyState.up && gameData.keys.keyState.left) {
        gameData.god.spriteBox.direction.radian = DirectionInRadian.UpLeft
    }
}
