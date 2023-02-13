import { CreatureType } from "../Creatures/Creature"
import { worms } from "../Creatures/CreaturesTypes/Worms"
import { Creatures_Init } from "../Creatures/Creatures_Init"
import { ItemType } from "../Items/Item"
import { item_Init } from "../Items/Item_Init"
import { mapBlocks_Init } from "../MapBlocks/MapBlocks_Init"
import { GameData, startData } from "../StartData/StartData"
import { initCore } from "../init/init"
import { updateCore } from "../update/Update"

const given = describe
    const when = describe
    const then = it

export const testingEnvironnement = () => { 
    
    const {rabitte , gameData } = init()

    return {rabitte, gameData , given , when , then }

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
