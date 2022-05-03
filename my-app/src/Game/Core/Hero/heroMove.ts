import { GameData } from "../StartData/StartData";

export const heroMove = (gameData:GameData) => { 

if (gameData.keys.keyState.right) gameData.hero.spriteBox.y += gameData.hero.speed
if (gameData.keys.keyState.left) gameData.hero.spriteBox.y -= gameData.hero.speed
if (gameData.keys.keyState.down) gameData.hero.spriteBox.x += gameData.hero.speed
if (gameData.keys.keyState.up) gameData.hero.spriteBox.x -= gameData.hero.speed

}

