import React, { useEffect, useState } from 'react'
import '../Style/components/Game.css'
import Controls from './Controls/Controls'
import Hud from './Hud/Hud'
import Items from './Items/Items'
import Terrain from './Terrain'
import Enemies from './Enemies/Enemies';
import Hero from './Hero'
import Weapons from './Weapons/Weapons'
import { StartData ,startData} from '../Core/StartData/StartData'


let intervale: NodeJS.Timer 
const timeInterval  = 16
let newValue: StartData = JSON.parse(JSON.stringify(startData)) 
export default function Game() {
 
  const [gameData, setGameData] = useState({})
  
  const mainLoop =  () => {
    setGameData((gameData) => ({
      ...gameData,
      ...newValue,
    }));
  }

  useEffect(() => { 
    newValue = JSON.parse(JSON.stringify(startData)) 
   intervale = setInterval(mainLoop, timeInterval);
return () => { 
  clearInterval(intervale)
}
  }, [])
  
  return (
    <div className="game">
      <Terrain gameData={gameData} setGameData={setGameData}/>
      <Hud gameData={gameData} setGameData={setGameData}/>
      <Controls gameData={gameData} setGameData={setGameData}/>
      <Items gameData={gameData} setGameData={setGameData}/>
      <Enemies gameData={gameData} setGameData={setGameData}/>
      <Hero gameData={gameData} setGameData={setGameData}/>
      <Weapons gameData={gameData} setGameData={setGameData}/>
    </div>
  )
}
