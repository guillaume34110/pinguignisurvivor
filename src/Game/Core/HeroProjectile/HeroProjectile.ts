import {GameData, HitBox, SpriteBoxInterface} from "../StartData/StartData";
import {spriteBoxSetDirectionWithRadian} from "../Utilities/spriteBox/directionSpriteBox";

export interface HeroProjectile {
    id: number
    // GRAPHICAL AND POSITION :
    sprite: string,
    spriteBox: SpriteBoxInterface,
    hitBox: HitBox,
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
    intervalActual: number,
    distance: number,                              // distance max before projectile destruction
    blockByWall: boolean,                       // is projectile blocked by walls
    chance: number,                                 // special effect happening 
    poolLimit: number,                            // max amount of this projectile in screen

}

export const heroProjectileGeneric: HeroProjectile = {
    // un sprite "projectileGeneric" => carre unicolore rouge par exemple
    id: 0,
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
        w: 4,
        h: 4,
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
    intervalActual: 0,
    distance: 0,
    blockByWall: true,
    chance: 0,
    poolLimit: 100
}

export class HeroProjectileClass {
    constructor(
        public id: number,
        public sprite: string,
        public spriteBox: SpriteBoxInterface,
        public hitBox: HitBox,
        public type: String,
        public level: number,
        public damage: number,
        public criticMultiply: number,
        public amountProjectile: number,
        public penetration: number,
        public durationEffect: number,
        public coolDown: number,
        public interval: number,
        public intervalActual: number,
        public distance: number,
        public blockByWall: boolean,
        public chance: number,
        public poolLimit: number
    ) {
        spriteBoxSetDirectionWithRadian(this.spriteBox, this.spriteBox.direction.radian)
    }

    private posXSpriteBoxInit = this.spriteBox.x
    private posYSpriteBoxInit = this.spriteBox.y
    private posXHitBoxInit = this.hitBox.x
    private posYHitBoxInit = this.hitBox.y

    resetPosition(gameData: GameData) {
        this.spriteBox.x = this.posXSpriteBoxInit + gameData.hero.spriteBox.x
        this.spriteBox.y = this.posYSpriteBoxInit + gameData.hero.spriteBox.y
        this.hitBox.x = this.posXHitBoxInit + gameData.hero.spriteBox.x
        this.hitBox.y = this.posYHitBoxInit + gameData.hero.spriteBox.y
    }

    sleepPosition() {
        this.spriteBox.x = -999_999
        this.spriteBox.y = -999_999
        this.hitBox.x = -999_999
        this.hitBox.y = -999_999
    }

}

