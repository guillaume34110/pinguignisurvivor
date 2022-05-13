
import {GameData} from "../../StartData/StartData.js";
import {HeroMoveDetermination} from "./HeroMove.js";
import {Hero} from "../Hero.js";

export const heroCollisionMove = (gameData: GameData) => {
    applyHeroMoveOnCollision(gameData.hero)
}

const applyHeroMoveOnCollision = (hero: Hero) => {
    hero.spriteBox.x -= hero.spriteBox.direction.x
    hero.spriteBox.y -= hero.spriteBox.direction.y
}