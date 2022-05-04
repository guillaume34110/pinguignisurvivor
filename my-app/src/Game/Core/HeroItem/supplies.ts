import { HeroItem } from "./HeroItem";

interface HeroItems {
    leath: HeroItem,
}

export const supplies: HeroItems = {
    
    leath:{
        sprite:"leath image to link with css",
        type: "protection",
        level: 0,
        rarity: 1,
        projectile:null,
        supply:{
            extralife: 0,
            bonusMaxHealth: 0,
            bonusRecoveryHealth: 0,
            bonusArmor: 1,
            bonusMoveSpeed: 0,
            bonusLuck: 0,
            bonusGrowth: 0,
            bonusGreed: 0,
            bonusMagnetRadius: 0,
            bonusProjectileMight: 0,
            bonusProjectileArea: 0,
            bonusProjectileSpeed: 0,
            bonusProjectileDuration: 0,
            bonusProjectileAmount: 0,
            bonusProjectileCooldown: 0,
        }
    }

}
