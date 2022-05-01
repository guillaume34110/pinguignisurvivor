import React, { useEffect, useRef } from 'react'
import { Enemy } from '../../../Core/StartData/StartData'
import { EnemyProps } from '../../interfaces/EnemiProps'



export default function EnemyComp({ key, enemyData }: EnemyProps) {
  const enemyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (enemyRef && enemyRef.current) {
      enemyRef.current.style.top = enemyData.x + 'px'
      enemyRef.current.style.left = enemyData.y + 'px'
    }
  }, [enemyData])

  return (
    <div ref={enemyRef} className={"enemy enemy-" + enemyData.sprite + " animation"}></div>
  )
}
