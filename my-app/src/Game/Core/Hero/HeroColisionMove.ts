import {GameData} from "../StartData/StartData";
import {applyHeroMove, heroMove, HeroMoveDetermination} from "./HeroMove";
import {Hero} from "./Hero";

export const heroCollisionMove = (gameData: GameData) =>  {


    const speed = HeroMoveDetermination(gameData)
    applyHeroMoveOnColision(speed,gameData.hero)
}

const applyHeroMoveOnColision = (speed :{x:number,y:number} , hero:Hero ) =>  {
    if (speed.x !== 0 && speed.y === 0) hero.spriteBox.x -= speed.x
    if (speed.y !== 0 && speed.x === 0) hero.spriteBox.y -= speed.y
    if (speed.y !== 0 && speed.x !== 0) {

        hero.spriteBox.x -= speed.x * 0.8
        hero.spriteBox.y -= speed.y * 0.8
    }
}