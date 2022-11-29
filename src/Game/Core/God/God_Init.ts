import {GameData} from "../StartData/StartData";
import {heroItems} from "../HeroItem/heroItems";

export const god_Init = (gameData:GameData) => {
    // gameData.hero.spriteBox.speed = 10 {DANS heroes => pinguiny}
    gameData.hero.inventory.push(heroItems.snowBall)
}
