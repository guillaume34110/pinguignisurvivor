import { testingCreaturesSimpleEnvironement } from "../../test/testingEnvironement"
import { Creature, CreatureSex } from "../Creature"
import { creature_CollisionWithSolidMapBlocks, creature_collisionWithItem, creatures_CollisionWithCreatures } from './Creature_Collision';
import { spaceBorder } from '../../MapBlocks/MapBlocksTypes/SpaceBorder';
import { dirtGround } from '../../MapBlocks/MapBlocksTypes/DirtGround';
import { waterGround } from '../../MapBlocks/MapBlocksTypes/WaterGround';
import { seedsTree } from '../../Items/ItemsTypes/SeedsTree';
import { Item } from "../../Items/Item";
import { seeds } from '../../Items/ItemsTypes/Seeds';
import { mouse } from "../CreaturesTypes/Mouse";

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
        testCreature[0].sex = CreatureSex.Female
        testCreature[0].fertility = 100000
        testCreature[1].fertility = 100000
        expect(testCreature[0].gestation).toBe(false)
        creatures_CollisionWithCreatures(`x` ,  testCreature[0] , testCreature[1] )
        expect(testCreature[0].gestation).toBe(true)})
    })

    when(' a rabbit and a mouse is on the map ', () => {
        then('the mouse is in collision with the rabbit', () => {
            const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
            testCreature[0].lifePoint = 10  
            testCreature[0].weight = 0.5
            const mickey = {...mouse}
            mickey.spriteBox.x = 500
            mickey.spriteBox.y = 500
            mickey.hitBox.x = 500
            mickey.hitBox.y = 500
            creatures_CollisionWithCreatures(`x` ,  mickey , testCreature[0] )
            expect(testCreature[0].lifePoint).toBe(6.8)
        })
    })
    
    when(' two rabbit is on the map ', () => {
        then('the two rabbit is in collision', () => {
            const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
            testCreature[0].weight = 1  
            testCreature[1].weight = 0.5
            testCreature[0].spriteBox.x = 495
            testCreature[0].hitBox.x = 495
            testCreature[0].spriteBox.direction.x = 5
            testCreature[1].spriteBox.direction.x = -5
            creatures_CollisionWithCreatures(`x` , testCreature[1] , testCreature[0] )
            creatures_CollisionWithCreatures(`x` , testCreature[0] , testCreature[1] )
            expect(testCreature[0].spriteBox.x).toBe(495)
            expect(testCreature[1].spriteBox.x).toBe(515)
            expect(testCreature[0].spriteBox.direction.x).toBe(2.5)
            expect(testCreature[1].spriteBox.direction.x).toBe(-5)
        })
    })

    when(' two rabbit is on the map ', () => {
        then('the two rabbit is in collision', () => {
            const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
            testCreature[0].weight = 1  
            testCreature[1].weight = 0.5
            testCreature[0].spriteBox.y = 495
            testCreature[0].hitBox.y = 495
            testCreature[0].spriteBox.direction.y = 5
            testCreature[1].spriteBox.direction.y = -5
            creatures_CollisionWithCreatures(`y` , testCreature[1] , testCreature[0] )
            creatures_CollisionWithCreatures(`y` , testCreature[0] , testCreature[1] )
            expect(testCreature[0].spriteBox.y).toBe(495)
            expect(testCreature[1].spriteBox.y).toBe(515)
            expect(testCreature[0].spriteBox.direction.y).toBe(2.5)
            expect(testCreature[1].spriteBox.direction.y).toBe(-5)
        })
    })
})