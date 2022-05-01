import React, { useEffect, useRef } from 'react'
import { ProjectileProps } from '../../interfaces/ProjectileProps'

export default function Projectile({key,projectileData}:ProjectileProps) {
  const projectileRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    if (projectileRef && projectileRef.current) {
      projectileRef.current.style.top = projectileData.x + 'px'
      projectileRef.current.style.left = projectileData.y + 'px'
    }
  }, [projectileData])
  
  return (
    <div ref={projectileRef} className={"projectile projectile" + projectileData.sprite + " animation"} ></div>
  )
}
