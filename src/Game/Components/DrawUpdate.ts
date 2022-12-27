import {GameData} from "../Core/StartData/StartData";
import {items_Refresh, items_RefreshPixi} from "./Items/Items_Draw";
import { creatures_Refresh, creatures_RefreshPixi } from './Creatures/Creatures_Draw';
import {hitBoxRefresh, hitBoxRefreshPixi} from "./Hitboxs/Hitbox_Draw";
import { lifeBarDraw, lifeBarDrawPixi } from './LifeBar/LifeBar_Draw';
import { mapBlocksRefresh, mapBlocksRefreshPixi } from './MapBlocks/MapBlocks_Draw';
import {hud_Refresh,  hud_RefreshPixi } from "./Hud/Hud";
import * as PIXI from 'pixi.js'

export const draw = (gameData:GameData , targetGl : CanvasRenderingContext2D ) => {
    mapBlocksRefresh(gameData, targetGl)
    items_Refresh(gameData, targetGl)
    creatures_Refresh(gameData, targetGl)
    hud_Refresh(gameData, targetGl)
    hitBoxRefresh(gameData, targetGl)
    lifeBarDraw(gameData, targetGl)
}

export const drawPixi = (gameData:GameData, targetPixi:PIXI.Application ) =>{
    mapBlocksRefreshPixi(gameData, targetPixi)
    items_RefreshPixi(gameData, targetPixi)
    creatures_RefreshPixi(gameData, targetPixi)
    /*hud_RefreshPixi(gameData, targetPixi)
    hitBoxRefreshPixi(gameData, targetPixi)
    lifeBarDrawPixi(gameData, targetPixi)*/

}