import React, { useEffect, useState,useRef } from 'react'
import '../Style/components/Game.css'
import '../Style/Sprites/Sprites.css'
import '../Style/animations/SpriteFrameAnim.css'
import Controls from './Controls/Controls'
import Hud from './Hud/Hud'
import Items from './Items/Items'
import Terrain from './Terrain'
import Enemies from './Enemies/Enemies';
import Hero from './Hero'
import Weapons from './Weapons/Weapons'
import { GameData, startData } from '../Core/StartData/StartData'
import { keydownController, keyupController } from '../Core/KeysInputs/keys'
import { scaling } from '../Core/Scaling/scaling'
import { heroMove } from '../Core/Hero/heroMove'
import { camera } from '../Core/Camera/camera'


let intervale: NodeJS.Timer
const timeInterval = 16
let newValue: GameData = JSON.parse(JSON.stringify(startData))
export default function Game() {

  const [gameData, setGameData] = useState<GameData>(newValue)
  const cameraRef = useRef<HTMLDivElement | null>(null)

  const mainLoop = () => {
    heroMove(newValue)
    camera(newValue)
    setGameData((gameData) => ({
      ...gameData,
      ...newValue,
    }));

  }

  /*keyControl*/

  const keydown = (e: KeyboardEvent) => {
    keydownController(newValue.keys, e.key)
  }

  const keyup = (e: KeyboardEvent) => {
    keyupController(newValue.keys, e.key)
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

  useEffect(() => {


    eventListeners()
    scaling()
    newValue = JSON.parse(JSON.stringify(startData))
    newValue.hero.moveSpeed = 2
    intervale = setInterval(mainLoop, timeInterval);
    return () => {
      removeEventListeners()
      clearInterval(intervale)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (cameraRef && cameraRef.current) {
     cameraRef.current.style.transform  = "rotateX(50deg) translateZ(-300px)  translateX("+ -gameData.camera.y + "px) translateY("+ -gameData.camera.x + "px)";
   
    
    }
  }, [gameData.camera.x,gameData.camera.y])

  return (
    <div className="game">
      <div className="camera" >
        <div className="scene"ref = {cameraRef}>
          <Terrain gameData={gameData} setGameData={setGameData} />
          <Hud gameData={gameData} setGameData={setGameData} />
          <Controls gameData={gameData} setGameData={setGameData} />
          <Items gameData={gameData} setGameData={setGameData} />
          <Enemies gameData={gameData} setGameData={setGameData} />
          <Hero gameData={gameData} setGameData={setGameData} />
          <Weapons gameData={gameData} setGameData={setGameData} />
        </div>
      </div>
    </div>
  )
}
function userRef(arg0: null) {
  throw new Error('Function not implemented.')
}

