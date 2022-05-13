import React from 'react'
import {GameProps} from '../interfaces/GameProps'
import Building from './building/Building'
import '../../Style/components/buildings.css'

export default function Buildings({gameData, setGameData}: GameProps) {

    return (
        <div className="buildings">
            {gameData && gameData.building.map((building, index) => (
                <Building key={index} buildingData={building}/>
            ))}
        </div>
    )
}
