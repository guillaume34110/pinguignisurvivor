import {BuildingType, GameData, startData} from "../StartData/StartData"
import {heroSpriteBoxUpdate} from "../Hero/HeroSpriteBox";
import {heroMove} from "../Hero/HeroMove";
import {buildingCollisionWithHero} from "./BuildingColisions&HitBoxUpdate";
import {keyupController} from "../KeysInputs/keys";

const given = describe
const when = describe
const then = it


let gameData: GameData = JSON.parse(JSON.stringify(startData))

const resetData = () => {
    gameData = JSON.parse(JSON.stringify(startData))
    gameData.building[0].spriteBox ={x: 1000, y: 1000, h: 102, w: 102}
    gameData.building[0].type = BuildingType.xWall
}

given('hero is on map between a wall and key input is send', () => {

    beforeEach(() => resetData())

    when('keydown input right is received', () => {
        then('Hero should not go right', () => {
            gameData.hero.spriteBox.x = 1000
            gameData.hero.spriteBox.y = 1000
            heroSpriteBoxUpdate(gameData)
            keyupController(gameData.keys,"d")
            heroMove(gameData)
            buildingCollisionWithHero(gameData)
            expect(gameData.hero.spriteBox.y ).toBe(1000)
        })
    })
    when('keydown input left is received', () => {
        then('Hero should not go right', () => {
            gameData.hero.spriteBox.x = 1000
            gameData.hero.spriteBox.y = 1003
            heroSpriteBoxUpdate(gameData)
            keyupController(gameData.keys,"q")
            heroMove(gameData)
            buildingCollisionWithHero(gameData)
            expect(gameData.hero.spriteBox.y ).toBe(1003)
        })
    })
})