import React from 'react'
import { Enemy } from '../../../Core/StartData/StartData'

interface EnemyProps {
  key: number,
  enemy: Enemy,
}


export default function EnemyComp({key, enemy} : EnemyProps) {
  return (
    <div>Enemy</div>
  )
}
