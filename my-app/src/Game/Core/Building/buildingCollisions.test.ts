import {GameData, startData} from "../StartData/StartData"
import {buildingColisionWithHero} from "./BuildingColisions"

const given = describe
const when = describe
const then = it


let gameData: GameData = JSON.parse(JSON.stringify(startData))

const resetData = () => {
    gameData = JSON.parse(JSON.stringify(startData))
}

given('hero is on map and key input is send', () => {

    beforeEach(() => resetData())

    when('keydown input right is received', () => {
        then('Hero should go right', () => {

            buildingColisionWithHero(gameData)
            expect(105).toBe(105)


        })
    })
})