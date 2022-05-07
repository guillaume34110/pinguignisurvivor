import React from 'react'
import {GameProps} from '../interfaces/GameProps'
import Inventory from './Inventory/Inventory'
import Life from './Life/Life'
import Time from './Time/Time'
import Xp from './Xp/Xp'

export default function Hud({gameData, setGameData}: GameProps) {
    return (
        <div className="hud">
            <Inventory inventory={gameData.hero.inventory}/>
            <Life life={gameData.hero.life}/>
            <Time time={gameData.time}/>
            <Xp xp={gameData.hero.xpActual}/>
        </div>
    )
}
