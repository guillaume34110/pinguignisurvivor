import React from 'react'
import { LifeProps } from '../../interfaces/HudPorps';

export default function Life({life}:LifeProps) {
  return (
    <div className="life">{life}</div>
  )
}
