import {GameData} from "../../StartData/StartData";
import {DirectionIn10Degrees, spriteBoxSetDirectionXYBy10DegreesAngle} from "../../Utilities/SpriteBox/DirectionSpriteBox";

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
    switch (true) {
        case (gameData.keys.keyState.down && !gameData.keys.keyState.left && !gameData.keys.keyState.right):
            gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.Up
            break;
        case (gameData.keys.keyState.up && !gameData.keys.keyState.left && !gameData.keys.keyState.right):
            gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.Down
            break;
        case (gameData.keys.keyState.right && !gameData.keys.keyState.up && !gameData.keys.keyState.down):
            gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.Right
            break;
        case (gameData.keys.keyState.left && !gameData.keys.keyState.down && !gameData.keys.keyState.down):
            gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.Left
            break;
        case (gameData.keys.keyState.down && gameData.keys.keyState.left):
            gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.UpLeft
            break;
        case (gameData.keys.keyState.down && gameData.keys.keyState.right):
            gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.UpRight
            break;
        case (gameData.keys.keyState.up && gameData.keys.keyState.right):
            gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.DownRight
            break;
        case (gameData.keys.keyState.up && gameData.keys.keyState.left):
            gameData.god.spriteBox.direction.degree10 = DirectionIn10Degrees.DownLeft
            break;
    }
}
