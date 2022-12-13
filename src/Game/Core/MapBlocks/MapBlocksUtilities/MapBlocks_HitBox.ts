import {GameData, HitBox} from "../../StartData/StartData";
import {MapBlock} from "../MapBlock";


export const mapBlocks_HitBox = (gameData:GameData) => {
    gameData.mapBlocks.forEach(building => {
        building.hitBox = mapBlocksHitBoxDetermination(building)
    })
}
const mapBlocksHitBoxDetermination = ({spriteBox, type}: MapBlock): HitBox => {
    return spriteBox
}