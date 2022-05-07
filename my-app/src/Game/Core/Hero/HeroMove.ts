import {GameData} from "../StartData/StartData";
import {Hero} from "./Hero";

export const heroMove = (gameData: GameData) => {

    const speed: { x: number, y: number } = HeroMoveDetermination(gameData)
    applyHeroMove(speed, gameData.hero)

}

export const HeroMoveDetermination = (gameData: GameData): { x: number, y: number } => {

    const speed: { x: number, y: number }  = {x: 0, y: 0}

    if (gameData.keys.keyState.down) {
        speed.x += gameData.hero.spriteBox.speed
        gameData.hero.sprite.sprite = gameData.hero.sprite.front
    }
    if (gameData.keys.keyState.up) {
        speed.x -= gameData.hero.spriteBox.speed
        gameData.hero.sprite.sprite = gameData.hero.sprite.back
    }

    if (gameData.keys.keyState.right) {
        speed.y += gameData.hero.spriteBox.speed
        gameData.hero.sprite.sprite = gameData.hero.sprite.right
    }
    if (gameData.keys.keyState.left) {
        speed.y -= gameData.hero.spriteBox.speed
        gameData.hero.sprite.sprite = gameData.hero.sprite.left
    }
    return speed
}

export const applyHeroMove = (speed: { x: number, y: number }, hero: Hero) => {
    if (speed.x !== 0 && speed.y === 0) hero.spriteBox.x += speed.x
    if (speed.y !== 0 && speed.x === 0) hero.spriteBox.y += speed.y
    if (speed.y !== 0 && speed.x !== 0) {

        hero.spriteBox.x += speed.x * 0.8
        hero.spriteBox.y += speed.y * 0.8
    }
}