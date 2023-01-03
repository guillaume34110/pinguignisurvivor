import { MapBlock, MapBlockType } from "../MapBlocks/MapBlock";
import { GameData } from "../StartData/StartData";
import { setCoordinateIndexPosition } from "../Utilities/Coordinate/Coordinate";
import { rock } from './ItemsTypes/Rock';
import { seeds } from './ItemsTypes/Seeds';
import { ItemName, ItemType } from './Item';
import { seedsTree } from "./ItemsTypes/SeedsTree";

export const item_Init = (gameData: GameData) => {
  let mapBlocks: MapBlock[] = gameData.mapBlocks.filter(mapBlock => mapBlock.type !== MapBlockType.Space)

  gameData.itemPreset.forEach(itemName => {
    if (itemName !== ItemName.Rock && itemName !== ItemName.SeedsTree) return
    const item = itemName === ItemName.SeedsTree ? seedsTree : rock;
    const mapBlock = mapBlocks[~~(Math.random() * mapBlocks.length)];
    gameData.items.push(JSON.parse(JSON.stringify(item)));
    const lastItem = gameData.items[gameData.items.length - 1];
    lastItem.spriteBox.x = mapBlock.spriteBox.x + (Math.random() * (mapBlock.spriteBox.w - lastItem.spriteBox.w));
    lastItem.spriteBox.y = mapBlock.spriteBox.y + (Math.random() * (mapBlock.spriteBox.h - lastItem.spriteBox.h));
    lastItem.hitBox.x =lastItem.spriteBox.x
    lastItem.hitBox.y = lastItem.spriteBox.y
    lastItem.id = gameData.items.length - 1;
    lastItem.coordinate = setCoordinateIndexPosition(lastItem.spriteBox, gameData);
  })
}




