import { Keys } from "../StartData/StartData"


export const keyupController = (keys: Keys, inputKey: string) => {

}

export const keydownController = (keys: Keys, inputKey: string): Keys => {
    if (inputKey === 'ArrowRight') keys.keyState.right = true
    else if (inputKey === 'ArrowLeft') keys.keyState.left = true
    else if (inputKey === 'ArrowDown') keys.keyState.down = true
    else if (inputKey === 'ArrowUp') keys.keyState.up = true
    return keys
}