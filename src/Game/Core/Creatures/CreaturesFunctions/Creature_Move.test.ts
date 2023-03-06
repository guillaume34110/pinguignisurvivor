import { testingCreaturesSimpleEnvironement } from '../../test/testingEnvironement';
import { Creature } from '../Creature';
import { creatures_Move, creatures_CollisionWithMapBlockMove, creatures_collisionBetweenMove, creatures_pushOtherCreature, creature_loseSpeed } from './Creature_Move';
const {given,when,then , creatures} = testingCreaturesSimpleEnvironement()



given('an array with 4 rabit', () => {

    when('a rabbit on the map', () => {
        then('a rabbit move with <0.003 ', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].spriteBox.direction.degree10 = 1
        creatures_Move(testCreature[0] , 0.003)
        expect(testCreature[0].spriteBox.direction.degree10).toBe(0)})
    })

    when('a rabbit on the map', () => {
        then('a rabbit move with >0.99 ', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].spriteBox.direction.degree10 = 1
        creatures_Move(testCreature[0] , 0.99)
        expect(testCreature[0].spriteBox.direction.degree10).toBe(2)})
    })

    when('a rabbit on the map', () => {
        then('a rabbit move with >0.5 ', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].spriteBox.direction.degree10 = 9
        testCreature[0].spriteBox.speed = 5
        creatures_Move(testCreature[0] , 0.5)
        expect(testCreature[0].spriteBox.direction.degree10).toBe(9)
        expect(testCreature[0].spriteBox.x).toBe(500)
        expect(testCreature[0].spriteBox.y).toBe(505)
    })    
    })


    when('a rabbit on the map', () => {
        then('a rabbit is in collision with a mapBock ', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].spriteBox.direction.x = 5
        testCreature[0].spriteBox.direction.y = 5
        testCreature[0].spriteBox.speed = 5
        creatures_CollisionWithMapBlockMove(testCreature[0] )
        expect(testCreature[0].huntingInhibitor).toBe(200)
        expect(testCreature[0].spriteBox.x).toBe(450)
        expect(testCreature[0].spriteBox.y).toBe(450)
    })    
    })

    when('a rabbit on the map', () => {
        then('a rabbit is in collision with an other rabbit ', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].spriteBox.direction.x = 5
        testCreature[0].spriteBox.direction.y = 5
        testCreature[0].spriteBox.speed = 5
        creatures_collisionBetweenMove(testCreature[0] ,'x')
        creatures_collisionBetweenMove(testCreature[0] ,'y')
        expect(testCreature[0].spriteBox.x).toBe(495)
        expect(testCreature[0].spriteBox.y).toBe(495)
    })    
    })

    when('a rabbit on the map', () => {
        then('a rabbit is in push with an other rabbit ', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].spriteBox.direction.x = 5
        testCreature[0].spriteBox.direction.y = 5
        testCreature[0].spriteBox.speed = 5
        creatures_pushOtherCreature(testCreature[1],testCreature[0] , 'x')
        creatures_pushOtherCreature(testCreature[1] ,testCreature[0],'y')
        expect(testCreature[1].spriteBox.x).toBe(510)
        expect(testCreature[1].spriteBox.y).toBe(505)
        expect(testCreature[0].spriteBox.direction.x).toBe(1.25)
        expect(testCreature[0].spriteBox.direction.y).toBe(1.25)
    })    
    })
    
    when('a rabbit on the map', () => {
        then('a rabbit is losing speed ', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].spriteBox.direction.x = 5
        testCreature[0].spriteBox.direction.y = 5
        testCreature[0].spriteBox.speed = 5
        creature_loseSpeed(testCreature[0])
        expect(testCreature[0].spriteBox.direction.x).toBe(2.5)
    })    
    })

})