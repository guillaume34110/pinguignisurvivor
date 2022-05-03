import { GameData } from "../StartData/StartData";

export const heroMove = (gameData:GameData) => { 
if (gameData.keys.keyState.right) gameData.hero.y += gameData.hero.speed
if (gameData.keys.keyState.left) gameData.hero.y -= gameData.hero.speed
if (gameData.keys.keyState.down) gameData.hero.x += gameData.hero.speed
if (gameData.keys.keyState.up) gameData.hero.x -= gameData.hero.speed
}