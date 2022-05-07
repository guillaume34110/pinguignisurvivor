import React, { useEffect, useRef } from 'react'
import { BuildingProps } from '../../interfaces/BuildingProps'


export default function Building({ buildingData }: BuildingProps) {
  const buildingRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (buildingRef && buildingRef.current) {

      buildingRef.current.style.top = buildingData.spriteBox.x + 'px'
      buildingRef.current.style.left = buildingData.spriteBox.y + 'px'
      buildingRef.current.style.width = buildingData.spriteBox.w + 'px'
      buildingRef.current.style.height = buildingData.spriteBox.h + 'px'

      buildingRef.current.style.transform = `rotateX(${buildingData.rotationX}deg) translateY(${buildingData.translateY}px) rotateY(${buildingData.rotationY}deg) `
    }
  }, [buildingData.spriteBox.x,buildingData.spriteBox.y , buildingData.rotationX])
  
  return (
    <div ref={buildingRef} className={"building building-" + buildingData.sprite + " animation"}></div>
  )
}
