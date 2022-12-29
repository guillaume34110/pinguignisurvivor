import {GameData} from "../Core/StartData/StartData";
import { items_RefreshPixi} from "./Items/Items_Draw";
import { creatures_RefreshPixi } from './Creatures/Creatures_Draw';
import { hitBoxRefreshPixi} from "./Hitboxs/Hitbox_Draw";
import {  lifeBarDrawPixi } from './LifeBar/LifeBar_Draw';
import {  mapBlocksRefresh } from './MapBlocks/MapBlocks_Draw';
import {  hud_RefreshPixi } from "./Hud/Hud";
import * as PIXI from 'pixi.js'


export const draw = (gameData:GameData, targetPixi:PIXI.Application ) =>{
    mapBlocksRefresh(gameData, targetPixi)
    items_RefreshPixi(gameData, targetPixi)
    creatures_RefreshPixi(gameData, targetPixi)
   // hud_RefreshPixi(gameData, targetPixi)
   // hitBoxRefreshPixi(gameData, targetPixi)
    //lifeBarDrawPixi(gameData, targetPixi)/**/

}