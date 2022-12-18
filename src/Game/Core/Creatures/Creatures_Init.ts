import {GameData, HitBox} from "../StartData/StartData";
import { mouse } from "./CreaturesTypes/Mouse";
import { rabbit } from "./CreaturesTypes/Rabbit";
import { CreatureSex } from './Creature';

export const Creatures_Init = (gameData: GameData) => {
    for (let i = 0; i < 10; i++) {
        gameData.creatures.push(JSON.parse(JSON.stringify(mouse)) )
        const lastRabbit = gameData.creatures[gameData.creatures.length - 1]
        lastRabbit.spriteBox.x = (200 * Math.random() * 3) + 50
        lastRabbit.spriteBox.y = (200 * Math.random() * 3) + 50
        lastRabbit.spriteBox.speed =  Math.random()* lastRabbit.spriteBox.speed + 0.1
        if (Math.random() > 0.5) lastRabbit.sex = CreatureSex.Female
        lastRabbit.id = i
    }
}
