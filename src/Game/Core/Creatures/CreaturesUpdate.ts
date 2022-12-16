import {GameData} from "../StartData/StartData";
import {creatures_spawn} from "./CreaturesFunctions/creatures_spawn";
import {creatures_Move} from "./CreaturesFunctions/Creatures_Move";
import {creatures_HitBox} from "./CreaturesFunctions/Creatures_HitBox";
import { creature_lifeDecrease } from "./CreaturesFunctions/Creature_lifeDecrease";
import { creature_Death } from "./CreaturesFunctions/Creature_Death";
import { creature_Fertility } from "./CreaturesFunctions/Creatures_Collision";

export const creaturesUpdate = (gameData:GameData) => {
    creatures_spawn(gameData)
    creatures_HitBox(gameData)
    creatures_Move(gameData)
    creature_lifeDecrease(gameData)
    creature_Death(gameData)
    creature_Fertility(gameData)
}