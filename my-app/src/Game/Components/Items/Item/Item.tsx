import React, { useEffect, useRef } from 'react'
import { ItemProps } from '../../interfaces/ItemProps'

export default function Item({key,itemData}:ItemProps) {
  const itemRef =  useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    if (itemRef && itemRef.current) {
      itemRef.current.style.top = itemData.x + 'px'
      itemRef.current.style.left = itemData.y + 'px'
    }
  }, [itemData])
  
  return (
    <div ref = {itemRef}  className={"item item-" + itemData.sprite + " animation" }></div>
  )
}
