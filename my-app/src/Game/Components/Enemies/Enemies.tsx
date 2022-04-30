import React from 'react'
import { GameProps } from '../interfaces/GameProps'
import '../Style/components/Enemies.css'
import EnemyComp from './Enemy/EnemyComp';

export default function Enemies({gameData , setGameData } :GameProps) {
  return (
    <div className="enemies">
      
      {gameData && gameData.enemies.map((enemy,index) => (
        <EnemyComp  key = {index} enemy = {enemy}/>
))}
      
      
      </div>
  )
}
