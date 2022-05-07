import {Building, BuildingType, GameData, HitBox} from "../StartData/StartData";
import {heroCollisionMove} from "../Hero/HeroColisionMove";
import {HitBoxCls} from "../Utilities/HitBoxMatch";

export const buildingCollisionWithHero = (gameData: GameData) =>
    gameData.building.map(building => {
        building.hitBox = buildingHitBoxDetermination(building)
        if (HitBoxCls.hitBoxMatch(building.hitBox, gameData.hero.hitBox)) heroCollisionMove(gameData)
    })

const buildingHitBoxDetermination = ({spriteBox, type}: Building): HitBox => {

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