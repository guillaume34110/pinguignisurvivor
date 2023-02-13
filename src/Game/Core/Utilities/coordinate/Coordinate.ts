import { SpriteBox, GameData, HitBox, Sensor } from '../../StartData/StartData';

let result = 0 
export const setCoordinateIndexPosition = (spriteBox: SpriteBox | HitBox | Sensor, gameData: GameData): number => {

    result = ~~(spriteBox.x / gameData.mapBlocks[1].spriteBox.w) + (~~(spriteBox.y / gameData.mapBlocks[1].spriteBox.h)* gameData.howMuchTilesOnLine) 
    if (result < 0 || result >= gameData.mapBlocks.length) return 0
    if (result % 1 !== 0) return Math.round(result)

    return result

}


