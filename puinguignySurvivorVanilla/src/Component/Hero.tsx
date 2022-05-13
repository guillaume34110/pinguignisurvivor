// import React, {useEffect, useRef} from 'react'
// import {GameProps} from './interfaces/GameProps'
// import '../Style/components/Hero.css'
// import Life from "./Hud/Life/Life";
//
// export default function Hero({gameData, setGameData}: GameProps) {
//     const heroRef = useRef<HTMLDivElement | null>(null)
//
//     useEffect(() => {
//
//         if (heroRef && heroRef.current) {
//             heroRef.current.style.left = gameData.hero.spriteBox.x + 'px'
//             heroRef.current.style.top = gameData.hero.spriteBox.y + 'px'
//             if (heroRef.current.classList.contains("pinguigny-right")) {
//                 heroRef.current.style.transform = "scaleX(-1) rotateX(270deg) translateY(-80px) "
//             } else heroRef.current.style.transform = "rotateX(270deg) translateY(-80px) "
//         }
//     }, [gameData.hero.spriteBox.x, gameData.hero.spriteBox.y])
//
//     return (
//         <div className={"hero " + gameData.hero.sprite.sprite + " animation"} ref={heroRef}><Life life={gameData.hero.life}/></div>
//
//     )
// }
