import { MapBlock } from "../../MapBlock"

export const mapBlocks_disposition = (mapBlocks : MapBlock , i : number , iMax : number , line : number , lineStep : number) => { 
   
    mapBlocks.spriteBox.x = ((i - (line * lineStep)) * 64 )
    mapBlocks.spriteBox.y = (line * 64)
    mapBlocks.id = i
}