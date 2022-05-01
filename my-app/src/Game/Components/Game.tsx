import React, { useEffect, useState } from 'react'
import '../Style/components/Game.css'
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


let intervale: NodeJS.Timer
const timeInterval = 16
let newValue: GameData = JSON.parse(JSON.stringify(startData))
export default function Game() {

  const [gameData, setGameData] = useState<GameData>(newValue)

  const mainLoop = () => {
    setGameData((gameData) => ({
      ...gameData,
      ...newValue,
    }));
  }
  
  /*keyControl*/

  const keydown = (e: React.KeyboardEvent) => {
    keydownController(newValue.keys, e.key)
  }

  const keyup = (e: React.KeyboardEvent) => {
    keyupController(newValue.keys, e.key)
  }

  /*Listeners*/

  const eventListeners = () => {
    document.addEventListener("keydown", keydown.bind);
    document.addEventListener("keyup", keyup.bind);
    window.addEventListener("resize", scaling);
  };
  const removeEventListeners = () => {
    document.removeEventListener("keydown", keydown.bind);
    document.removeEventListener("keyup", keyup.bind);
    window.removeEventListener("resize", scaling);
  };

  /*Initialization*/

  useEffect(() => {
    eventListeners()
    newValue = JSON.parse(JSON.stringify(startData))
    intervale = setInterval(mainLoop, timeInterval);
    return () => {
      removeEventListeners()
      clearInterval(intervale)
    }
  }, [])

  return (
    <div className="game">
      <Terrain gameData={gameData} setGameData={setGameData} />
      <Hud gameData={gameData} setGameData={setGameData} />
      <Controls gameData={gameData} setGameData={setGameData} />
      <Items gameData={gameData} setGameData={setGameData} />
      <Enemies gameData={gameData} setGameData={setGameData} />
      <Hero gameData={gameData} setGameData={setGameData} />
      <Weapons gameData={gameData} setGameData={setGameData} />
    </div>
  )
}
