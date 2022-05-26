import {GameData, startData} from "../../StartData/StartData"
import {spriteBoxSetDirectionWithXY, spriteBoxUpdateSpriteByRadianDirection} from "./directionSpriteBox";
import {HeroSprite} from "../../Hero/HeroSprite";

const given = describe
const when = describe
const then = it

const gameData: GameData = JSON.parse(JSON.stringify(startData))

// const init = () => {
//     gameData.hero.spriteBox.direction.x = 0
//     gameData.hero.spriteBox.direction.y = 0
// }

given('hero is on map', () => {

    // beforeEach(init)

    // RIGHT :

    when('hero direction is x:1 y:-0.5', () => {
        then('Hero sprite should be right', () => {

            gameData.hero.spriteBox.direction.x = 1
            gameData.hero.spriteBox.direction.y = -0.5
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroRight)

        })
    })

    when('hero direction is x:1 y:0', () => {
        then('Hero sprite should be right', () => {

            gameData.hero.spriteBox.direction.x = 1
            gameData.hero.spriteBox.direction.y = 0
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroRight)

        })
    })

    when('hero direction is x:1 y:0.5', () => {
        then('Hero sprite should be right', () => {

            gameData.hero.spriteBox.direction.x = 1
            gameData.hero.spriteBox.direction.y = 0.5
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroRight)

        })
    })

    // DOWN FRONT:

    when('hero direction is x:1 y:1', () => {
        then('Hero sprite should be front', () => {

            gameData.hero.spriteBox.direction.x = 1
            gameData.hero.spriteBox.direction.y = 1
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )

            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroFront)

        })
    })

    when('hero direction is x:0.5 y:1', () => {
        then('Hero sprite should be front', () => {

            gameData.hero.spriteBox.direction.x = 0.5
            gameData.hero.spriteBox.direction.y = 1
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroFront)

        })
    })

    when('hero direction is x:0 y:1', () => {
        then('Hero sprite should be front', () => {

            gameData.hero.spriteBox.direction.x = 0
            gameData.hero.spriteBox.direction.y = 1

            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroFront)

        })
    })

    when('hero direction is x:-0.5 y:1', () => {
        then('Hero sprite should be front', () => {

            gameData.hero.spriteBox.direction.x = -0.5
            gameData.hero.spriteBox.direction.y = 1

            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroFront)

        })
    })

    when('hero direction is x:-1 y:1', () => {
        then('Hero sprite should be front', () => {

            gameData.hero.spriteBox.direction.x = -1
            gameData.hero.spriteBox.direction.y = 1

            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroFront)

        })
    })

    // LEFT :

    when('hero direction is x:-1 y:0.5', () => {
        then('Hero sprite should be left', () => {

            gameData.hero.spriteBox.direction.x = -1
            gameData.hero.spriteBox.direction.y = 0.5
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroLeft)

        })
    })

    when('hero direction is x:-1 y:0', () => {
        then('Hero sprite should be left', () => {

            gameData.hero.spriteBox.direction.x = -1
            gameData.hero.spriteBox.direction.y = 0
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroLeft)

        })
    })

    when('hero direction is x:-1 y:-0.5', () => {
        then('Hero sprite should be left', () => {

            gameData.hero.spriteBox.direction.x = -1
            gameData.hero.spriteBox.direction.y = -0.5
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroLeft)

        })
    })

    // UP BACK :

    when('hero direction is x:-1 y:-1', () => {
        then('Hero sprite should be back', () => {

            gameData.hero.spriteBox.direction.x = -1
            gameData.hero.spriteBox.direction.y = -1
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroBack)

        })
    })

    when('hero direction is x:-0.5 y:-1', () => {
        then('Hero sprite should be back', () => {

            gameData.hero.spriteBox.direction.x = -0.5
            gameData.hero.spriteBox.direction.y = -1
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroBack)

        })
    })

    when('hero direction is x:0 y:-1', () => {
        then('Hero sprite should be back', () => {

            gameData.hero.spriteBox.direction.x = 0
            gameData.hero.spriteBox.direction.y = -1
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroBack)

        })
    })

    when('hero direction is x:0.5 y:-1', () => {
        then('Hero sprite should be back', () => {

            gameData.hero.spriteBox.direction.x = 0.5
            gameData.hero.spriteBox.direction.y = -1
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroBack)

        })
    })

    when('hero direction is x:1 y:-1', () => {
        then('Hero sprite should be back', () => {

            gameData.hero.spriteBox.direction.x = 1
            gameData.hero.spriteBox.direction.y = -1
            spriteBoxSetDirectionWithXY(
                gameData.hero.spriteBox,
                gameData.hero.spriteBox.direction.x,
                gameData.hero.spriteBox.direction.y
            )
            spriteBoxUpdateSpriteByRadianDirection(gameData.hero.sprite, gameData.hero.spriteBox)

            expect(gameData.hero.sprite.sprite).toBe(HeroSprite.heroBack)

        })
    })

})