import React, { useEffect, useRef } from 'react'
import { GameProps } from './interfaces/GameProps'
import '../Style/components/Hero.css'

export default function Hero({gameData , setGameData } :GameProps) {
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    if (heroRef && heroRef.current) {
      heroRef.current.style.top = gameData.hero.spriteBox.x + 'px'
      heroRef.current.style.left = gameData.hero.spriteBox.y + 'px'
      heroRef.current.style.transform = "scaleX(-1);"
    }
  }, [gameData.hero.spriteBox.x,gameData.hero.spriteBox.y])

  return (
    <div className={"hero " + gameData.hero.sprite + " animation"} ref ={heroRef}></div>
  )
}
