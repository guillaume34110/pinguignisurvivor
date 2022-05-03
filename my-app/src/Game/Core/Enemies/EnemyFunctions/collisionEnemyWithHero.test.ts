import { Enemy, enemyGeneric, Hero, startData } from "../../StartData/StartData"
import { collisionEnemiesWithHero } from "./collisionEnemyWithHero"

const given = describe
const when = describe
const then = it

const hero: Hero = Object.create(startData.hero)
const enemy: Enemy = Object.create(enemyGeneric)
const init = () => {
    hero.health = 100
    hero.spriteBox = {
        x: 100,
        y: 100,
        w: 50,
        h: 50
    }
    enemy.damage = 10
    enemy.spriteBox.x = 100
    enemy.spriteBox.y = 100
    enemy.spriteBox.w = 50
    enemy.spriteBox.h = 50
}

given('hero and enemy are on the map', () => {

    beforeAll(() => init())

    when('they have the same position', () => {
        then('hero should left 10 health points', () => {
            collisionEnemiesWithHero([enemy], hero)
            expect(hero.health).toBe(90)
        })
    })

    when('enemy touch hero at corner UpLeft', () => {
        then('hero should left 10 health points', () => {
            enemy.spriteBox.x = 51
            enemy.spriteBox.y = 51
            collisionEnemiesWithHero([enemy], hero)
            expect(hero.health).toBe(80)
        })

    })

    when('enemy touch hero at corner UpRight', () => {
        then('hero should left 10 health points', () => {
            enemy.spriteBox.x = 149
            enemy.spriteBox.y = 51
            collisionEnemiesWithHero([enemy], hero)
            expect(hero.health).toBe(70)
        })

    })

    when('enemy touch hero at corner DownLeft', () => {
        then('hero should left 10 health points', () => {
            enemy.spriteBox.x = 51
            enemy.spriteBox.y = 149
            collisionEnemiesWithHero([enemy], hero)
            expect(hero.health).toBe(60)
        })

    })

    when('enemy touch hero at corner DownRight', () => {
        then('hero should left 10 health points', () => {
            enemy.spriteBox.x = 149
            enemy.spriteBox.y = 149
            collisionEnemiesWithHero([enemy], hero)
            expect(hero.health).toBe(50)
        })

    })

    when('enemy don\'t touch hero', () => {
        then('nothing happen', () => {
            enemy.spriteBox.x = 150
            enemy.spriteBox.y = 150
            collisionEnemiesWithHero([enemy], hero)
            expect(hero.health).toBe(50)
        })

    })

})
