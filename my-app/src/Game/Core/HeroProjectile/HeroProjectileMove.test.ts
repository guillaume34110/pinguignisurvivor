import { Hero, heroGeneric } from "../Hero/Hero"
import { DirectionProjectile, HeroProjectile, heroProjectileGeneric } from "./HeroProjectile"
import { heroProjectileMove } from "./HeroProjectileMove"
import { heroProjectileSetDirection } from "./HeroProjectileSetDirection"

const given = describe
const when = describe
const then = it

const hero: Hero = Object.create(heroGeneric)
const heroProjectile: HeroProjectile = Object.create(heroProjectileGeneric)

const testInit = () => { 
    hero.spriteBox = {
        x:100,
        y:100,
        w:32,
        h:32
    }
    heroProjectile.speed = 5
    heroProjectile.spriteBox.x = hero.spriteBox.x + (hero.spriteBox.w / 2)
    heroProjectile.spriteBox.y = hero.spriteBox.y + (hero.spriteBox.h / 2)
}
given('hero will shot a projectile from his position', () => {

    beforeEach(() => testInit())

    when('projectile direction is set to UP', () => {
        then('should move the projectile up from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            heroProjectileSetDirection(heroProjectile, DirectionProjectile.Up)
            expect(heroProjectile.direction.x).toBe(0)
            expect(heroProjectile.direction.y).toBe(-5)
            heroProjectileMove(heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(111)

        })
    })

    when('projectile direction is set to DOWN', () => {
        then('should move the projectile down from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            heroProjectileSetDirection(heroProjectile, DirectionProjectile.Down)
            expect(heroProjectile.direction.x).toBe(0)
            expect(heroProjectile.direction.y).toBe(5)
            heroProjectileMove(heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(121)

        })
    })

    when('projectile direction is set to LEFT', () => {
        then('should move the projectile left from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            heroProjectileSetDirection(heroProjectile, DirectionProjectile.Left)
            expect(heroProjectile.direction.x).toBe(-5)
            expect(heroProjectile.direction.y).toBe(0)
            heroProjectileMove(heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(111)
            expect(heroProjectile.spriteBox.y).toBe(116)

        })
    })

    when('projectile direction is set to RIGHT', () => {
        then('should move the projectile right from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            heroProjectileSetDirection(heroProjectile, DirectionProjectile.Right)
            expect(heroProjectile.direction.x).toBe(5)
            expect(heroProjectile.direction.y).toBe(0)
            heroProjectileMove(heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(121)
            expect(heroProjectile.spriteBox.y).toBe(116)

        })
    })

    when('projectile direction is set to Random', () => {
        then('should move the projectile random from hero', () => {

            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            heroProjectileSetDirection(heroProjectile, DirectionProjectile.Random)
            heroProjectileMove(heroProjectile)
            heroProjectileMove(heroProjectile)
            heroProjectileMove(heroProjectile)
            expect(Math.round(heroProjectile.spriteBox.x)).toBe(Math.round(116 + heroProjectile.direction.x * 3))
            expect(Math.round(heroProjectile.spriteBox.y)).toBe(Math.round(116 + heroProjectile.direction.y * 3))

        })
    })

})