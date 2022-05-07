import {GameData} from "../StartData/StartData";

import {HitBoxCls} from "../Utilities/HitBoxMatch";

export const buildingColisionWithHero = (gameData: GameData) => {

    gameData.building[0].hitBox = {
        x: gameData.building[0].spriteBox.x + gameData.hero.spriteBox.h / 5,
        y: gameData.building[0].spriteBox.y - gameData.hero.spriteBox.h / 16,
        w: gameData.building[0].spriteBox.w * 1.2,
        h: gameData.building[0].spriteBox.h * 0.6
    }
    gameData.hero.hitBox = {
        x: gameData.hero.spriteBox.x - gameData.hero.spriteBox.h / 4,
        y: gameData.hero.spriteBox.y - gameData.hero.spriteBox.w / 16,
        w: gameData.hero.spriteBox.w,
        h: gameData.hero.spriteBox.h * 0.6,
        direction: {x: 0, y: 0},
        speed: 0,
    }
    if (HitBoxCls.hitBoxMatch(gameData.building[0].hitBox, gameData.hero.hitBox)) {
        if (gameData.keys.keyState.left) gameData.hero.spriteBox.y += gameData.hero.spriteBox.speed
        if (gameData.keys.keyState.right) gameData.hero.spriteBox.y -= gameData.hero.spriteBox.speed
        if (gameData.keys.keyState.down) gameData.hero.spriteBox.x -= gameData.hero.spriteBox.speed
        if (gameData.keys.keyState.up) gameData.hero.spriteBox.x += gameData.hero.spriteBox.speed
    }
}