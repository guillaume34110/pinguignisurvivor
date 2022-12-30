import { GameData } from "../StartData/StartData";
import { mouse } from "./CreaturesTypes/Mouse";
import { CreatureSex, CreatureType } from './Creature';
import { rabbit } from './CreaturesTypes/Rabbit';
import { setCoordinateIndexPosition } from "../Utilities/Coordinate/Coordinate";

export const Creatures_Init = (gameData: GameData) => {
    if (gameData.creaturePreset.includes(CreatureType.Mouse))
        for (let i = 0; i < 100; i++) {
            gameData.creatures.push(JSON.parse(JSON.stringify(mouse)))
            const lastMouse = gameData.creatures[gameData.creatures.length - 1]
            lastMouse.spriteBox.x = (400 * Math.random() * 3) + 500
            lastMouse.spriteBox.y = (400 * Math.random() * 3) + 500
            lastMouse.spriteBox.speed = Math.random() * lastMouse.spriteBox.speed + 0.1
            lastMouse.spriteBox.speed = Math.random() * lastMouse.spriteBox.speed + 0.1
            if (Math.random() > 0.5) lastMouse.sex = CreatureSex.Female
            lastMouse.id = i
            lastMouse.coordinate = setCoordinateIndexPosition(lastMouse.spriteBox, gameData)
        }
    if (gameData.creaturePreset.includes(CreatureType.Rabbit))
        for (let i = 0; i < 100; i++) {
            gameData.creatures.push(JSON.parse(JSON.stringify(rabbit)))
            const lastRabbit = gameData.creatures[gameData.creatures.length - 1]
            lastRabbit.spriteBox.x = (400 * Math.random() * 3) + 500
            lastRabbit.spriteBox.y = (400 * Math.random() * 3) + 500
            lastRabbit.spriteBox.speed = Math.random() * lastRabbit.spriteBox.speed + 0.1
            if (Math.random() > 0.5) lastRabbit.sex = CreatureSex.Female
            lastRabbit.id = i
            lastRabbit.coordinate = setCoordinateIndexPosition(lastRabbit.spriteBox, gameData)
        }
}
