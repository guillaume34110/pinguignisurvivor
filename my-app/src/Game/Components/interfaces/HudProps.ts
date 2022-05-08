import {HeroItem} from "../../Core/HeroItem/HeroItem";

export interface ItemPops {
    inventory: HeroItem[]
}

export interface LifeProps {
    life: number
}

export interface TimeProps {
    time: number
}

export interface XpProps {
    xpActual: number
    xpToReach :number
    xpTotal:number
}

export interface InventoryItemProps {
    key: number,
    item: HeroItem
}