import {Hero} from "../../Hero/Hero"
import {DirectionEnum, spriteBoxSetDirection} from "../../Utilities/spriteBox/directionSpriteBox"
import {HeroProjectile} from "../HeroProjectile"
import {heroProjectile_Move} from "./HeroProjectile_Move"
import {GameData, startData} from "../../StartData/StartData";
import {HeroProjectileSprite} from "../HeroProjectileSprite";


export const heroProjectileGeneric: HeroProjectile = {
    // un sprite "projectileGeneric" => carre unicolore rouge par exemple
    id: 0,
    sprite: {
        front: HeroProjectileSprite.snowballFront,
        back: HeroProjectileSprite.snowballFront,
        left: HeroProjectileSprite.snowballFront,
        right: HeroProjectileSprite.snowballFront,
        sprite: HeroProjectileSprite.snowballFront
    },
    spriteBox: {
        x: 0,
        y: 0,
        w: 4,
        h: 4,
        direction: {
            radian: 0,
            x: 0,
            y: 0,
        },
        speed: 1,
    },
    hitBox: {
        x: 0,
        y: 0,
        w: 4,
        h: 4,
    },
    type: "projectileGeneric",
    name : "generic",
    level: 0,
    damage: 0,
    criticMultiply: 0,
    amountProjectile: 1,
    penetration: 0,
    durationEffect: 0,
    coolDown: 0,
    interval: 1,
    intervalActual: 0,
    distance: 0,
    blockByWall: true,
    chance: 0,
    poolLimit: 100
}

const given = describe
const when = describe
const then = it

const gameData: GameData = Object.create(startData)
const hero: Hero = gameData.hero
const heroProjectile: HeroProjectile = JSON.parse(JSON.stringify(heroProjectileGeneric))

const testInit = () => {
    hero.spriteBox = {
        x: 100,
        y: 100,
        w: 32,
        h: 32,
        direction: {
            radian: 0,
            x: 0,
            y: 0
        },
        speed: 5
    }
    heroProjectile.spriteBox.speed = 5
    heroProjectile.spriteBox.x = hero.spriteBox.x + (hero.spriteBox.w / 2)
    heroProjectile.spriteBox.y = hero.spriteBox.y + (hero.spriteBox.h / 2)
}
given('hero will shot a projectile from his position', () => {

    beforeEach(() => testInit())

    when('projectile direction is set to UP', () => {
        then('should move the projectile up from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            spriteBoxSetDirection(heroProjectile.spriteBox, DirectionEnum.Up)
            expect(heroProjectile.spriteBox.direction.x).toBe(0)
            expect(heroProjectile.spriteBox.direction.y).toBe(-5)
            heroProjectile_Move(gameData, heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(111)

        })
    })

    when('projectile direction is set to DOWN', () => {
        then('should move the projectile down from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            spriteBoxSetDirection(heroProjectile.spriteBox, DirectionEnum.Down)
            expect(heroProjectile.spriteBox.direction.x).toBe(0)
            expect(heroProjectile.spriteBox.direction.y).toBe(5)
            heroProjectile_Move(gameData, heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(121)

        })
    })

    when('projectile direction is set to LEFT', () => {
        then('should move the projectile left from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            spriteBoxSetDirection(heroProjectile.spriteBox, DirectionEnum.Left)
            expect(heroProjectile.spriteBox.direction.x).toBe(-5)
            expect(heroProjectile.spriteBox.direction.y).toBe(0)
            heroProjectile_Move(gameData, heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(111)
            expect(heroProjectile.spriteBox.y).toBe(116)

        })
    })

    when('projectile direction is set to RIGHT', () => {
        then('should move the projectile right from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            spriteBoxSetDirection(heroProjectile.spriteBox, DirectionEnum.Right)
            expect(heroProjectile.spriteBox.direction.x).toBe(5)
            expect(heroProjectile.spriteBox.direction.y).toBe(0)
            heroProjectile_Move(gameData, heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(121)
            expect(heroProjectile.spriteBox.y).toBe(116)

        })
    })

    when('projectile direction is set to Random', () => {
        then('should move the projectile random from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            spriteBoxSetDirection(heroProjectile.spriteBox, DirectionEnum.Random)
            heroProjectile_Move(gameData, heroProjectile)
            heroProjectile_Move(gameData, heroProjectile)
            heroProjectile_Move(gameData, heroProjectile)
            expect(Math.round(heroProjectile.spriteBox.x)).toBe(Math.round(116 + heroProjectile.spriteBox.direction.x * 3))
            expect(Math.round(heroProjectile.spriteBox.y)).toBe(Math.round(116 + heroProjectile.spriteBox.direction.y * 3))

        })
    })

})

