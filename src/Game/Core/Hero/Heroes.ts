import {Hero} from "./Hero";
import { pinguigny } from './HeroType/Pinguigny';

export interface Heroes {
    pinguigny: Hero
}

export const heroesGeneric: Heroes = {
    pinguigny: pinguigny
}