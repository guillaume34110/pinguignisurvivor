import {GameData} from "../../StartData/StartData";
import {heroProjectiles} from "../heroProjectiles";

export const projectile_Remove = (gameData: GameData) => {
    gameData.heroProjectiles.forEach(projectile => {
            if (projectile.spriteBox.x > gameData.hero.spriteBox.x + 2000
                || projectile.spriteBox.x < gameData.hero.spriteBox.x - 2000
                || projectile.spriteBox.y < gameData.hero.spriteBox.y + 2000
                || projectile.spriteBox.y < gameData.hero.spriteBox.y - 2000
            )
                //TODO replace snowball BY none
               projectile = JSON.parse(JSON.stringify(heroProjectiles.snowBall))
        }
    )
}