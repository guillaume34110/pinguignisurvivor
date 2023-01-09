import {GameData, HitBox} from "../../StartData/StartData";


export const mapBlocks_HitBox = (gameData:GameData) => {
    gameData.mapBlocks.forEach(block => {
        block.hitBox = block.spriteBox
    })
}
