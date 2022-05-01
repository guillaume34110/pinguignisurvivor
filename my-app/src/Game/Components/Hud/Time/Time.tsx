import React from 'react'
import { TimeProps } from '../../interfaces/HudPorps'

export default function Time({time}:TimeProps) {
  return (
    <div className="time">{time}</div>
  )
}

