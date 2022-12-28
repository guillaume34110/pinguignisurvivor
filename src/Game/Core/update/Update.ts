import { creaturesUpdate, creaturesUpdate2, creaturesUpdate_ChristmasPanettone } from "../Creatures/CreaturesUpdate";
import { godUpdate } from "../God/GodUpdate";
import {itemUpdate} from "../Items/ItemUpdate";
import {mapBlocksUpdate} from "../MapBlocks/MapBlocksUpdate";
import {GameData} from "../StartData/StartData";

export const updateCore = (gameData:GameData) => {
    godUpdate(gameData);
    creaturesUpdate_ChristmasPanettone(gameData)
    itemUpdate(gameData)
    mapBlocksUpdate(gameData)
}

