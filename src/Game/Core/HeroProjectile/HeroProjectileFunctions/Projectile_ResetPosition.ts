import {HeroProjectile, HeroProjectileClass} from "../HeroProjectile";
import {GameData} from "../../StartData/StartData";

export const projectile_ResetPosition = (projectile : HeroProjectileClass , gameData : GameData)=> {
    projectile.spriteBox.x =  gameData.hero.spriteBox.x
    projectile.spriteBox.y =  gameData.hero.spriteBox.y
    projectile.hitBox.x =  gameData.hero.spriteBox.x
    projectile.hitBox.y = gameData.hero.spriteBox.y
}