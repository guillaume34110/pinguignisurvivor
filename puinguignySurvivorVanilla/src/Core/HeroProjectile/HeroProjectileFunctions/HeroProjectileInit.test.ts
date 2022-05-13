import {Hero} from "../../Hero/Hero.js"
import {DirectionInRadian} from "../../Utilities/directionSpriteBox.js"
import {heroProjectileMove} from "./HeroProjectileMove.js"
import {heroProjectileInitialize, HeroProjectilesEnum} from "./HeroProjectileInit.js";
import {HeroProjectile} from "../HeroProjectile.js";
import {startData} from "../../StartData/StartData.js";

const given = describe
const when = describe
const then = it

const hero: Hero = startData.hero

const testInit = () => {
    hero.spriteBox = {
        x: 100,
        y: 100,
        w: 32,
        h: 32,
        direction: {
            radian: DirectionInRadian.Right,
            x: 5,
            y: 0
        },
        speed: 5
    }
    hero.projectileSpeed = 1
}
given('hero will shot a projectile from his position', () => {

    beforeEach(() => testInit())

    when('shot a snowBall', () => {
        then('should move the snowBall same direction than hero', () => {

            const heroProjectile: HeroProjectile = heroProjectileInitialize(
                HeroProjectilesEnum.snowBall, hero.spriteBox.direction.radian
            )
            expect(heroProjectile.spriteBox.x).toBe(116)
            expect(heroProjectile.spriteBox.y).toBe(116)
            expect(heroProjectile.spriteBox.direction.x).toBe(5 + 1 + 1)
            expect(heroProjectile.spriteBox.direction.y).toBe(0)
            heroProjectileMove(heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(123)
            expect(heroProjectile.spriteBox.y).toBe(116)
            heroProjectileMove(heroProjectile)
            heroProjectileMove(heroProjectile)
            expect(heroProjectile.spriteBox.x).toBe(137)
            expect(heroProjectile.spriteBox.y).toBe(116)

        })
    })

})
