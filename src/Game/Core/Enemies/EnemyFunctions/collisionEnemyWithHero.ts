import {HitBoxCls} from "../../Utilities/HitBoxMatch"
import {Enemy} from "../Enemy";
import {Hero} from "../../Hero/Hero";


export const collisionEnemiesWithHero = (enemies: Enemy[], hero: Hero) => {
    enemies.forEach(enemy => {
        if (HitBoxCls.hitBoxMatch(enemy.spriteBox, hero.spriteBox)) {
            hero.health -= enemy.damage
        }
    });
}