import { testingCreaturesSimpleEnvironement } from "../../test/testingEnvironement";
import { Creature } from "../Creature";
import { death } from "./Creature_Death";

const {given,when,then , creatures} = testingCreaturesSimpleEnvironement()


const oneCreatureWith0LifePointAndOneWith0LifeTime = (creatures : Creature[]) => {
    const newArray = creatures.slice()
    creatures[0].lifePoint = 0
    creatures[1].lifeTime = 0
    return newArray
}

given('an array with 4 rabit', () => {

    when('all creature are alive  ', () => {
        then('all creatures Stay', () => {})
        const testCreature = JSON.parse(JSON.stringify(creatures))
        expect(death(testCreature)).toHaveLength(4)
    })

    when('all two creature death and two are alive  ', () => {
        then('all creatures Stay', () => {})
        const testCreature = JSON.parse(JSON.stringify(creatures))
        expect(death(oneCreatureWith0LifePointAndOneWith0LifeTime(testCreature))).toHaveLength(2)
    })

})