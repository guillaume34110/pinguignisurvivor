import {God} from "./God";
import { pinguigny } from './God/Pinguigny';

export interface Gods {
    pinguigny: God
}

export const heroesGeneric: Gods = {
    pinguigny: pinguigny
}