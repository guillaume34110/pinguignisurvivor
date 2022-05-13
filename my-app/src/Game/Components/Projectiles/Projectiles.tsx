import React from 'react'
import {GameProps} from '../interfaces/GameProps'
import '../../Style/components/Projectiles.css'
import Projectile from './Projectile/Projectile'

export default function Projectiles({gameData, setGameData}: GameProps) {
    return (
        <div className="weapons">
            {gameData && gameData.heroProjectiles.map((projectile, index) => (
                <Projectile key={index} projectileData={projectile}/>
            ))}
        </div>
    )
}
