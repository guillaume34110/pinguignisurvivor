import { MapBlock } from "../../MapBlock"

export const mapBlocks_disposition = (mapBlocks : MapBlock , i : number , iMax : number , line : number , lineStep : number) => { 
   
    mapBlocks.spriteBox.x = ((i - (line * lineStep)) *  mapBlocks.hitBox.w )
    mapBlocks.spriteBox.y = (line * mapBlocks.hitBox.h)
    mapBlocks.id = i
}