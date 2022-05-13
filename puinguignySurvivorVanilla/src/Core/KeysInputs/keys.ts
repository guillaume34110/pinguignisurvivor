import {Keys} from "../StartData/StartData.js"

const right = 'right'
const left = 'left'
const down = 'down'
const up = 'up'


export const keyupController = (keys: Keys, inputKey: string) => {

    const Key = modularKey(inputKey)

    if (Key === right && keys.keyState.right) keys.keyState.right = false
    else if (Key === left && keys.keyState.left) keys.keyState.left = false
    else if (Key === down && keys.keyState.down) keys.keyState.down = false
    else if (Key === up && keys.keyState.up) keys.keyState.up = false


    if (Key === right) keys.keysInstant.right = false
    else if (Key === left) keys.keysInstant.left = false
    else if (Key === down) keys.keysInstant.down = false
    else if (Key === up) keys.keysInstant.up = false


    if (Key === right && keys.keysInstant.left) keys.keyState.left = true
    else if (Key === left && keys.keysInstant.right) keys.keyState.right = true
    else if (Key === down && keys.keysInstant.up) keys.keyState.up = true
    else if (Key === up && keys.keysInstant.down) keys.keyState.down = true
}


export const keydownController = (keys: Keys, inputKey: string) => {

    const Key = modularKey(inputKey)

    if (Key === right) keys.keysInstant.right = true
    else if (Key === left) keys.keysInstant.left = true
    else if (Key === down) keys.keysInstant.down = true
    else if (Key === up) keys.keysInstant.up = true

    if (Key === right && !keys.keysInstant.left) keys.keyState.right = true
    else if (Key === left && !keys.keysInstant.right) keys.keyState.left = true
    else if (Key === down && !keys.keysInstant.up) keys.keyState.down = true
    else if (Key === up && !keys.keysInstant.down) keys.keyState.up = true

}

export const modularKey = (inputKey: string) => {


    if (inputKey === "ArrowRight" || inputKey === "d") inputKey = right
    else if (inputKey === "ArrowLeft" || inputKey === "q") inputKey = left
    else if (inputKey === "ArrowDown" || inputKey === "s") inputKey = down
    else if (inputKey === "ArrowUp" || inputKey === "z") inputKey = up

    return inputKey
}