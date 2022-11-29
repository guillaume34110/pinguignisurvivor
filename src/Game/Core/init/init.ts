import {mapBlocks_Init} from "../Building/MapBlocks_Init";
import {god_Init} from "../Hero/God_Init";
import {heroProjectile_Init} from "../HeroProjectile/HeroProjectile_Init";
import {item_Init} from "../Items/Item_Init";
import {GameData} from "../StartData/StartData";
import {Enemy_Init} from "../Enemies/Enemies_Init";

export const initCore = (gameData:GameData) => {
    mapBlocks_Init(gameData)
    god_Init(gameData)
    Enemy_Init(gameData)
    heroProjectile_Init(gameData)
    item_Init(gameData)
}