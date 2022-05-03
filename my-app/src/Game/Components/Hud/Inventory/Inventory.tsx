import React from 'react'
import { ItemPops } from '../../interfaces/HudProps'
import InventoryItem from './InventoryItem/InventoryItem'


export default function Inventory({inventory}:ItemPops) {
  return (
    <div className = "inventory">
       {inventory && inventory.map((item , index)=> (
          <InventoryItem key={index} item={item} />
       ))}
    </div>
  )
}
