import { testingCreaturesSimpleEnvironement } from "../../test/testingEnvironement"
import { Creature } from "../Creature"
import { creatures_HuntItems, creatures_HuntingInhibitor } from "./Creature_Hunt"
import { seeds } from '../../Items/ItemsTypes/Seeds';
import { Sensor } from '../../StartData/StartData';
import { mouse } from "../CreaturesTypes/Mouse";
import { creature_updateSensorsPosition } from "./Creature_sensors";

const {given,when,then , creatures} = testingCreaturesSimpleEnvironement()


const oneSeedsNearARabbit = (creatures : Creature[]) => {
  /*  const newArray = creatures.slice()
    creatures[0].lifePoint = 0
    creatures[1].lifeTime = 0
    return newArray*/
}

given('an array with 4 rabit', () => {

    when('a rabit have eaten a seeds and have 51 of huntingInhibitor', () => {
        then('a frame is done', () => {})
        const testCreature =JSON.parse(JSON.stringify(creatures))
        testCreature[0].huntingInhibitor = 51
        creatures_HuntingInhibitor(testCreature[0])
        expect(testCreature[0].huntingInhibitor).toBe(50)
    })


    when('a rabbit is near a seed', () => {
        then('a rabbit hunt this seed', () => {})
        const testCreature = JSON.parse(JSON.stringify(creatures))
        const seed = {...seeds}
        seed.spriteBox.x = 520
        seed.spriteBox.y = 520
        seed.hitBox.x = 520
        seed.hitBox.y = 520
        expect(testCreature[0].hunting).toBe(false)
        creatures_HuntItems(testCreature[0], testCreature[0].sensors.sensors[2], seed)
        expect(testCreature[0].hunting).toBe(true)
    })

    when('a mouse is near a rabbit', () => {
        then('the mouse hunt this rabbit', () => {})
        const testCreature = JSON.parse(JSON.stringify(creatures))
        const mickey = {...mouse}
        mickey.spriteBox.x = 520
        mickey.spriteBox.y = 520
        mickey.hitBox.x = 520
        mickey.hitBox.y = 520
        mickey.sensors.sensors.forEach((sensor : Sensor) => {
            creature_updateSensorsPosition(mickey, sensor)
        })
        expect(mickey.hunting).toBe(false)
        creatures_HuntItems(mickey, mickey.sensors.sensors[2], testCreature[0])
        expect(mickey.hunting).toBe(true)
    })
})