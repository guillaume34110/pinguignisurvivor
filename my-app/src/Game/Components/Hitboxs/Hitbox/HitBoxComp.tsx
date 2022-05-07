import React, {useEffect, useRef} from "react";
import {HitBoxProps} from "../../interfaces/HItBoxProps";


export default function HitBoxComp({spriteBox}: HitBoxProps) {

    const boxRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (boxRef && boxRef.current) {
            boxRef.current.style.top = spriteBox.x + 'px'
            boxRef.current.style.left = spriteBox.y + 'px'
            boxRef.current.style.width = spriteBox.w + 'px'
            boxRef.current.style.height = spriteBox.h + 'px'
        }
    }, [spriteBox.x,spriteBox.y,spriteBox.h,spriteBox.w])

    return (
        <div className="hitbox" ref={boxRef}>

        </div>
    )
}