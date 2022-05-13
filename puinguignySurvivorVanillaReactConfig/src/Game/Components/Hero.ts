import '../Style/components/Hero.css'
import {GameData} from "../Core/StartData/StartData";
import Life from "./Hud/Life/Life";

export default function Hero(gameData: GameData) {
    return ` <div id = "hero" class="${`hero animation ${gameData.hero.sprite.sprite}`}"> ${Life()}
            </div>`
}

export const heroRefresh = (gameData: GameData) => {

    const hero: HTMLDivElement | null = document.querySelector(`#hero`)
    if (hero) {
        hero.style.left = gameData.hero.spriteBox.x + 'px'
        hero.style.top = gameData.hero.spriteBox.y + 'px'
        if (hero.classList.contains("pinguigny-right")) {
            hero.style.transform = "scaleX(-1) rotateX(270deg) translateY(-80px) "
        } else hero.style.transform = "rotateX(270deg) translateY(-80px) "
    }
}

