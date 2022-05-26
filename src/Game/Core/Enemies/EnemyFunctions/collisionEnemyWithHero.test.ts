import {Hero} from "../../Hero/Hero"
import {GameData, startData} from "../../StartData/StartData"
import {Enemy, enemyGeneric} from "../Enemy"
import {collisionEnemiesWithHero} from "./collisionEnemyWithHero"

const given = describe
const when = describe
const then = it

const gameData: GameData = JSON.parse(JSON.stringify(startData))

const init = () => {

    const hero: Hero = gameData.hero
    gameData.hero.health = 100
    gameData.hero.spriteBox = {
        x: 100,
        y: 100,
        w: 50,
        h: 50,
        direction: {
            radian: 0,
            x: 0,
            y: 0
        },
        speed: 5
    }
    gameData.hero.hitBox = {
        x:100,
        y:100,
        w:50,
        h:50,
    }

    const enemy: Enemy = Object.create(enemyGeneric)
    enemy.damage = 10
    enemy.hitBox.x = 100
    enemy.hitBox.y = 100
    enemy.hitBox.w = 50
    enemy.hitBox.h = 50
    gameData.enemies.push(enemy)
}

const resetCoolDown = () => {
    gameData.hero.invulnerabilityCoolDown = 0
}

given('hero and enemy are on the map', () => {

    // beforeAll(() => init())
    init()

    when('they have the same position', () => {
        then('hero should left 10 health points', () => {
            collisionEnemiesWithHero(gameData)
            expect(gameData.hero.health).toBe(90)
        })
    })

    when('they have the same position but heroCoolDown is not to 0', () => {
        then('nothing happened, hero should stay at 90 health points', () => {
            collisionEnemiesWithHero(gameData)
            expect(gameData.hero.health).toBe(90)
        })
    })

    when('enemy touch hero at corner UpLeft', () => {
        then('hero should left 10 health points', () => {
            gameData.enemies[0].hitBox.x = 51
            gameData.enemies[0].hitBox.y = 51
            resetCoolDown()
            collisionEnemiesWithHero(gameData)
            expect(gameData.hero.health).toBe(80)
        })

    })

    when('enemy touch hero at corner UpRight', () => {
        then('hero should left 10 health points', () => {
            gameData.enemies[0].hitBox.x = 149
            gameData.enemies[0].hitBox.y = 51
            resetCoolDown()
            collisionEnemiesWithHero(gameData)
            expect(gameData.hero.health).toBe(70)
        })

    })

    when('enemy touch hero at corner DownLeft', () => {
        then('hero should left 10 health points', () => {
            gameData.enemies[0].hitBox.x = 51
            gameData.enemies[0].hitBox.y = 149
            resetCoolDown()
            collisionEnemiesWithHero(gameData)
            expect(gameData.hero.health).toBe(60)
        })

    })

    when('enemy touch hero at corner DownRight', () => {
        then('hero should left 10 health points', () => {
            gameData.enemies[0].hitBox.x = 149
            gameData.enemies[0].hitBox.y = 149
            resetCoolDown()
            collisionEnemiesWithHero(gameData)
            expect(gameData.hero.health).toBe(50)
        })

    })

    when('enemy don\'t touch hero', () => {
        then('nothing happen', () => {
            gameData.enemies[0].hitBox.x = 150
            gameData.enemies[0].hitBox.y = 150
            resetCoolDown()
            collisionEnemiesWithHero(gameData)
            expect(gameData.hero.health).toBe(50)
        })

    })

})
