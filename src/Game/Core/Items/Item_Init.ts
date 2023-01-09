import { MapBlock, MapBlockType } from "../MapBlocks/MapBlock";
import { GameData } from "../StartData/StartData";
import { setCoordinateIndexPosition } from "../Utilities/Coordinate/Coordinate";
import { rock } from './ItemsTypes/Rock';
import {  ItemType } from './Item';
import { seedsTree } from "./ItemsTypes/SeedsTree";
import { item_EnsureHitNothingForSpawn } from "./ItemFunctions/Item_Spawn";

export const item_Init = (gameData: GameData) => {
  gameData.items = []
  gameData.itemPreset.forEach(itemName => {
    if (itemName !== ItemType.Rock && itemName !== ItemType.SeedsTree) return
    const item = itemName === ItemType.SeedsTree ? seedsTree : rock;
    let mapBlocks: MapBlock[] = gameData.mapBlocks.filter(mapBlock => item.mapBlockToDrop.includes(mapBlock.type) )
    const mapBlock = mapBlocks[~~(Math.random() * mapBlocks.length)];
    gameData.items.push(JSON.parse(JSON.stringify(item)));
    const lastItem = gameData.items[gameData.items.length - 1];
    item_EnsureHitNothingForSpawn(gameData , lastItem , mapBlock)
    lastItem.hitBox.x =lastItem.spriteBox.x
    lastItem.hitBox.y = lastItem.spriteBox.y
    lastItem.id = gameData.items.length - 1;
    lastItem.coordinate = setCoordinateIndexPosition(lastItem.spriteBox, gameData);
  })
}




