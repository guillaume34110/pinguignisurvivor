import React from 'react'
import {TimeProps} from '../../interfaces/HudProps'

export default function Time({time}: TimeProps) {
    return (
        <div className="time">{time}</div>
    )
}

