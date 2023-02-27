import { seeds } from "../../Items/ItemsTypes/Seeds";
import { testingCreaturesSimpleEnvironement } from "../../test/testingEnvironement";
import { Creature, CreatureSex } from "../Creature";
import { mouse } from "../CreaturesTypes/Mouse";
import { creature_lifeDecrease } from "./Creature_lifeDecrease";
import { creature_Fertility, creature_Gestation, creature_MakeBabyWithCreature } from "./Creature_Nursery";
import { creature_Nutrition, creature_hungry, creature_size } from './Creature_Nutrition';

const {given,when,then , creatures} = testingCreaturesSimpleEnvironement()



given('an array with 4 rabit', () => {

    when('a rabbit can eat a seed', () => {
        then('the rabit hit the seeds', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].hunger = 100
        testCreature[0].lifePoint = 10  
        testCreature[0].weight = 0.5
        const seed = {...seeds}
        seed.spriteBox.x = 500
        seed.spriteBox.y = 500
        seed.hitBox.x = 500
        seed.hitBox.y = 500
        expect(testCreature[0].hunger).toBe(100)
        creature_Nutrition( seed, null , testCreature[0] )
        expect(testCreature[0].hunger).toBe(500)
        expect(testCreature[0].lifePoint).toBe(10.4)
        expect(testCreature[0].weight).toBe(0.504)})
    })

    when('a mouse bite a rabbit', () => {
        then('the mouse hit the rabbit', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].lifePoint = 10  
        testCreature[0].weight = 0.5
        const mickey = {...mouse}
        mickey.spriteBox.x = 500
        mickey.spriteBox.y = 500
        mickey.hitBox.x = 500

        mickey.hitBox.y = 500
        
        creature_Nutrition( null, testCreature[0] , mickey )
        expect(testCreature[0].lifePoint).toBe(6.8)})
   
    then('the mouse kill the rabbit', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].lifePoint = 1  
        testCreature[0].weight = 0.5
        const mickey = {...mouse}
        mickey.spriteBox.x = 500
        mickey.spriteBox.y = 500
        mickey.hitBox.x = 500
        mickey.hitBox.y = 500
        mickey.hunger = 100
        mickey.lifePoint = 10
        mickey.weight = 0.5
        expect(testCreature[0].hunger).toBe(2000)
        creature_Nutrition( null, testCreature[0] , mickey )
        expect(testCreature[0].lifePoint).toBe(-1)
        expect(mickey.lifePoint).toBe(10.4)
        expect(mickey.weight).toBe(0.504)
        expect(mickey.hunger).toBe(500)
    })
    })
    

})



given('an array with 4 rabit', () => {

    when('a rabbit not eat anythings', () => {
        then('the rabit is more hungry', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].hunger = 100
        expect(testCreature[0].hunger).toBe(100)
        creature_hungry(  testCreature[0] )
        expect(testCreature[0].hunger).toBe(99)
    })
})

})


given('an array with 4 rabit', () => {

    when('a rabbit weight 4', () => {
        then('the rabit spritebox and hitbox w and h where 48px', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        creature_size(  testCreature[0] )
        expect(testCreature[0].spriteBox.h).toBe(48.28313737302301)
        expect(testCreature[0].spriteBox.w).toBe(48.28313737302301)
        expect(testCreature[0].hitBox.h).toBe(48.28313737302301)
        expect(testCreature[0].hitBox.w).toBe(48.28313737302301)

    })
    })
    when('a rabbit weight 2', () => {
        then('the rabit spritebox and hitbox w and h where 33px', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].weight = 2
        creature_size(  testCreature[0] )
        expect(testCreature[0].spriteBox.h).toBe(32.958368660043284)
        expect(testCreature[0].spriteBox.w).toBe(32.958368660043284)
        expect(testCreature[0].hitBox.h).toBe(32.958368660043284)
        expect(testCreature[0].hitBox.w).toBe(32.958368660043284)

    })})

    when('a rabbit weight 1', () => {
        then('the rabit spritebox and hitbox w and h where 20px', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].weight = 1
        creature_size(  testCreature[0] )
        expect(testCreature[0].spriteBox.h).toBe(20.79441541679836)
        expect(testCreature[0].spriteBox.w).toBe(20.79441541679836)
        expect(testCreature[0].hitBox.h).toBe(20.79441541679836)
        expect(testCreature[0].hitBox.w).toBe(20.79441541679836)

    })
})
when('a rabbit weight 0.5', () => {
    then('the rabit spritebox and hitbox w and h where 12px', () => {
    const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
    testCreature[0].weight = 0.5
    creature_size(  testCreature[0] )
    expect(testCreature[0].spriteBox.h).toBe(12.163953243244931)
    expect(testCreature[0].spriteBox.w).toBe(12.163953243244931)
    expect(testCreature[0].hitBox.h).toBe(12.163953243244931)
    expect(testCreature[0].hitBox.w).toBe(12.163953243244931)

})
})



})