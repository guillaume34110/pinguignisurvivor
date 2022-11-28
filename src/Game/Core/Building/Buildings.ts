import { Building } from './Building';
import { horizontalWall } from './BuildingsTypes/HorizontalWall';
import { tree } from './BuildingsTypes/Tree';
import { verticalWall } from './BuildingsTypes/VerticalWall';

export interface Buildings {
    verticalWall: Building,
    horizontalWall: Building,
    tree :Building
}

export const buildingsGeneric: Buildings = {
    verticalWall: verticalWall,
    horizontalWall: horizontalWall,
    tree:tree,
}