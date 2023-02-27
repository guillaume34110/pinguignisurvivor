import { testingCreaturesSimpleEnvironement } from "../../test/testingEnvironement"
import { Creature } from "../Creature"
import { creatures_HitBox } from "./Creature_HitBox"
import { SpriteBox } from '../../StartData/StartData';

const {given,when,then , creatures} = testingCreaturesSimpleEnvironement()



given('an array with 4 rabit', () => {

    when('all creature are alive  ', () => {
        then('all creatures lose one lifeTime damage', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].spriteBox.x = 600
        testCreature[0].spriteBox.y = 600 
        testCreature[0].spriteBox.h = 100
        creatures_HitBox(testCreature[0])
        expect(testCreature[0].hitBox.x).toBe(600)
        expect(testCreature[0].hitBox.y).toBe(650)})
    })

})