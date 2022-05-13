// import React, {useEffect, useRef} from 'react'
// import {XpProps} from '../../interfaces/HudProps'
//
// export default function Xp({xpActual, xpTotal, xpToReach}: XpProps) {
//     const progressRef = useRef<HTMLDivElement | null>(null)
//     useEffect(() => {
//         if (progressRef && progressRef.current) {
//             progressRef.current.style.width = (xpActual*100)  / xpToReach  + "%"
//         }
//     }, [xpActual])
//
//
//     return (
//         <div className="xp-bar">
//             <div className="xp-progress" ref={progressRef}>
//                 <div className="xp-total">
//                     {xpTotal}
//                 </div>
//             </div>
//         </div>
//     )
// }
