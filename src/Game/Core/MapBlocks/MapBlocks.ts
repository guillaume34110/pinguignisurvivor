import { MapBlock } from './MapBlock';
import { dirtGround } from './MapBlocksTypes/DirtGround';
import { emptyGround } from './MapBlocksTypes/EmptyGround';
import { grassGround } from './MapBlocksTypes/GrassGround';
import { snowGround } from './MapBlocksTypes/SnowGround';
import { spaceBorder} from './MapBlocksTypes/SpaceBorder';

export interface MapBlocks {
    dirtGround: MapBlock,
    grassGround: MapBlock,
    snowGround :MapBlock,
    spaceBorder : MapBlock,
    emptyGround : MapBlock,
}

export const mapBlocksGeneric: MapBlocks = {
    dirtGround: dirtGround,
    grassGround: grassGround,
    snowGround:snowGround,
    spaceBorder : spaceBorder,
    emptyGround : emptyGround,
}
export const mapBlocksArray = [dirtGround,grassGround,snowGround]