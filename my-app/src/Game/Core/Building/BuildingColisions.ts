import { GameData, SpriteBox } from "../StartData/StartData";
import { hitBoxMatch } from "../Utilities/HitBoxMatch";

export const buildingColisionWithHero = (gameData: GameData) => {
  
    const buildingSpriteBox: SpriteBox = {
        x: gameData.building[0].x   ,
        y: gameData.building[0].y -  gameData.building[0].h/2,
        w: gameData.building[0].w ,
        h: gameData.building[0].h*1.5
    }
    const heroBox :SpriteBox ={
        x: gameData.hero.spriteBox.x ,
        y: gameData.hero.spriteBox.y ,
        w: gameData.hero.spriteBox.w,
        h: gameData.hero.spriteBox.h
    }
    if (hitBoxMatch(buildingSpriteBox, heroBox)) {
        console.log('collision')
        if (gameData.keys.keyState.left) gameData.hero.spriteBox.y += gameData.hero.moveSpeed
        if (gameData.keys.keyState.right) gameData.hero.spriteBox.y -= gameData.hero.moveSpeed
        if (gameData.keys.keyState.down) gameData.hero.spriteBox.x -= gameData.hero.moveSpeed
        if (gameData.keys.keyState.up) gameData.hero.spriteBox.x += gameData.hero.moveSpeed
    }
}