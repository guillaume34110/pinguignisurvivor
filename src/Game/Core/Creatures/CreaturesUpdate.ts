import { GameData, SensorType } from '../StartData/StartData';
import { creatures_Move } from "./CreaturesFunctions/Creatures_Move";
import { creatures_HitBox } from "./CreaturesFunctions/Creatures_HitBox";
import { creature_lifeDecrease as creature_LifeDecrease } from "./CreaturesFunctions/Creature_lifeDecrease";
import { creature_Death } from "./CreaturesFunctions/Creature_Death";
import { creature_CollisionWithSolidMapBlocks, creature_collisionWithItem, creatures_CollisionWithCreatures } from "./CreaturesFunctions/Creatures_Collision";
import { creature_Info } from "./CreaturesFunctions/Creature_Info";
import { creature_MaleHuntFemale } from "./CreaturesFunctions/Creature_Reproduction";
import { creatures_Hunt } from "./CreaturesFunctions/Creature_Hunt";
import { creature_RotateSprite } from "./CreaturesFunctions/Creature_RotateSprite";

import { creature_Fertility } from './CreaturesFunctions/Creature_Nursery';
import { creature_updateSensorsPosition, creature_sensorSetCollisionFlagWithItems, creature_sensorSetCollisionWithMapBlocksFlag, creature_TurnOnCollision } from './CreaturesFunctions/Creature_sensors';

export const creaturesUpdate = (gameData: GameData) => {
    for (let i = 0; i < gameData.creatures.length ; i++) {
        const creature = gameData.creatures[i]

        creature.hunting = false
        creature.sensorsFlags.flagLeft = false
        creature.sensorsFlags.flagRight = false

        for (let k = 0; k < creature.sensors.sensors.length ; k++) {
            const sensor = creature.sensors.sensors[k]
            creature_updateSensorsPosition(creature, sensor)

            for (let ka = 0; ka < gameData.items.length ; ka++) {
                const item = gameData.items[ka]
                creature_sensorSetCollisionFlagWithItems(creature, sensor, item)
                creatures_Hunt(creature, sensor, item)
            }
            if (sensor.type !== SensorType.Hunt) {
                for (let kb = 0; kb < gameData.mapBlocks.length ; kb++) {
                    const mapBlock = gameData.mapBlocks[kb]
                    creature_sensorSetCollisionWithMapBlocksFlag(creature, sensor, mapBlock)
                }

                for (let kc = 0; kc < gameData.creatures.length ; kc++) {
                    const creatureFemale = gameData.creatures[kc]
                    creature_MaleHuntFemale(creature, sensor, creatureFemale)
                }
            }
        }

        for (let t = 0; t < gameData.items.length ; t++) {
            const item = gameData.items[t]
            creature_collisionWithItem(creature, item)
        }

        creature_TurnOnCollision(creature)
        creatures_Move(gameData, creature)

        for (let j = 0; j < gameData.creatures.length ; j++) {
            const otherCreature = gameData.creatures[j]
            creatures_CollisionWithCreatures(gameData, "y", creature, otherCreature)
            creatures_CollisionWithCreatures(gameData, "x", creature, otherCreature)
        }

        
        creature_RotateSprite(creature)
        creatures_HitBox(creature)
        creature_LifeDecrease(creature)
        creature_Info(creature)
        creature_Fertility(creature)

        for (let l = 0; l < gameData.mapBlocks.length ; l++) {
            const mapBlock = gameData.mapBlocks[l]
            creature_CollisionWithSolidMapBlocks(creature, mapBlock)
        }
    }
    creature_Death(gameData)

}