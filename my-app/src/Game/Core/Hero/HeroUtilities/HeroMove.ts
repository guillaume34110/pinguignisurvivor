import {GameData} from "../../StartData/StartData";
import {Hero} from "../Hero";
import {DirectionInRadian, spriteBoxSetDirectionWithRadian} from "../../Utilities/directionSpriteBox";

export const heroMove = (gameData: GameData) => {
    HeroMoveDetermination(gameData)
    if (gameData.keys.keyState.up || gameData.keys.keyState.left || gameData.keys.keyState.right || gameData.keys.keyState.down) {
        spriteBoxSetDirectionWithRadian(gameData.hero.spriteBox, gameData.hero.spriteBox.direction.radian)
        gameData.hero.spriteBox.x += gameData.hero.spriteBox.direction.x
        gameData.hero.spriteBox.y += gameData.hero.spriteBox.direction.y
    }
}

export const HeroMoveDetermination = (gameData: GameData) => {

    if (gameData.keys.keyState.down && !gameData.keys.keyState.left && !gameData.keys.keyState.right) {
        gameData.hero.spriteBox.direction.radian = DirectionInRadian.Down
    }
    if (gameData.keys.keyState.up && !gameData.keys.keyState.left && !gameData.keys.keyState.right) {
        gameData.hero.spriteBox.direction.radian = DirectionInRadian.Up
    }
    if (gameData.keys.keyState.right && !gameData.keys.keyState.up && !gameData.keys.keyState.down) {
        gameData.hero.spriteBox.direction.radian = DirectionInRadian.Right
    }
    if (gameData.keys.keyState.left && !gameData.keys.keyState.down && !gameData.keys.keyState.down) {
        gameData.hero.spriteBox.direction.radian = DirectionInRadian.Left
    }
    if (gameData.keys.keyState.down && gameData.keys.keyState.left) {
        gameData.hero.spriteBox.direction.radian = DirectionInRadian.DownLeft
    }
    if (gameData.keys.keyState.down && gameData.keys.keyState.right) {
        gameData.hero.spriteBox.direction.radian = DirectionInRadian.DownRight
    }
    if (gameData.keys.keyState.up && gameData.keys.keyState.right) {
        gameData.hero.spriteBox.direction.radian = DirectionInRadian.UpRight
    }
    if (gameData.keys.keyState.up && gameData.keys.keyState.left) {
        gameData.hero.spriteBox.direction.radian = DirectionInRadian.UpLeft
    }
}
