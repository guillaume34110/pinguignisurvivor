import { testingCreaturesSimpleEnvironement } from "../../test/testingEnvironement";
import { Creature } from "../Creature";
import { creature_lifeDecrease } from "./Creature_lifeDecrease";

const {given,when,then , creatures} = testingCreaturesSimpleEnvironement()

given('an array with 4 rabit', () => {

    when('all creature are alive  ', () => {
        then('all creatures lose one lifeTime damage', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].lifeTime = 100
        creature_lifeDecrease(testCreature[0])
        expect(testCreature[0].lifeTime).toBe(99)})
    })

})