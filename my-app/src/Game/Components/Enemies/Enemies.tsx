import React from 'react'
import { GameProps } from '../interfaces/GameProps'
import '../Style/components/Enemies.css'
import Enemy from './Enemy/Enemy';

export default function Enemies({gameData , setGameData } :GameProps) {
  return (
    <div className="enemies"><Enemy/></div>
  )
}
