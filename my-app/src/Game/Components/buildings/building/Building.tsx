import React, { useEffect, useRef } from 'react'
import { BuildingProps } from '../../interfaces/BuildingProps'


export default function Building({ key, buildingData }: BuildingProps) {
  const buildingRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (buildingRef && buildingRef.current) {
      buildingRef.current.style.top = buildingData.x + 'px'
      buildingRef.current.style.left = buildingData.y + 'px'
    }
  }, [buildingData.x,buildingData.y])
  
  return (
    <div ref={buildingRef} className={"building building-" + buildingData.sprite + " animation"}></div>
  )
}
