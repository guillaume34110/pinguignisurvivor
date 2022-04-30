import React from 'react'
import { GameProps } from '../interfaces/GameProps'
import '../Style/components/Weapons.css'
import Projectile from './Projectile/Projectile'
export default function Weapons({gameData , setGameData } :GameProps) {
  return (
    <div className="weapons"><Projectile/></div>
  )
}
