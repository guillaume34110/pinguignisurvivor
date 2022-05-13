import React from 'react'
import {GameProps} from '../interfaces/GameProps'
import Inventory from './Inventory/Inventory'
import Time from './Time/Time'
import Xp from './Xp/Xp'
import '../../Style/components/Hud.css'

export default function Hud({gameData, setGameData}: GameProps) {
    return (
        <div className="hud">
            <Xp xpActual={gameData.hero.xpActual} xpToReach={gameData.hero.xpToReach} xpTotal={gameData.hero.xpTotal}/>
            <Inventory inventory={gameData.hero.inventory}/>

            <Time time={gameData.time}/>
        </div>
    )
}
