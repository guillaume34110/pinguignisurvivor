import {GameData} from "../StartData/StartData";
import {creatures_spawn} from "./CreaturesFunctions/creatures_spawn";
import {creatures_Hunt} from "./CreaturesFunctions/Creatures_Move";
import {creatures_HitBox} from "./CreaturesFunctions/Creatures_HitBox";

export const creaturesUpdate = (gameData:GameData) => {
    creatures_spawn(gameData)
    creatures_HitBox(gameData)
    creatures_Hunt(gameData)
}