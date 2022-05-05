import React, { useEffect, useRef } from 'react'
import { BuildingProps } from '../../interfaces/BuildingProps'


export default function Building({ buildingData }: BuildingProps) {
  const buildingRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (buildingRef && buildingRef.current) {
      buildingRef.current.style.top = buildingData.x + 'px'
      buildingRef.current.style.left = buildingData.y + 'px'
      buildingRef.current.style.width = buildingData.w + 'px'
      buildingRef.current.style.height = buildingData.h + 'px'
      buildingRef.current.style.transform = `rotateX(${buildingData.rotationX}deg) translateY(${buildingData.translateY}px) rotateY(${buildingData.rotationY}deg) `
    }
  }, [buildingData.x,buildingData.y])
  
  return (
    <div ref={buildingRef} className={"building building-" + buildingData.sprite + " animation"}></div>
  )
}
