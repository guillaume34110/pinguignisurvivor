import React, {useEffect, useRef} from "react";
import {HitBoxProps} from "../../interfaces/HItBoxProps";


export default function HitBoxComp({hitBox}: HitBoxProps) {

    const boxRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (boxRef && boxRef.current) {
            boxRef.current.style.top = hitBox.x + 'px'
            boxRef.current.style.left = hitBox.y + 'px'
            boxRef.current.style.width = hitBox.w + 'px'
            boxRef.current.style.height = hitBox.h + 'px'
        }
    }, [hitBox.x,hitBox.y,hitBox.h,hitBox.w])

    return (
        <div className="hitbox" ref={boxRef}>

        </div>
    )
}