import { CreatureType, Creature } from '../Creatures/Creature';
import { worms } from "../Creatures/CreaturesTypes/Worms"
import { Creatures_Init } from "../Creatures/Creatures_Init"
import { ItemType } from "../Items/Item"
import { item_Init } from "../Items/Item_Init"
import { mapBlocks_Init } from "../MapBlocks/MapBlocks_Init"
import { GameData, startData } from "../StartData/StartData"
import { initCore } from "../init/init"
import { updateCore } from "../update/Update"
import { rabbit } from '../Creatures/CreaturesTypes/Rabbit';
import { creature_updateSensorsPosition } from '../Creatures/CreaturesFunctions/Creature_sensors';

const given = describe
    const when = describe
    const then = it

export const testingEnvironnement = () => { 
    
    const {rabitte , gameData } = init()

    return {rabitte, gameData , given , when , then }

}

export const testingCreaturesSimpleEnvironement = () => {
    const rabit1 = {...rabbit}
    const rabit2 = {...rabbit}
    const rabit3 = {...rabbit}
    const rabit4 = {...rabbit} 
    const creatures : Creature[] = [rabit1 , rabit2 ,rabit3 ,rabit4]   
    creatures.forEach(creature => { 
        creature.spriteBox.x = 500
        creature.spriteBox.y = 500
        creature.hitBox.x = 500
        creature.hitBox.y = 500 
        creature.sensors.sensors.forEach(sensor => {
        creature_updateSensorsPosition(creature, sensor)
        })
    }) 
    return  { given , when , then ,creatures }
}

  const init = () => {
        const gameData: GameData = JSON.parse(JSON.stringify(startData))
        gameData.creaturePreset = [CreatureType.Mouse]
        gameData.itemPreset = [ItemType.BasicGrass]
        mapBlocks_Init(gameData)
        Creatures_Init(gameData)
        item_Init(gameData)
        initCore(gameData)
    
        gameData.creatures.push(JSON.parse(JSON.stringify(worms)))
        const worms1 = gameData.creatures[gameData.creatures.length - 1]
        worms1.spriteBox.x = 580
        worms1.spriteBox.y = 580
        gameData.items[0].spriteBox.x = 550
        gameData.items[0].spriteBox.y = 550
        gameData.creatures[0].spriteBox.x = 500
        gameData.creatures[0].spriteBox.y = 500
        updateCore(gameData)
        updateCore(gameData)
        const rabitte = gameData.creatures[0]
        return { rabitte , gameData}
    }
