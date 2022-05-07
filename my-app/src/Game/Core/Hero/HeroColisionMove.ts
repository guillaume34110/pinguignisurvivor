import {GameData} from "../StartData/StartData";

export const heroCollisionMove = ({hero: {moveSpeed, spriteBox}, keys: {keyState}}: GameData) =>  {
    if (keyState.left) spriteBox.y += moveSpeed
    if (keyState.right) spriteBox.y -= moveSpeed
    if (keyState.down) spriteBox.x -= moveSpeed
    if (keyState.up) spriteBox.x += moveSpeed
}