import xpBlue from "../../Assets/items/img.png"
import {ItemSprite} from "../../Core/Items/ItemSprite";


const image = new Image()

const xpBlueImage = new Image()
xpBlueImage.src = xpBlue


export const selectImg = (sprite:ItemSprite): HTMLImageElement => {
    if (sprite === ItemSprite.grey128 ) return xpBlueImage
    else return image
}