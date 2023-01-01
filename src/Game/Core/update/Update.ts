import {  creaturesUpdate_ChristmasPanettone } from "../Creatures/CreaturesUpdate";
import { end } from "../End/End";
import { timer } from "../Hud/Time/Time";
import {itemUpdate} from "../Items/ItemUpdate";
import {mapBlocksUpdate} from "../MapBlocks/MapBlocksUpdate";
import {GameData} from "../StartData/StartData";

export const updateCore = (gameData:GameData) => {
    timer(gameData)
    creaturesUpdate_ChristmasPanettone(gameData)
    itemUpdate(gameData)
    mapBlocksUpdate(gameData)
    end(gameData)
}

