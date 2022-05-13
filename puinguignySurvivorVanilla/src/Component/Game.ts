
// import '../Style/components/Game.css'
// import '../Style/Sprites/Sprites.css'
// import '../Style/animations/SpriteFrameAnim.css'
import {GameData, startData} from '../Core/StartData/StartData.js'
import {keydownController, keyupController} from '../Core/KeysInputs/keys.js'
import {scaling} from '../Core/Scaling/scaling.js'
import {camera} from '../Core/Camera/camera.js'
import {heroUpdate} from "../Core/Hero/HeroUpdate.js";
import {buildingUpdate} from "../Core/Building/BuildingUpdate.js";
import {buildingInit} from "../Core/Building/BuildingInit.js";
import {enemiesUpdate} from "../Core/Enemies/EnemiesUpdate.js";
import {heroProjectileUpdate} from "../Core/HeroProjectile/HeroProjectileUpdate.js";
import Terrain from "./Terrain.js";


let intervale: NodeJS.Timer
const timeInterval = 16
let gameData: GameData = JSON.parse(JSON.stringify(startData))
let componentInitState = true
export const  Game = () => {

    const html = document.querySelector('#root')
    const cameraRef:HTMLDivElement|null = document.querySelector(".camera")

    const mainLoop = () => {
        heroUpdate(gameData)
        enemiesUpdate(gameData)
        heroProjectileUpdate(gameData)
        buildingUpdate(gameData)
        camera(gameData)
        draw()

    }

    const draw = () => {
        componentCameraRefresh()
        if (html !==null )
            html.innerHTML = gameHtml
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
        scaling()
        gameData = JSON.parse(JSON.stringify(startData))
        buildingInit(gameData)
        gameData.hero.spriteBox.speed = 10

        intervale = setInterval(mainLoop, timeInterval);
        // return () => {
        //     removeEventListeners()
        //     clearInterval(intervale)
        // }
    }
    if (componentInitState) componentInit()

    const componentCameraRefresh = () => {
        if (cameraRef) {
            cameraRef.style.transform = "rotateX(50deg) translateZ(-300px)  translateX(" + -gameData.camera.y + "px) translateY(" + -gameData.camera.x + "px)";
        }
    }

        const gameHtml = `
        <div className="game">
           { // <Hud gameData={gameData} setGameData={setGameData}/>}
            <div className="camera">
                <div className="scene" ref={cameraRef}>
                ${Terrain(gameData) }
                    

                   { // <Controls gameData={gameData} setGameData={setGameData}/>
                    // <Items gameData={gameData} setGameData={setGameData}/>
                    // <Enemies gameData={gameData} setGameData={setGameData}/>
                    // <Buildings gameData={gameData} setGameData={setGameData}/>
                    // <Hero gameData={gameData} setGameData={setGameData}/>
                    // <Projectiles gameData={gameData} setGameData={setGameData}/>
                    // <HitBox gameData={gameData} setGameData={setGameData}/>}
                </div>
            </div>
        </div>
    `



}
