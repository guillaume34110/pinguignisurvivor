import {GameData} from "../Core/StartData/StartData";
import {terrainRefresh} from "./Terrain";
import {buildingsRefresh} from "./buildings/Buildings_Draw";
import {projectileRefresh} from "./Projectiles/Projectiles_Draw";
import {items_Refresh} from "./Items/Items_Draw";
import {enemiesRefresh} from "./Enemies/Enemies_Draw";
import {heroRefresh} from "./Hero/Hero_Draw";
import {hitBoxRefresh} from "./Hitboxs/Hitbox_Draw";

export const draw = (gameData:GameData , targetGl : CanvasRenderingContext2D ) => {
    terrainRefresh(gameData, targetGl)
    buildingsRefresh(gameData, targetGl)
    projectileRefresh(gameData, targetGl)
    items_Refresh(gameData, targetGl)
    enemiesRefresh(gameData, targetGl)
    heroRefresh(gameData, targetGl)
    hitBoxRefresh(gameData, targetGl)
}