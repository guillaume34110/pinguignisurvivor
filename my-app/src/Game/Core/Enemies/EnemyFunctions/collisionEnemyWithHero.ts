import { Enemy, Hero } from "../../StartData/StartData"
import { hitBoxMatch } from "../../Utilities/HitBoxMatch"

function collision(){}

export const collisionEnemiesWithHero = (enemies: Enemy[], hero: Hero) => {
    enemies.forEach(enemy => {
        if(hitBoxMatch(enemy.spriteBox, hero.spriteBox)){
            hero.health -= enemy.damage
        }
    });
}