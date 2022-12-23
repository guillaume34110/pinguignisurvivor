import { SpriteBox, GameData, HitBox,  Sensor } from '../../StartData/StartData';

export const setCoordinateIndexposition = (spriteBox: SpriteBox|HitBox|Sensor , gameData : GameData) : number => { 
const leftX = Math.floor(spriteBox.x /gameData.mapBlocks[0].spriteBox.w)
const leftY = Math.floor(spriteBox.y /gameData.mapBlocks[0].spriteBox.h)
return (leftY * (gameData.howMuchTiles/gameData.howMuchLinesOfTiles)) + leftX
}

