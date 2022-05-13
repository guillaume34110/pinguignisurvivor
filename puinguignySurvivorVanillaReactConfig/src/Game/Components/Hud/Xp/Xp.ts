import React from 'react'

export default function Xp() {
    return `<div class="xp-bar">
            <div class="xp-progress" >
                <div class="xp-total">
                </div>
            </div>
        </div>`
}
// const progressRef = useRef<HTMLDivElement | null>(null)
// useEffect(() => {
//     if (progressRef && progressRef.current) {
//         progressRef.current.style.width = (xpActual*100)  / xpToReach  + "%"
//     }
// }, [xpActual])
//
