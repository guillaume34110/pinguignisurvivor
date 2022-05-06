import React, {useEffect, useRef} from 'react'
import {EnemyProps} from '../../interfaces/EnemiProps'


export default function EnemyComp({ key, enemyData }: EnemyProps) {
  const enemyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (enemyRef && enemyRef.current) {
      enemyRef.current.style.top = enemyData.spriteBox.x + 'px'
      enemyRef.current.style.left = enemyData.spriteBox.y + 'px'
    }
  }, [enemyData.spriteBox.x,enemyData.spriteBox.y])

  return (
    <div ref={enemyRef} className={"enemy enemy-" + enemyData.sprite + " animation"}></div>
  )
}
