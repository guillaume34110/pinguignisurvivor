import { GameData } from "../StartData/StartData";
import { mouse } from "./CreaturesTypes/Mouse";
import { CreatureSex, CreatureType } from './Creature';
import { rabbit } from './CreaturesTypes/Rabbit';
import { setCoordinateIndexPosition } from "../Utilities/Coordinate/Coordinate";
import { MapBlock, MapBlockType } from '../MapBlocks/MapBlock';

export const Creatures_Init = (gameData: GameData) => {
    if (gameData.mapBlocks.length === 0) {
        console.log("mapBlocks is empty");
        return
    }
    gameData.creaturePreset.forEach(creatureType => {
        if (creatureType === CreatureType.Mouse || creatureType === CreatureType.Rabbit) {
              const mapBlock = takeARandomMapBlockByTypes([MapBlockType.Dirt, MapBlockType.Grass], gameData)
            for (let i = 0; i < 2; i++) {
                if (creatureType === CreatureType.Mouse) {
                    gameData.creatures.push(JSON.parse(JSON.stringify(mouse)))
                } else if (creatureType === CreatureType.Rabbit) {
                    gameData.creatures.push(JSON.parse(JSON.stringify(rabbit)))
                }
                const lastCreature = gameData.creatures[gameData.creatures.length - 1]
                lastCreature.spriteBox.x = mapBlock.spriteBox.x + (Math.random() * gameData.mapBlocks[gameData.mapBlocks.length - 1].spriteBox.w)
                lastCreature.spriteBox.y = mapBlock.spriteBox.y + (Math.random() * gameData.mapBlocks[gameData.mapBlocks.length - 1].spriteBox.h)
                lastCreature.spriteBox.speed = Math.random() * lastCreature.spriteBox.speed + 0.1
                if (i === 1) lastCreature.sex = CreatureSex.Female
                lastCreature.id = i
                lastCreature.coordinate = setCoordinateIndexPosition(lastCreature.spriteBox, gameData)
            }
        }
    })
}

const takeARandomMapBlockByTypes = (mapBlockTypes: MapBlockType[], gameData: GameData): MapBlock => {
    let mapBlock: MapBlock = gameData.mapBlocks[~~(Math.random() * gameData.mapBlocks.length)]
    while (!mapBlockTypes.includes(mapBlock.type)) {
        mapBlock = gameData.mapBlocks[~~(Math.random() * gameData.mapBlocks.length)]
    }
    return mapBlock
}