import '../Style/components/Game.css'
import '../Style/Sprites/Sprites.css'
import '../Style/animations/SpriteFrameAnim.css'
import {GameData, startData} from '../Core/StartData/StartData'
import {keydownController, keyupController} from '../Core/KeysInputs/keys'
import {scaling} from '../Core/Scaling/scaling'
import {camera} from '../Core/Camera/camera'
import {heroUpdate} from "../Core/Hero/HeroUpdate";
import {buildingUpdate} from "../Core/Building/BuildingUpdate";
import {buildingInit} from "../Core/Building/BuildingInit";
import {enemiesUpdate} from "../Core/Enemies/EnemiesUpdate";
import {heroProjectileUpdate} from "../Core/HeroProjectile/HeroProjectileUpdate";
import Terrain from "./Terrain";
import Hud from "./Hud/Hud";
import Controls from "./Controls/Controls";
import Items from "./Items/Items";
import Enemies from "./Enemies/Enemies";
import Buildings from "./buildings/Buildings";
import Hero, {heroRefresh} from "./Hero";
import Projectiles from "./Projectiles/Projectiles";
import Hitbox from "./Hitboxs/Hitbox";
import {projectileRefresh} from "./Projectiles/Projectile/Projectile";
import {itemRefresh} from "./Items/Item/Item";
import {enemyRefresh} from "./Enemies/Enemy/EnemyComp";
import {buildingsDrawInit} from "./buildings/building/Building";


let coreInterval: NodeJS.Timer
let drawInterval: NodeJS.Timer
const timeInterval =16
let gameData: GameData = JSON.parse(JSON.stringify(startData))
let componentInitState = true
export const Game = () => {



    const gameHtml = `
        <canva class="game">
            ${Hud()}  
            <div class="camera">
                <div class="scene" >
                ${Terrain()}
                ${Controls()}
                ${Items()}
                ${Enemies()}
                ${Buildings(gameData)}
                ${Hero(gameData)}
                ${Projectiles()}
                ${Hitbox()}  
                </div>
            </div>
        </canva>
   `
    const mainLoop = () => {

        heroUpdate(gameData)
        enemiesUpdate(gameData)
        heroProjectileUpdate(gameData)
        buildingUpdate(gameData)
        camera(gameData)


    }

    const drawLoop = () => {
        projectileRefresh(gameData)
        componentCameraRefresh()
        heroRefresh(gameData)
        itemRefresh(gameData)
        enemyRefresh(gameData)
        window.requestAnimationFrame(drawLoop)
    }

    const drawInit = () => {

        const html = document.querySelector('#root')
        if (html !== null)
            html.innerHTML = gameHtml
            buildingsDrawInit(gameData)
    }

    /*keyControl*/
    const keydown = (e: KeyboardEvent) => {
        keydownController(gameData.keys, e.key)
    }

    const keyup = (e: KeyboardEvent) => {
        keyupController(gameData.keys, e.key)
    }

    /*Listeners*/

    const eventListeners = () => {
        document.addEventListener("keydown", keydown);
        document.addEventListener("keyup", keyup);
        window.addEventListener("resize", scaling);
    };

    const removeEventListeners = () => {
        document.removeEventListener("keydown", keydown);
        document.removeEventListener("keyup", keyup);
        window.removeEventListener("resize", scaling);
    };

    /*Initialization*/

    const componentInit = () => {
        eventListeners()
        gameData = JSON.parse(JSON.stringify(startData))
        buildingInit(gameData)
        gameData.hero.spriteBox.speed = 10
        drawInit()
        coreInterval = setInterval(mainLoop, timeInterval);
        window.requestAnimationFrame(drawLoop)
        scaling()
        // return () => {
        //     removeEventListeners()
        //     clearInterval(intervale)
        // }
    }
    if (componentInitState) componentInit()

    const componentCameraRefresh = () => {
        const scene: HTMLDivElement | null = document.querySelector(".scene")
        if (scene) {
            scene.style.transform = "rotateX(50deg) translateZ(-300px)  translateX(" + -gameData.camera.y + "px) translateY(" + -gameData.camera.x + "px)";
        }
    }
}

