import {GameData} from "../StartData/StartData";

export const heroCollisionMove = ({hero: {spriteBox}, keys: {keyState}}: GameData) =>  {
    if (keyState.left) spriteBox.y += spriteBox.speed
    if (keyState.right) spriteBox.y -= spriteBox.speed
    if (keyState.down) spriteBox.x -= spriteBox.speed
    if (keyState.up) spriteBox.x += spriteBox.speed
}