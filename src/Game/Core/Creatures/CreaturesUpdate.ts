import {GameData} from "../StartData/StartData";
import {creatures_Move} from "./CreaturesFunctions/Creatures_Move";
import {creatures_HitBox} from "./CreaturesFunctions/Creatures_HitBox";
import { creature_lifeDecrease } from "./CreaturesFunctions/Creature_lifeDecrease";
import { creature_Death } from "./CreaturesFunctions/Creature_Death";
import { creature_CollisionWithSolidMapBlocks, creature_collisionWithItem } from "./CreaturesFunctions/Creatures_Collision";
import { creature_Fertility } from "./CreaturesFunctions/Creature_Nursery";
import { creature_Info } from "./CreaturesFunctions/Creature_Info";
import { creature_MaleHuntFemale } from "./CreaturesFunctions/Creature_Reproduction";
import { creatures_Hunt } from "./CreaturesFunctions/Creature_Hunt";
import { creature_RotateSprite } from "./CreaturesFunctions/Creature_RotateSprite";

export const creaturesUpdate = (gameData:GameData) => {
    creatures_Move(gameData)
    creatures_Hunt(gameData)
    creature_MaleHuntFemale(gameData)

    creature_RotateSprite(gameData)

    creatures_HitBox(gameData) 
    creature_CollisionWithSolidMapBlocks(gameData)
    creature_collisionWithItem(gameData)

    creature_lifeDecrease(gameData)
    creature_Fertility(gameData)
    creature_Info(gameData)

    creature_Death(gameData)
}