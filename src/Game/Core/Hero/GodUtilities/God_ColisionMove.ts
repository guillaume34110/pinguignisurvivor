import {GameData} from "../../StartData/StartData";
import {God} from "../God";

export const hero_CollisionMove = (gameData: GameData) => {
    applyHeroMoveOnCollision(gameData.hero)
}

const applyHeroMoveOnCollision = (hero: God) => {
    hero.spriteBox.x -= hero.spriteBox.direction.x
    hero.spriteBox.y -= hero.spriteBox.direction.y
}