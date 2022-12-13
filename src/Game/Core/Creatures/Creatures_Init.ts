import {GameData, HitBox} from "../StartData/StartData";
import { mouse } from "./CreaturesTypes/Mouse";
import { rabbit } from "./CreaturesTypes/Rabbit";

export const Creatures_Init = (gameData: GameData) => {
    for (let i = 0; i < 200; i++) {
        gameData.creatures.push(JSON.parse(JSON.stringify(mouse)) )
        const lastRabbit = gameData.creatures[gameData.creatures.length - 1]
        lastRabbit.spriteBox.x = (500 * Math.random() * 3)
        lastRabbit.spriteBox.y = (500 * Math.random() * 3)
        lastRabbit.spriteBox.speed +=  Math.random()*0.5
        lastRabbit.id = i
    }
}
