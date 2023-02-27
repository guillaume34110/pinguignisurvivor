import { testingCreaturesSimpleEnvironement } from '../../test/testingEnvironement';
import { Creature, CreatureSex } from '../Creature';
import { creature_MaleHuntFemale } from './Creature_Reproduction';

const {given,when,then , creatures} = testingCreaturesSimpleEnvironement()


given('an array with 4 rabit', () => {

    when('a male rabbit see a female rabiit and is overFertility', () => {
        then('the rabit hunt the female', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].sensors.sensors[2].x = 450
        testCreature[0].sensors.sensors[2].y = 450
        testCreature[1].sex = CreatureSex.Female
        testCreature[0].fertility = 100000
        testCreature[1].fertility = 100000
        creature_MaleHuntFemale(  testCreature[0] ,testCreature[0].sensors.sensors[2], testCreature[1] )
        expect(testCreature[0].hunting).toBe(true)
    })
})

when('a female rabbit see a male rabit and is overFertility', () => {
    then('the rabit not hunt the male', () => {
    const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
    testCreature[0].sensors.sensors[2].x = 450
    testCreature[0].sensors.sensors[2].y = 450
    testCreature[0].sex = CreatureSex.Female
    testCreature[0].fertility = 100000
    testCreature[1].fertility = 100000
    creature_MaleHuntFemale(  testCreature[0] ,testCreature[0].sensors.sensors[2], testCreature[1] )
    expect(testCreature[0].hunting).toBe(false)
})
})

})