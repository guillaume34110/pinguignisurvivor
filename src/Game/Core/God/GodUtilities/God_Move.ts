import {GameData} from "../../StartData/StartData";
import {DirectionIn10Degrees, spriteBoxSetDirectionXYBy10DegreesAngle} from "../../Utilities/spriteBox/directionSpriteBox";

export const god_Move = (gameData: GameData) => {
    godMoveDetermination(gameData)
    if (gameData.keys.keyState.up || gameData.keys.keyState.left || gameData.keys.keyState.right || gameData.keys.keyState.down) {
        // spriteBoxSetDirectionXYByRadianAngle(gameData.god.spriteBox, gameData.god.spriteBox.direction.radian)
        spriteBoxSetDirectionXYBy10DegreesAngle(gameData.god.spriteBox, gameData.god.spriteBox.direction.degree10)
       
        gameData.god.spriteBox.x += gameData.god.spriteBox.direction.x
        gameData.god.spriteBox.y += gameData.god.spriteBox.direction.y
    }
}

export const godMoveDetermination = (gameData: GameData) => {

    if (gameData.keys.keyState.down && !gameData.keys.keyState.left && !gameData.keys.keyState.right) {
        // gameData.god.spriteBox.direction.radian = DirectionInRadian.Down
        gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.Up
    }
    if (gameData.keys.keyState.up && !gameData.keys.keyState.left && !gameData.keys.keyState.right) {
        // gameData.god.spriteBox.direction.radian = DirectionInRadian.Up
        gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.Down
    }
    if (gameData.keys.keyState.right && !gameData.keys.keyState.up && !gameData.keys.keyState.down) {
        // gameData.god.spriteBox.direction.radian = DirectionInRadian.Right
        gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.Right
    }
    if (gameData.keys.keyState.left && !gameData.keys.keyState.down && !gameData.keys.keyState.down) {
        // gameData.god.spriteBox.direction.radian = DirectionInRadian.Left
        gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.Left
    }
    if (gameData.keys.keyState.down && gameData.keys.keyState.left) {
        // gameData.god.spriteBox.direction.radian = DirectionInRadian.DownLeft
        gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.UpLeft
    }
    if (gameData.keys.keyState.down && gameData.keys.keyState.right) {
        // gameData.god.spriteBox.direction.radian = DirectionInRadian.DownRight
        gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.UpRight
    }
    if (gameData.keys.keyState.up && gameData.keys.keyState.right) {
        // gameData.god.spriteBox.direction.radian = DirectionInRadian.UpRight
        gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.DownRight
    }
    if (gameData.keys.keyState.up && gameData.keys.keyState.left) {
        // gameData.god.spriteBox.direction.radian = DirectionInRadian.UpLeft
        gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.DownLeft
    }
}
