import { Enemy, Hero } from "../../StartData/StartData"
import { HitBox } from "../../Utilities/HitBoxMatch"


export const collisionEnemiesWithHero = (enemies: Enemy[], hero: Hero) => {
    enemies.forEach(enemy => {
        if(HitBox.hitBoxMatch(enemy.spriteBox, hero.spriteBox)){
            hero.health -= enemy.damage
        }
    });
}