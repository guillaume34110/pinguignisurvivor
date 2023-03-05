import { testingCreaturesSimpleEnvironement } from "../../test/testingEnvironement"
import { Creature } from "../Creature"
import { creature_CollisionWithSolidMapBlocks } from './Creature_Collision';
import { spaceBorder } from '../../MapBlocks/MapBlocksTypes/SpaceBorder';
import { dirtGround } from '../../MapBlocks/MapBlocksTypes/DirtGround';
import { waterGround } from '../../MapBlocks/MapBlocksTypes/WaterGround';

const {given,when,then , creatures} = testingCreaturesSimpleEnvironement()


given('an array with 4 rabbit', () => {

    when('a rabbit is on the map ', () => {
        then('the rabbit is in collision with a spaceMapBlock he die', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        const spaceBlock = JSON.parse(JSON.stringify(spaceBorder))
        spaceBlock.hitBox.x = 450
        spaceBlock.hitBox.y = 450
        creature_CollisionWithSolidMapBlocks(testCreature[0] , spaceBlock)
        expect(testCreature[0].lifeTime).toBe(0)})
    })

    when('a rabbit is on the map ', () => {
        then('the rabbit is on a dirtGround Block nothig happen', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        const dirtBlock = JSON.parse(JSON.stringify(dirtGround))
        dirtBlock.hitBox.x = 450
        dirtBlock.hitBox.y = 450
        creature_CollisionWithSolidMapBlocks(testCreature[0] , dirtBlock)
        expect(testCreature[0].lifeTime).toBe(40000)})
    })

    when('a rabbit is on the map ', () => {
        then('the rabbit is in collision with a water block he die', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        const waterBlock = JSON.parse(JSON.stringify(waterGround))
        waterBlock.hitBox.x = 450
        waterBlock.hitBox.y = 450
        creature_CollisionWithSolidMapBlocks(testCreature[0] , waterBlock)
        expect(testCreature[0].lifeTime).toBe(0)})
    })

    
})