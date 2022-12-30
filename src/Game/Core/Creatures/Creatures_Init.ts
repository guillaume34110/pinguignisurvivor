import { GameData } from "../StartData/StartData";
import { mouse } from "./CreaturesTypes/Mouse";
import { CreatureSex, CreatureType } from './Creature';
import { rabbit } from './CreaturesTypes/Rabbit';
import { setCoordinateIndexPosition } from "../Utilities/Coordinate/Coordinate";
import { MapBlock, MapBlockType } from '../MapBlocks/MapBlock';
import { dirtGround } from '../MapBlocks/MapBlocksTypes/DirtGround';

export const Creatures_Init = (gameData: GameData) => {
    if (gameData.mapBlocks.length === 0) {
        console.log("mapBlocks is empty");
        return
    }
    if (gameData.creaturePreset.includes(CreatureType.Mouse))
        for (let i = 0; i < 100; i++) {
            gameData.creatures.push(JSON.parse(JSON.stringify(mouse)))
            const lastMouse = gameData.creatures[gameData.creatures.length - 1] 
            const mapBlock = takeArandomMapblockByTypes([MapBlockType.Dirt , MapBlockType.Grass] , gameData)
            lastMouse.spriteBox.x = mapBlock.spriteBox.x + (Math.random() * gameData.mapBlocks[gameData.mapBlocks.length-1].spriteBox.w)
            lastMouse.spriteBox.y = mapBlock.spriteBox.y + (Math.random() * gameData.mapBlocks[gameData.mapBlocks.length-1].spriteBox.h)
            lastMouse.spriteBox.speed = Math.random() * lastMouse.spriteBox.speed + 0.1
            if (Math.random() > 0.5) lastMouse.sex = CreatureSex.Female
            lastMouse.id = i
            lastMouse.coordinate = setCoordinateIndexPosition(lastMouse.spriteBox, gameData)
        }
    if (gameData.creaturePreset.includes(CreatureType.Rabbit))
        for (let i = 0; i < 100; i++) {
            gameData.creatures.push(JSON.parse(JSON.stringify(rabbit)))
            const lastRabbit = gameData.creatures[gameData.creatures.length - 1]
           const mapBlock = takeArandomMapblockByTypes([MapBlockType.Dirt , MapBlockType.Grass] , gameData)
            lastRabbit.spriteBox.x = mapBlock.spriteBox.x + (Math.random() * gameData.mapBlocks[1].spriteBox.w)
            lastRabbit.spriteBox.y = mapBlock.spriteBox.y + (Math.random() * gameData.mapBlocks[1].spriteBox.h)
            lastRabbit.spriteBox.speed = Math.random() * lastRabbit.spriteBox.speed + 0.1
            if (Math.random() > 0.5) lastRabbit.sex = CreatureSex.Female
            lastRabbit.id = i
            lastRabbit.coordinate = setCoordinateIndexPosition(lastRabbit.spriteBox, gameData)
        }
}
const takeArandomMapblockByTypes = (mapBlockTypes :MapBlockType[] , gameData: GameData) : MapBlock=> { 
     let mapBlock  : MapBlock = gameData.mapBlocks[~~(Math.random() * gameData.mapBlocks.length)]
     while( !mapBlockTypes.includes(mapBlock.type)){ 
        mapBlock = gameData.mapBlocks[~~(Math.random() * gameData.mapBlocks.length)]
     }
     return mapBlock
}