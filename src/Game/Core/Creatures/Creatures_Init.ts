import { GameData } from "../StartData/StartData";
import { mouse } from "./CreaturesTypes/Mouse";
import { Creature, CreatureSex, CreatureType } from './Creature';
import { rabbit } from './CreaturesTypes/Rabbit';
import { setCoordinateIndexPosition } from "../Utilities/Coordinate/Coordinate";
import { MapBlock, MapBlockType } from '../MapBlocks/MapBlock';
import { creatures_HitBox } from "./CreaturesFunctions/Creatures_HitBox";
import { Item } from "../Items/Item";
import { hitBoxMatch } from "../Utilities/HitBoxMatch";
import { creature_MemoryInit } from "./CreaturesFunctions/Memory/Creature_MemoryInit";

export const Creatures_Init = (gameData: GameData) => {
    if (gameData.mapBlocks.length === 0) {
        console.log("mapBlocks is empty");
        return
    }
    gameData.creatures = []
    console.log('creature init ');
    gameData.creaturePreset.forEach(creatureType => {
        if (creatureType === CreatureType.Mouse || creatureType === CreatureType.Rabbit) {
            const creature = creature_Determination(creatureType)
            const mapBlock = takeARandomMapBlockByTypes(creature.mapBlockToDrop, gameData)
            for (let i = 0; i < 2; i++) {
                gameData.creatures.push(JSON.parse(JSON.stringify(creature)))
                const lastCreature = gameData.creatures[gameData.creatures.length - 1]
                creature_EnsureHitNothingForSpawn(gameData , lastCreature , mapBlock) 
                lastCreature.spriteBox.speed = Math.random() * lastCreature.spriteBox.speed + 0.1
                if (i === 1) lastCreature.sex = CreatureSex.Female
                lastCreature.id = i
                lastCreature.coordinate = setCoordinateIndexPosition(lastCreature.spriteBox, gameData)
                creatures_HitBox(lastCreature)
                creature_MemoryInit(gameData , lastCreature)
            }
        }
    })
}

export const creature_Determination = (creatureType: CreatureType): Creature => {
    if (creatureType === CreatureType.Mouse) {
        return mouse
    }
    else if (creatureType === CreatureType.Rabbit) {
        return rabbit
    }
    else return mouse
}

const takeARandomMapBlockByTypes = (mapBlockTypes: MapBlockType[], gameData: GameData): MapBlock => {
    let mapBlock: MapBlock = gameData.mapBlocks[~~(Math.random() * gameData.mapBlocks.length)]
    while (!mapBlockTypes.includes(mapBlock.type)) {
        mapBlock = gameData.mapBlocks[~~(Math.random() * gameData.mapBlocks.length)]
    }
    return mapBlock
}


export const creature_EnsureHitNothingForSpawn = (gameData: GameData, element: Item | Creature, mapBlock: MapBlock ) => {
    let hitToken = false;

    for (let t = 0; t < 150; t++) {
        hitToken = false
        element.spriteBox.x = mapBlock.spriteBox.x + (Math.random() * (mapBlock.spriteBox.w - element.spriteBox.w));
        element.spriteBox.y = mapBlock.spriteBox.y + (Math.random() * (mapBlock.spriteBox.h - element.spriteBox.h));

        for (const item of gameData.items) {
            if (item.solid && hitBoxMatch(element.spriteBox, item.spriteBox)) {
                hitToken = true;
                break;
            }
        }


        for (const creature of gameData.creatures) {
            if (element  !== creature && hitBoxMatch(element.spriteBox, creature.spriteBox)) {
                hitToken = true;
                break;
            }
        }

        if (hitToken === false) {
          break
        }
    }
}