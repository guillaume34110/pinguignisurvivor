import {God} from "./God";
import { god } from "./God/God";

export interface Gods {
    god: God
}

export const godsGeneric: Gods = {
    god: god
}