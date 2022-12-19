import {GameData} from "../Core/StartData/StartData";
import {items_Refresh} from "./Items/Items_Draw";
import {creaturesRefresh} from "./Creatures/Creatures_Draw";
import {hitBoxRefresh} from "./Hitboxs/Hitbox_Draw";
import { lifeBarDraw } from "./LifeBar/LifeBar_Draw";
import { mapBlocksRefresh } from "./MapBlocks/MapBlocks_Draw";

export const draw = (gameData:GameData , targetGl : CanvasRenderingContext2D ) => {
    mapBlocksRefresh(gameData, targetGl)
    items_Refresh(gameData, targetGl)
    creaturesRefresh(gameData, targetGl)
    //hitBoxRefresh(gameData, targetGl)
    lifeBarDraw(gameData, targetGl)
}