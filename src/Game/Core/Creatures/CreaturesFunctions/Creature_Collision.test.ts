import { testingCreaturesSimpleEnvironement } from "../../test/testingEnvironement"
import { Creature, CreatureSex } from "../Creature"
import { creature_CollisionWithSolidMapBlocks, creature_collisionWithItem, creatures_CollisionWithCreatures } from './Creature_Collision';
import { spaceBorder } from '../../MapBlocks/MapBlocksTypes/SpaceBorder';
import { dirtGround } from '../../MapBlocks/MapBlocksTypes/DirtGround';
import { waterGround } from '../../MapBlocks/MapBlocksTypes/WaterGround';
import { seedsTree } from '../../Items/ItemsTypes/SeedsTree';
import { Item } from "../../Items/Item";
import { seeds } from '../../Items/ItemsTypes/Seeds';

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

    when('a rabbit is on the map ', () => {
        then('the rabbit is in collision with a three', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        const tree : Item= JSON.parse(JSON.stringify(seedsTree))
        tree.hitBox.x = 500
        tree.hitBox.y = 500
        creature_collisionWithItem(testCreature[0] , tree)
        expect(testCreature[0].huntingInhibitor).toBe(200)})
    })

    when('a rabbit is on the map ', () => {
        then('the rabbit is in collision with a seeds', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].hunger = 0
        const seed : Item= JSON.parse(JSON.stringify(seeds))
        seed.hitBox.x = 500
        seed.hitBox.y = 500
        creature_collisionWithItem(testCreature[0] , seed)
        expect(testCreature[0].hunger).toBe(400)})
    })

    when(' two rabbit is on the map ', () => {
        then('the male rabbit is in collision with a fertile female rabbit', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].fertility = 100000
        testCreature[1].fertility = 100000
        expect(testCreature[0].gestation).toBe(false)
        creatures_CollisionWithCreatures(`x` ,  testCreature[0] , testCreature[1] )
        expect(testCreature[0].gestation).toBe(true)})
    })
    
})