import { GameData, startData } from '../../StartData/StartData';
import { getCenterSpriteBox } from '../../Utilities/spriteBox/positionSpriteBox';
import { mouse } from '../CreaturesTypes/Mouse';
import { creature_updateSensorsPosition } from './Creature_sensors';

const given = describe
const when = describe
const then = it

const gameData: GameData = JSON.parse(JSON.stringify(startData))


const creatureInit = () => {
    gameData.creatures[0] = JSON.parse(JSON.stringify(mouse))
    gameData.creatures[0].spriteBox.x = 100
    gameData.creatures[0].spriteBox.y = 100
    gameData.creatures[0].spriteBox.speed = 5
}
given('a mouse is moving', () => {

    beforeEach(() => creatureInit())
    when('she go at x rad ', () => {
        then('the sensors is on x position', () => {

            const myCreature = gameData.creatures[0]
            const sensor = myCreature.sensors.sensors[0]

            // ta fonction 
            const x = myCreature.spriteBox.direction.x
            const y = myCreature.spriteBox.direction.y
            let creatureRad = Math.atan(y / x)
            if(x < 0 && y < 0) {
                creatureRad += Math.PI
            }
            else if (x < 0){
                creatureRad += Math.PI
            } 
            const offsetRad = ( sensor.degOffset * Math.PI / 180 ) + creatureRad
            creature_updateSensorsPosition(myCreature ,sensor)
            expect(sensor).toBe({
                "degOffset": sensor.degOffset,
                "distanceFromCreature": sensor.distanceFromCreature,
                "h": 15,
                "type": 2,
                "w": 15,
                "x": getCenterSpriteBox(myCreature.spriteBox).x + (Math.cos(offsetRad) * myCreature.sensors.sensors[0].distanceFromCreature),
                "y": getCenterSpriteBox(myCreature.spriteBox).y + (Math.sin(offsetRad) * myCreature.sensors.sensors[0].distanceFromCreature)
            })
        
        })
    })
})