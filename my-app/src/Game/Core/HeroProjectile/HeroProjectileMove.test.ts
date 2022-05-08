import {Hero} from "../Hero/Hero"
import {DirectionEnum, spriteBoxSetDirection} from "../Utilities/directionSpriteBox"
import {HeroProjectile, heroProjectileGeneric} from "./HeroProjectile"
import {heroProjectileMove} from "./HeroProjectileMove"
import {heroesGeneric} from "../Hero/Heroes";

const given = describe
const when = describe
const then = it

const hero: Hero = Object.create(heroesGeneric.pinguigny)
const heroProjectile: HeroProjectile = Object.create(heroProjectileGeneric)

const testInit = () => {
    hero.spriteBox = {
        x: 100,
        y: 100,
        w: 32,
        h: 32,
        direction: {
            x: 0,
            y: 0,
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
            heroProjectileMove(heroProjectile)
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
            heroProjectileMove(heroProjectile)
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
            heroProjectileMove(heroProjectile)
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
            heroProjectileMove(heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(121)
            expect(heroProjectile.spriteBox.y).toBe(116)

        })
    })

    when('projectile direction is set to Random', () => {
        then('should move the projectile random from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            spriteBoxSetDirection(heroProjectile.spriteBox, DirectionEnum.Random)
            heroProjectileMove(heroProjectile)
            heroProjectileMove(heroProjectile)
            heroProjectileMove(heroProjectile)
            expect(Math.round(heroProjectile.spriteBox.x)).toBe(Math.round(116 + heroProjectile.spriteBox.direction.x * 3))
            expect(Math.round(heroProjectile.spriteBox.y)).toBe(Math.round(116 + heroProjectile.spriteBox.direction.y * 3))

        })
    })

})
