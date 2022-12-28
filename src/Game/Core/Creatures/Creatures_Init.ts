import {GameData} from "../StartData/StartData";
import { mouse } from "./CreaturesTypes/Mouse";
import { CreatureSex } from './Creature';
import { rabbit } from './CreaturesTypes/Rabbit';
import { setCoordinateIndexPosition } from "../Utilities/coordinate/Coordinate";

export const Creatures_Init = (gameData: GameData) => {
    for (let i = 0; i < 500; i++) {
        gameData.creatures.push(JSON.parse(JSON.stringify(mouse)) )
        const lastMouse = gameData.creatures[gameData.creatures.length - 1]
        lastMouse.spriteBox.x = (200 * Math.random() * 3) + 500
        lastMouse.spriteBox.y = (200 * Math.random() * 3) + 500
        lastMouse.spriteBox.speed =  Math.random()* lastMouse.spriteBox.speed + 0.1
        if (Math.random() > 0.5) lastMouse.sex = CreatureSex.Female
        lastMouse.id = i
        lastMouse.coordinate = setCoordinateIndexPosition(lastMouse.spriteBox , gameData)
    }
    for (let i = 0; i < 500; i++) {
        gameData.creatures.push(JSON.parse(JSON.stringify(rabbit)) )
        const lastRabbit = gameData.creatures[gameData.creatures.length - 1]
        lastRabbit.spriteBox.x = (200 * Math.random() * 3) + 500
        lastRabbit.spriteBox.y = (200 * Math.random() * 3) + 500
        lastRabbit.spriteBox.speed =  Math.random()* lastRabbit.spriteBox.speed + 0.1
        if (Math.random() > 0.5) lastRabbit.sex = CreatureSex.Female
        lastRabbit.id = i
        lastRabbit.coordinate = setCoordinateIndexPosition(lastRabbit.spriteBox , gameData)
    }
}
