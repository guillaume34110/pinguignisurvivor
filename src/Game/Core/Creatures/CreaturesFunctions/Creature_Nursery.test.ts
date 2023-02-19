import { testingCreaturesSimpleEnvironement } from "../../test/testingEnvironement";
import { Creature, CreatureSex } from "../Creature";
import { creature_lifeDecrease } from "./Creature_lifeDecrease";
import { creature_Fertility, creature_Gestation, creature_MakeBabyWithCreature } from "./Creature_Nursery";

const {given,when,then , creatures} = testingCreaturesSimpleEnvironement()



given('an array with 4 rabit', () => {

    when('two rabbit can make baby', () => {
        then('two rabbit make baby', () => {})
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].sex = CreatureSex.Female
        testCreature[0].fertility = 100000
        testCreature[1].fertility = 100000
        expect(testCreature[0].gestation).toBe(false)
        creature_MakeBabyWithCreature(testCreature, testCreature[0] , testCreature[1] )
        expect(testCreature[0].gestation).toBe(true)
    })

    when('all creature are alive  ', () => {
        then('all creatures gain fertility', () => {})
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].fertility = 100
        creature_Fertility(testCreature[0])
        expect(testCreature[0].fertility).toBe(101)
    })

    when('all creature are alive and one pregnant ', () => {
        then('pregnant creatures not gain fertility', () => {})
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].gestation = true
        testCreature[0].fertility = 100
        creature_Fertility(testCreature[0])
        expect(testCreature[0].fertility).toBe(100)
    })

    when('all creature are alive and one pregnant ', () => {
        then('pregnant creatures not gain fertility', () => {})
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].gestation = true
        testCreature[0].gestationTime = 101
        creature_Gestation(testCreature[0])
        expect(testCreature[0].gestationTime).toBe(100)
    })
})