import {HitBox, Sprite, SpriteBoxInterface} from "../StartData/StartData";

export interface HeroProjectile {
    id: number,
    // GRAPHICAL AND POSITION :
    sprite: Sprite,
    spriteBox: SpriteBoxInterface,
    hitBox: HitBox,
    // STATS :
    type: String,
    name: String,
    level: number,
    damage: number,                             // damage => hero.might
    criticMultiply: number,
    amountProjectile: number,                // amount of projectile fired by each shot
    penetration: number,                        // number of enemies penetrate by projectile
    durationEffect: number,                    // weapon effect duration
    coolDown: number,                           // The time required for the weapon to be used again. There is a trigger for the cooldown to start after a weapon's duration ends. Modified by Cooldown stat.
    interval: number,                                // The time required for an additional projectile to be fired
    intervalActual: number,
    distance: number,                              // distance max before projectile destruction
    blockByWall: Boolean,                       // is projectile blocked by walls
    chance: number,                                 // special effect happening
    poolLimit: number,                            // max amount of this projectile in screen

}

