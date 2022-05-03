import React, { useEffect, useRef } from 'react'
import { XpProps } from '../../interfaces/HudProps'

export default function Xp({xp}:XpProps) {
  const progressRef = useRef(null)
 useEffect(() => {
  
 }, [xp])
 
 
  return (
    <div className="xp-bar">
      <div className = "xp-progress" ref={progressRef}>
        <div className = "xp-number">
          {xp}
        </div>
      </div>
    </div>
  )
}
