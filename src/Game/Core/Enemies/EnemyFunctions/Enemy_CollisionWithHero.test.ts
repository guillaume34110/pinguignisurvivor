import {Hero} from "../../Hero/Hero"
import {GameData, startData} from "../../StartData/StartData"
import {Enemy} from "../Enemy"
import {collision_EnemiesWithHero} from "./Collision_EnemyWithHero"
import {EnemiesSprite} from "../EnemiesSprite";

export const enemyGeneric: Enemy = {
    id: 0,
    sprite: {
        front: EnemiesSprite.rabbitFront,
        back: EnemiesSprite.rabbitBack,
        left: EnemiesSprite.rabbitLeft,
        right: EnemiesSprite.rabbitRight,
        sprite: EnemiesSprite.rabbitFront
    },
    spriteBox: {
        x: 0,
        y: 0,
        w: 32,
        h: 32,
        direction: {
            radian: 0,
            x: 0,
            y: 0
        },
        speed: 1,
    },
    hitBox: {
        x: 0,
        y: 0,
        w: 64,
        h: 32,
    },
    type: "",
    maxHealth: 100,
    health: 100,
    damage: 1,
}

const given = describe
const when = describe
const then = it

const gameData:GameData = Object.create(startData)
const hero: Hero = gameData.hero
const enemy: Enemy = Object.create(enemyGeneric)
const init = () => {
    hero.health = 100
    hero.spriteBox = {
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
            collision_EnemiesWithHero(gameData)
            expect(hero.health).toBe(90)
        })
    })

    when('enemy touch hero at corner UpLeft', () => {
        then('hero should left 10 health points', () => {
            enemy.spriteBox.x = 51
            enemy.spriteBox.y = 51
            collision_EnemiesWithHero(gameData)
            expect(hero.health).toBe(80)
        })

    })

    when('enemy touch hero at corner UpRight', () => {
        then('hero should left 10 health points', () => {
            enemy.spriteBox.x = 149
            enemy.spriteBox.y = 51
            collision_EnemiesWithHero(gameData)
            expect(hero.health).toBe(70)
        })

    })

    when('enemy touch hero at corner DownLeft', () => {
        then('hero should left 10 health points', () => {
            enemy.spriteBox.x = 51
            enemy.spriteBox.y = 149
            collision_EnemiesWithHero(gameData)
            expect(hero.health).toBe(60)
        })

    })

    when('enemy touch hero at corner DownRight', () => {
        then('hero should left 10 health points', () => {
            enemy.spriteBox.x = 149
            enemy.spriteBox.y = 149
            collision_EnemiesWithHero(gameData)
            expect(hero.health).toBe(50)
        })

    })

    when('enemy don\'t touch hero', () => {
        then('nothing happen', () => {
            enemy.spriteBox.x = 150
            enemy.spriteBox.y = 150
            collision_EnemiesWithHero(gameData)
            expect(hero.health).toBe(50)
        })

    })

})
