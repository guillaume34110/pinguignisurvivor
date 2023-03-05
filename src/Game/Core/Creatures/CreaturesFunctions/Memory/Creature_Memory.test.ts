import { mapBlocks_Init } from "../../../MapBlocks/MapBlocks_Init"
import { GameData, startData } from "../../../StartData/StartData"
import { CreatureType } from "../../Creature"
import { Creatures_Init } from '../../Creatures_Init';
import { item_Init } from '../../../Items/Item_Init';
import { updateCore } from "../../../update/Update"
import { ItemType } from "../../../Items/Item"
import { initCore } from "../../../init/init"
import { worms } from '../../CreaturesTypes/Worms';

const given = describe
const when = describe
const then = it

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
    return { rabitte}
}

given('test memory', () => {

    when('a creature on the map', () => {
        then('a mapblock should be memorised', () => {
            const {  rabitte} = init()

            const memory = rabitte.memory.mapBlocksOrdered[rabitte.coordinate]
            const memory2 = rabitte.memory.mapBlocksOrdered[rabitte.coordinate + 1]
            expect(memory?.id).toEqual(rabitte.coordinate)
            expect(memory2?.id).toEqual(rabitte.coordinate + 1)
        })
    })

    when('a creature on the map', () => {
        then('an item should be memorised', () => {
            const { rabitte } = init()
            const memory = rabitte.memory.itemsPositions[0]
            expect(memory?.itemType).toEqual(ItemType.BasicGrass)
        
        })
    })

    when('a creature on the map', () => {
        then('an creature should be memorised', () => {
            const { rabitte } = init()
            const memory = rabitte.memory.creaturesPositions[0]
            expect(memory?.creatureType).toEqual(CreatureType.Worms)
        })
    })
})

