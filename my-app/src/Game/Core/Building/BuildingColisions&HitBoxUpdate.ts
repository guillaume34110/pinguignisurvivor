import {Building, BuildingType, GameData, SpriteBox} from "../StartData/StartData";
import {HitBox} from "../Utilities/HitBoxMatch";
import {heroCollisionMove} from "../Hero/HeroColisionMove";

export const buildingCollisionWithHero = (gameData: GameData) =>
    gameData.building.map(building => {
        building.hitBox = buildingHitBoxDetermination(building)
        if (HitBox.hitBoxMatch(building.hitBox, gameData.hero.hitBox)) heroCollisionMove(gameData)
    })

const buildingHitBoxDetermination = ({spriteBox, type}: Building): SpriteBox => {

    if (type === BuildingType.xWall) {
        return {
            x: spriteBox.x,
            y: spriteBox.y + spriteBox.w / 2 - 1,
            h: spriteBox.w,
            w: 2
        }
    } else if (type === BuildingType.yWall) {
        return {
            x: spriteBox.x + spriteBox.h / 2 - 1,
            y: spriteBox.y,
            w: spriteBox.w,
            h: 2
        }
    } else if (type === BuildingType.tree) {
        return {
            x: spriteBox.x + spriteBox.h / 2 - 30,
            y: spriteBox.y,
            w: spriteBox.w,
            h: 60
        }
    }
    return spriteBox
}