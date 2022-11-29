import { MapBlock } from './MapBlock';
import { horizontalWall } from './MapBlocksTypes/HorizontalWall';
import { tree } from './MapBlocksTypes/Tree';
import { verticalWall } from './MapBlocksTypes/VerticalWall';

export interface MapBlocks {
    verticalWall: MapBlock,
    horizontalWall: MapBlock,
    tree :MapBlock
}

export const MapBlocksGeneric: MapBlocks = {
    verticalWall: verticalWall,
    horizontalWall: horizontalWall,
    tree:tree,
}