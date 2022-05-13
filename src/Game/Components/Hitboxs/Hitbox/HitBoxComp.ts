export default function HitBoxComp() {
    return ` <div class="hitbox" ></div>`
}

//const boxRef = useRef<HTMLDivElement | null>(null)
// useEffect(() => {
//     if (boxRef && boxRef.current) {
//         boxRef.current.style.left = hitBox.x + 'px'
//         boxRef.current.style.top = hitBox.y + 'px'
//         boxRef.current.style.width = hitBox.w + 'px'
//         boxRef.current.style.height = hitBox.h + 'px'
//     }
// }, [hitBox.x,hitBox.y,hitBox.h,hitBox.w])