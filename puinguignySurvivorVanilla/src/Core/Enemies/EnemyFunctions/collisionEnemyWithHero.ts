import {HitBoxCls} from "../../Utilities/HitBoxMatch.js"
import {Enemy} from "../Enemy.js";
import {Hero} from "../../Hero/Hero.js";


export const collisionEnemiesWithHero = (enemies: Enemy[], hero: Hero) => {
    enemies.forEach(enemy => {
        if (HitBoxCls.hitBoxMatch(enemy.spriteBox, hero.spriteBox)) {
            hero.health -= enemy.damage
        }
    });
}