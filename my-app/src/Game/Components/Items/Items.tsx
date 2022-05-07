import React from 'react'
import {GameProps} from '../interfaces/GameProps'
import '../../Style/components/Items.css'
import Item from './Item/Item';

export default function Items({gameData, setGameData}: GameProps) {
    return (
        <div className="items">
            {gameData && gameData.items.map((item, index) => (
                <Item key={index} itemData={item}/>
            ))}

        </div>
    )
}
