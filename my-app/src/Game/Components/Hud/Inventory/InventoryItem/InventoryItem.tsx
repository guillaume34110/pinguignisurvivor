import React from 'react'

import { InventoryItemProps } from '../../../interfaces/HudProps';

export default function InventoryItem({key,item}:InventoryItemProps) {
  return (
    <div className={"inventory-item inventory-item-" +item.sprite +" fixed"}></div>
  )
}
