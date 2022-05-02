import React from 'react'
import { ItemPops } from '../../interfaces/HudPorps'
import InventoryItem from './InventoryItem/InventoryItem'


export default function Inventory({items}:ItemPops) {
  return (
    <div className = "inventory">
       {items && items.map((item , index)=> (
          <InventoryItem key={index} item={item} />
       ))}
    </div>
  )
}
