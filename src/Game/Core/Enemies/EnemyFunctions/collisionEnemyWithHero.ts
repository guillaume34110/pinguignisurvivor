import {hitBoxMatch} from "../../Utilities/HitBoxMatch"
import {GameData} from "../../StartData/StartData";


export const collisionEnemiesWithHero = (gameData: GameData) => {
    gameData.enemies.forEach(enemy => {
        if (hitBoxMatch(enemy.spriteBox, gameData.hero.spriteBox)) {

            // todo create HeroClass with function damagedByEnemy(enemy:EnemyClass)
            const hero = gameData.hero
            if (hero.invulnerabilityCoolDown === 0){
                if (hero.armor < enemy.damage){
                    hero.health -= (enemy.damage - hero.armor)
                    // console.log("aie => " + hero.health + "/" + hero.maxHealth)
                    hero.invulnerabilityCoolDown ++
                }
            }
            else if (hero.invulnerabilityCoolDown > 10){
                hero.invulnerabilityCoolDown = 0
            }
            else {
                hero.invulnerabilityCoolDown ++
            }

        }
    });
}