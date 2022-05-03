import React, { useEffect, useRef } from 'react'
import { GameProps } from './interfaces/GameProps'
import '../Style/components/Hero.css'

export default function Hero({gameData , setGameData } :GameProps) {
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    if (heroRef && heroRef.current) {
      heroRef.current.style.top = gameData.hero.x + 'px'
      heroRef.current.style.left = gameData.hero.y + 'px'
    }
  }, [gameData.hero.x,gameData.hero.y])
  return (
    <div className={"hero " + gameData.hero.sprite + " animation"} ref ={heroRef}></div>
  )
}
