// import React, {useEffect, useRef} from 'react'
// import {ProjectileProps} from '../../interfaces/ProjectileProps'
//
// export default function Projectile({key, projectileData}: ProjectileProps) {
//     const projectileRef = useRef<HTMLDivElement | null>(null)
//
//     useEffect(() => {
//         if (projectileRef && projectileRef.current) {
//             projectileRef.current.style.left = projectileData.spriteBox.x + 'px'
//             projectileRef.current.style.top = projectileData.spriteBox.y + 'px'
//         }
//     }, [projectileData.spriteBox.x, projectileData.spriteBox.y])
//
//     return (
//         <div ref={projectileRef} className={"projectile projectile" + projectileData.sprite + " animation"}></div>
//     )
// }
