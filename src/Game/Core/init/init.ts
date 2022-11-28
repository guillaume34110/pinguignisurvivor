import {building_Init} from "../Building/Building_Init";
import {hero_Init} from "../Hero/Hero_Init";
import {heroProjectile_Init} from "../HeroProjectile/HeroProjectile_Init";
import {item_Init} from "../Items/Item_Init";
import {GameData} from "../StartData/StartData";
import {Enemy_Init} from "../Enemies/Enemies_Init";

export const initCore = (gameData:GameData) => {
    building_Init(gameData)
    hero_Init(gameData)
    Enemy_Init(gameData)
    heroProjectile_Init(gameData)
    item_Init(gameData)
}