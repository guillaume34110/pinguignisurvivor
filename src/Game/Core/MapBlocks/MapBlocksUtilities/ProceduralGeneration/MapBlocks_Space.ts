import { MapBlock } from '../../MapBlock';
import { mapBlocksGeneric } from '../../MapBlocks';

export const mapBlocks_SpaceBlocks = (mapBlocks : MapBlock[] , i : number , iMax : number  , line :number , lineStep : number ) => { 
    if (isSpaceBorder( i  , iMax, line ,lineStep)) mapBlocks[i] = JSON.parse(JSON.stringify(mapBlocksGeneric.spaceBorder))
}

const isSpaceBorder = ( i : number , iMax : number , line :number , lineStep : number) : Boolean => { 
    const lastLine = iMax/lineStep
    if (
        line === 0
        || line === lastLine-1 
        || (i - (line*lineStep)) === 0
        || (i- (line*lineStep)) === lineStep - 1
        )  return true
    else return  false 
}


