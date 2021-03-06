import {HeroItem} from "../HeroItem/HeroItem";
import {HitBox, Sprite, SpriteBoxInterface} from "../StartData/StartData";

export interface Hero {

    // GRAPHICAL AND POSITION :
    sprite: Sprite
    spriteBox: SpriteBoxInterface,
    hitBox: HitBox,

    // HERO STATS :
    life: number,                                          // Determines the amount of Extra Lives the player has
    invulnerabilityCoolDown: number,
    maxHealth: number,
    health: number,
    recoveryHealth: number,
    armor: number,
    luck: number,
    growth: number,                                 // affect quantity of xp earned %
    greed: number,                                  // affect quantity of gold earned %
    curse: number,                                   // affect enemies speed, health, quantity and frequency %
    magnetRadius: number,

    // ITEMS AND WEAPONS :
    inventory: HeroItem[],

    // HERO PROJECTILE STATS :
    projectileMight: number,                       // affect heroItems projectile damage %
    projectileArea: number,                         // affect heroItems projectile area effect ( je pense a la hitbox pour nous ) %
    projectileSpeed: number,                      // affect heroItems projectile speed %
    projectileDuration: number,                  // affect  heroItems projectile effect (a creuser) duration %
    projectileAmount: number,                   // affect  amount of projectile(s) by shot %
    projectileCoolDown: number,               // affect  heroItems projectile cooldown before shot again %

    // EXPERIENCE :
    xpActual: number,
    xpToReach: number,
    xpTotal:number
    level: number,

    // LEVELUP :
    rerollRewardsLevelUp: number,           // Determines how many times the player can reroll level-up rewards
    skipRewardLevelUp: number,              // Determines how many times the player can skip level-up rewards

}
