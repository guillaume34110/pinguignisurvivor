import {Hero} from "../../Hero/Hero"
import {DirectionEnum, spriteBoxSetDirectionWithEnum} from "../../Utilities/spriteBox/directionSpriteBox"
import {HeroProjectileClass, heroProjectileGeneric} from "../HeroProjectile"
import {heroProjectileMove, heroProjectilesMove} from "./HeroProjectileMove"
import {GameData, startData} from "../../StartData/StartData";

const given = describe
const when = describe
const then = it

const gameData: GameData = Object.create(startData)
const hero: Hero = gameData.hero
const heroProjectile: HeroProjectileClass = Object.create(heroProjectileGeneric)
gameData.heroProjectiles.push(heroProjectile)

const testInit = () => {
    gameData.hero.spriteBox = {
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

    gameData.heroProjectiles[0].spriteBox.speed = 5
    gameData.heroProjectiles[0].intervalActual = 0
    gameData.heroProjectiles[0].spriteBox.x = gameData.hero.spriteBox.x + (gameData.hero.spriteBox.w / 2)
    gameData.heroProjectiles[0].spriteBox.y = gameData.hero.spriteBox.y + (gameData.hero.spriteBox.h / 2)

}

given('hero will shot a projectile from his position', () => {

    beforeEach(() => testInit())

    when('projectile direction is set to UP', () => {
        then('should move the projectile up from hero', () => {

            expect(gameData.heroProjectiles[0].spriteBox.x).toBe(116)
            expect(gameData.heroProjectiles[0].spriteBox.y).toBe(116)
            spriteBoxSetDirectionWithEnum(gameData.heroProjectiles[0].spriteBox, DirectionEnum.Up)
            expect(gameData.heroProjectiles[0].spriteBox.direction.x).toBe(0)
            expect(gameData.heroProjectiles[0].spriteBox.direction.y).toBe(-5)
            heroProjectilesMove(gameData)
            expect(gameData.heroProjectiles[0].spriteBox.x).toBe(116)
            expect(gameData.heroProjectiles[0].spriteBox.y).toBe(111)

        })
    })

    when('projectile direction is set to DOWN', () => {
        then('should move the projectile down from hero', () => {

            expect(gameData.heroProjectiles[0].spriteBox.x).toBe(116)
            expect(gameData.heroProjectiles[0].spriteBox.y).toBe(116)
            spriteBoxSetDirectionWithEnum(gameData.heroProjectiles[0].spriteBox, DirectionEnum.Down)
            expect(gameData.heroProjectiles[0].spriteBox.direction.x).toBe(0)
            expect(gameData.heroProjectiles[0].spriteBox.direction.y).toBe(5)
            heroProjectileMove(gameData, gameData.heroProjectiles[0])
            expect(gameData.heroProjectiles[0].spriteBox.x).toBe(116)
            expect(gameData.heroProjectiles[0].spriteBox.y).toBe(121)

        })
    })

    when('projectile direction is set to LEFT', () => {
        then('should move the projectile left from hero', () => {

            expect(gameData.heroProjectiles[0].spriteBox.x).toBe(116)
            expect(gameData.heroProjectiles[0].spriteBox.y).toBe(116)
            spriteBoxSetDirectionWithEnum(gameData.heroProjectiles[0].spriteBox, DirectionEnum.Left)
            expect(gameData.heroProjectiles[0].spriteBox.direction.x).toBe(-5)
            expect(gameData.heroProjectiles[0].spriteBox.direction.y).toBe(0)
            heroProjectileMove(gameData, gameData.heroProjectiles[0])
            expect(gameData.heroProjectiles[0].spriteBox.x).toBe(111)
            expect(gameData.heroProjectiles[0].spriteBox.y).toBe(116)

        })
    })

    when('projectile direction is set to RIGHT', () => {
        then('should move the projectile right from hero', () => {

            expect(gameData.heroProjectiles[0].spriteBox.x).toBe(116)
            expect(gameData.heroProjectiles[0].spriteBox.y).toBe(116)
            spriteBoxSetDirectionWithEnum(gameData.heroProjectiles[0].spriteBox, DirectionEnum.Right)
            expect(gameData.heroProjectiles[0].spriteBox.direction.x).toBe(5)
            expect(gameData.heroProjectiles[0].spriteBox.direction.y).toBe(0)
            heroProjectileMove(gameData, gameData.heroProjectiles[0])
            expect(gameData.heroProjectiles[0].spriteBox.x).toBe(121)
            expect(gameData.heroProjectiles[0].spriteBox.y).toBe(116)

        })
    })

    when('projectile direction is set to Random', () => {
        then('should move the projectile random from hero', () => {

            expect(gameData.heroProjectiles[0].spriteBox.x).toBe(116)
            expect(gameData.heroProjectiles[0].spriteBox.y).toBe(116)
            spriteBoxSetDirectionWithEnum(gameData.heroProjectiles[0].spriteBox, DirectionEnum.Random)
            heroProjectileMove(gameData, gameData.heroProjectiles[0])
            gameData.heroProjectiles[0].intervalActual = 0
            heroProjectileMove(gameData, gameData.heroProjectiles[0])
            gameData.heroProjectiles[0].intervalActual = 0
            heroProjectileMove(gameData, gameData.heroProjectiles[0])
            gameData.heroProjectiles[0].intervalActual = 0
            expect(Math.round(gameData.heroProjectiles[0].spriteBox.x)).toBe(Math.round(116 + gameData.heroProjectiles[0].spriteBox.direction.x * 3))
            expect(Math.round(gameData.heroProjectiles[0].spriteBox.y)).toBe(Math.round(116 + gameData.heroProjectiles[0].spriteBox.direction.y * 3))

        })
    })

})
