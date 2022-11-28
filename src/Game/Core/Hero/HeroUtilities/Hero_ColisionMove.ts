import {GameData} from "../../StartData/StartData";
import {Hero} from "../Hero";

export const heroCollisionMove = (gameData: GameData) => {
    applyHeroMoveOnCollision(gameData.hero)
}

const applyHeroMoveOnCollision = (hero: Hero) => {
    hero.spriteBox.x -= hero.spriteBox.direction.x
    hero.spriteBox.y -= hero.spriteBox.direction.y
}