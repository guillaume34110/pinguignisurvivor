import {isOnScreen} from "../Game";
import {GameData, HitBox} from "../../Core/StartData/StartData";


export const hitBoxRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {
    const hero = gameData.hero
    const drawHitBox = (hitBox :HitBox , fillColor : string , strokeColor:string) =>{
        if (isOnScreen(hero, hitBox)) {
            targetGl.fillStyle = fillColor
            targetGl.strokeStyle = strokeColor;
            const x = hitBox.x - hero.spriteBox.x + 600
            const y = hitBox.y - hero.spriteBox.y + 300
            targetGl.fillRect(x, y, hitBox.w, hitBox.h)
            targetGl.strokeRect(x, y, hitBox.w, hitBox.h)
        }
    }


    /*enemies*/
    gameData.enemies.forEach((hitBox) => {
        drawHitBox(hitBox.hitBox,"hsla(0, 88%, 49%, 0.3)",'red')
    })
    /*hero*/
    targetGl.fillStyle = "hsla(242, 88%, 49%, 0.3)"
    targetGl.strokeStyle = 'blue';
    const x = 600 + (hero.spriteBox.x - hero.hitBox.x)
    const y = 300 + (hero.spriteBox.y - hero.hitBox.y)
    targetGl.fillRect(x, y, hero.hitBox.w, hero.hitBox.h)
    targetGl.strokeRect(x, y, hero.hitBox.w, hero.hitBox.h)
    /*buildings*/
    gameData.building.forEach((hitBox) => {
        drawHitBox(hitBox.hitBox,"hsla(116,100%,50%,0.3)",'green')
    })
    /*projectile*/
    gameData.heroProjectiles.forEach((hitBox) => {
        drawHitBox(hitBox.hitBox,"hsla(285,100%,50%,0.3)",'purple')
    })
    /*items*/
    gameData.items.forEach((hitBox) => {
        drawHitBox(hitBox.hitBox,"hsla(25,100%,59%,0.3)",'orange')
    })
}
