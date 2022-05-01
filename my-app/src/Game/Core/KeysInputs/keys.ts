import { Keys } from "../StartData/StartData"


export const keyupController = (keys: Keys, inputKey: string): Keys  => {
   
    const Key = modularKey(inputKey)

    if (Key === "right" && keys.keyState.right) keys.keyState.right = false
    else if (Key === "left" && keys.keyState.left) keys.keyState.left = false
    else if (Key === "down" && keys.keyState.down) keys.keyState.down = false
    else if (Key === "up" && keys.keyState.up) keys.keyState.up = false
    
    return keys
}

export const keydownController = (keys: Keys, inputKey: string): Keys => {

    const Key = modularKey(inputKey)

    if (Key === 'right') keys.keysInstant.right = true
    else if (Key === 'left') keys.keysInstant.left = true
    else if (Key === 'down') keys.keysInstant.down = true
    else if (Key === 'up') keys.keysInstant.up = true

    if (Key === 'right' && !keys.keysInstant.left) keys.keyState.right = true
    else if (Key === 'left' && !keys.keysInstant.right) keys.keyState.left = true
    else if (Key === 'down'&& !keys.keysInstant.up) keys.keyState.down = true
    else if (Key === 'up'&& !keys.keysInstant.down) keys.keyState.up = true

    return keys
}

const modularKey = (inputKey:string) => {
    
    if (inputKey === "ArrowRight" || inputKey ==="d") inputKey = "right"
    else if (inputKey === "ArrowLeft"|| inputKey ==="q") inputKey = "left"
    else if (inputKey === "ArrowDown"|| inputKey ==="s") inputKey = "down"
    else if (inputKey === "ArrowUp"|| inputKey ==="z") inputKey = "up"

    return inputKey
}