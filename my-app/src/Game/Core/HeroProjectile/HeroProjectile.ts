import { SpriteBox } from "../StartData/StartData";

export interface HeroProjectile {

    // GRAPHICAL AND POSITION :
    sprite: string,
    spriteBox: SpriteBox,

    // STATS :
    type: string,
    level: number,
    damage: number,                             // damage => hero.might
    criticalMultipliar: number,
    speed: number,                                  // projectile speed
    amountProjectile: number,                // amount of projectile fired by each shot  
    penetration: number,                        // number of enemies penetrate by projectile
    durationEffect: number,                    // weapon effect duration
    cooldown: number,                           // The time required for the weapon to be used again. There is a trigger for the cooldown to start after a weapon's duration ends. Modified by Cooldown stat.
    interval: number,                                // The time required for an additional projectile to be fired
    distance: number,                              // distance max before projectile destruction
    blockByWall: boolean,                       // is projectile blocked by walls
    chance: number,                                 // special effect happening 
    poolLimit: number,                            // max amount of this projectile in screen

}