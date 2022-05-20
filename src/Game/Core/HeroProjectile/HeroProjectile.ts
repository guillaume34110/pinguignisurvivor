import {HitBox, SpriteBox} from "../StartData/StartData";

export interface HeroProjectile {
    id:number
    // GRAPHICAL AND POSITION :
    sprite: string,
    spriteBox: SpriteBox,
    hitBox:HitBox,
    // STATS :
    type: string,
    level: number,
    damage: number,                             // damage => hero.might
    criticMultiply: number,
    amountProjectile: number,                // amount of projectile fired by each shot  
    penetration: number,                        // number of enemies penetrate by projectile
    durationEffect: number,                    // weapon effect duration
    coolDown: number,                           // The time required for the weapon to be used again. There is a trigger for the cooldown to start after a weapon's duration ends. Modified by Cooldown stat.
    interval: number,                                // The time required for an additional projectile to be fired
    distance: number,                              // distance max before projectile destruction
    blockByWall: boolean,                       // is projectile blocked by walls
    chance: number,                                 // special effect happening 
    poolLimit: number,                            // max amount of this projectile in screen

}

export const heroProjectileGeneric: HeroProjectile = {
    // un sprite "projectileGeneric" => carre unicolore rouge par exemple
    id:0,
    sprite: "projectileGeneric",
    spriteBox: {
        x: 0,
        y: 0,
        w: 4,
        h: 4,
        direction: {
            radian: 0,
            x: 0,
            y: 0,
        },
        speed: 1,
    },
    hitBox: {
        x: 0,
        y: 0,
        w: 32,
        h: 32,
    },
    type: "projectileGeneric",
    level: 0,
    damage: 0,
    criticMultiply: 0,
    amountProjectile: 1,
    penetration: 0,
    durationEffect: 0,
    coolDown: 0,
    interval: 1,
    distance: 0,
    blockByWall: true,
    chance: 0,
    poolLimit: 100
}