import {GameData} from "../StartData/StartData";
import {creatures_Move} from "./CreaturesFunctions/Creatures_Move";
import {creatures_HitBox} from "./CreaturesFunctions/Creatures_HitBox";
import { creature_lifeDecrease } from "./CreaturesFunctions/Creature_lifeDecrease";
import { creature_Death } from "./CreaturesFunctions/Creature_Death";
import { creature_CollisionWithSolidMapBlocks, creature_collisionWithItem } from "./CreaturesFunctions/Creatures_Collision";
import { creature_Fertility } from "./CreaturesFunctions/Creature_Nursery";
import { creature_Info } from "./CreaturesFunctions/Creature_Info";
import { creature_MaleHuntFemale } from "./CreaturesFunctions/Creature_Reproduction";

export const creaturesUpdate = (gameData:GameData) => {
    creatures_Move(gameData)
    creatures_HitBox(gameData) 
    creature_CollisionWithSolidMapBlocks(gameData)
    creature_collisionWithItem(gameData)

    creature_lifeDecrease(gameData)
    creature_Fertility(gameData)
    creature_MaleHuntFemale(gameData)
    creature_Info(gameData)

    creature_Death(gameData)
}