import { HeroProjectile } from "../HeroProjectile/HeroProjectile";

export interface HeroItem {
    sprite: string,
    type: string,
    level: number,
    rarity: number,
    projectile: HeroProjectile | null,
    supply: HeroSupply | null,
}

export interface HeroSupply {
    extralife: number,
    bonusMaxHealth: number,
    bonusRecoveryHealth: number,
    bonusArmor: number,
    bonusMoveSpeed: number,
    bonusLuck: number,
    bonusGrowth: number,
    bonusGreed: number,
    bonusMagnetRadius: number,
    bonusProjectileMight: number,
    bonusProjectileArea: number,
    bonusProjectileSpeed: number,
    bonusProjectileDuration: number,
    bonusProjectileAmount: number,
    bonusProjectileCooldown: number,
}