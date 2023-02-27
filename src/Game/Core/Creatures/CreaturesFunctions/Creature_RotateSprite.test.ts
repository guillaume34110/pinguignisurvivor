import { creature_RotateSpriteBy10Degrees } from './Creature_RotateSprite';
import { SpriteBox } from '../../StartData/StartData';
import { testingCreaturesSimpleEnvironement } from '../../test/testingEnvironement';
import { Creature } from '../Creature';
const {given,when,then , creatures} = testingCreaturesSimpleEnvironement()


given('an array with 4 rabbit', () => {

    when('a rabbit is at direction 10 degrés ', () => {
        then('the rabbit sprite is front', () => {
        const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
        testCreature[0].spriteBox.direction.degree10 = 1
        creature_RotateSpriteBy10Degrees(  testCreature[0] )
        expect(testCreature[0].sprite.sprite).toBe(testCreature[0].sprite.right)
    })
})

when('a rabbit is at direction 90 degrés ', () => {
    then('the rabbit sprite is front', () => {
    const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
    testCreature[0].spriteBox.direction.degree10 = 9
    creature_RotateSpriteBy10Degrees(  testCreature[0] )
    expect(testCreature[0].sprite.sprite).toBe(testCreature[0].sprite.front)
})
})

when('a rabbit is at direction 180 degrés ', () => {
    then('the rabbit sprite is left', () => {
    const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
    testCreature[0].spriteBox.direction.degree10 = 18
    creature_RotateSpriteBy10Degrees(  testCreature[0] )
    expect(testCreature[0].sprite.sprite).toBe(testCreature[0].sprite.left)
})
})

when('a rabbit is at direction 270 degrés ', () => {
    then('the rabbit sprite is back', () => {
    const testCreature : Creature[] = JSON.parse(JSON.stringify(creatures))
    testCreature[0].spriteBox.direction.degree10 = 27
    creature_RotateSpriteBy10Degrees(  testCreature[0] )
    expect(testCreature[0].sprite.sprite).toBe(testCreature[0].sprite.back)
})
})
})