import {BuildingType, GameData, startData} from "../StartData/StartData"
import {heroSpriteBoxUpdate} from "../Hero/HeroSpriteBox";
import {heroMove} from "../Hero/HeroMove";
import {buildingCollisionWithHero} from "./BuildingColisions&HitBoxUpdate";
import {keydownController, keyupController} from "../KeysInputs/keys";
import {heroUpdate} from "../Hero/HeroUpdate";

const given = describe
const when = describe
const then = it


let gameData: GameData = JSON.parse(JSON.stringify(startData))

const resetData = () => {
    gameData = JSON.parse(JSON.stringify(startData))
    gameData.building[0].spriteBox ={x: 1000, y: 1000, h: 100, w: 100}
    gameData.building[0].type = BuildingType.xWall
    gameData.hero.spriteBox.speed = 2
}

given('hero is on map between a wall and key input is send', () => {

    beforeEach(() => resetData())

    when('keydown input right is received', () => {
        then('Hero should not go right', () => {
            gameData.hero.spriteBox.x = 1000
            gameData.hero.spriteBox.y = 1000

            keyupController(gameData.keys,"ArrowRight")
            heroUpdate(gameData)
            buildingCollisionWithHero(gameData)
            expect(gameData.hero.spriteBox.y ).toBe(1000)
        })
    })
    when('keydown input left is received', () => {
        then('Hero should not go left', () => {
            gameData.hero.spriteBox.x = 1000
            gameData.hero.spriteBox.y = 1003

            keyupController(gameData.keys,"ArrowLeft")
            heroUpdate(gameData)
            buildingCollisionWithHero(gameData)
            expect(gameData.hero.spriteBox.y ).toBe(1003)
        })
    })
    when('keydown input down is received', () => {
        then('Hero should not go down', () => {
            gameData.hero.spriteBox.x = 1000
            gameData.hero.spriteBox.y = 1002

            keyupController(gameData.keys,"ArrowDown")
            heroUpdate(gameData)
            buildingCollisionWithHero(gameData)
            expect(gameData.hero.spriteBox.y ).toBe(1002)
        })
    })
    when('keydown input up is received', () => {
        then('Hero should not go up', () => {
            gameData.hero.spriteBox.x = 1000
            gameData.hero.spriteBox.y = 1000
            keydownController(gameData.keys, "ArrowUp")
            heroUpdate(gameData)
            buildingCollisionWithHero(gameData)
            expect(gameData.hero.spriteBox.x ).toBe(1000)
        })
    })
    when('keydown input up is received', () => {
        then('Hero should not go up', () => {
            gameData.hero.spriteBox.x = 1000
            gameData.hero.spriteBox.y = 1000
            gameData.building[1] = gameData.building[0]
            keydownController(gameData.keys, "ArrowUp")
            heroUpdate(gameData)
            buildingCollisionWithHero(gameData)
            expect(gameData.hero.spriteBox.x ).toBe(1000)
        })
    })
    when('keydown input up and left is received', () => {
        then('Hero should not go up and left ', () => {
            gameData.hero.spriteBox.x = 1000
            gameData.hero.spriteBox.y = 1000
            gameData.building[1] = gameData.building[0]
            keydownController(gameData.keys, "ArrowUp")
            keydownController(gameData.keys, "ArrowLeft")
            heroUpdate(gameData)
            buildingCollisionWithHero(gameData)
            expect(gameData.hero.spriteBox.x ).toBe(1000)
            expect(gameData.hero.spriteBox.y ).toBe(1000)
        })
    })
})