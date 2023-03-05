import { MapBlock} from "../MapBlocks/MapBlock";
import { GameData } from "../StartData/StartData";
import { rock } from './ItemsTypes/Rock';
import { Item, ItemType } from './Item';
import { seedsTree } from "./ItemsTypes/SeedsTree";
import { item_EnsureHitNothingForSpawn } from "./ItemFunctions/Item_Spawn";
import { basicGrass } from './ItemsTypes/BasicGrass';
import { setCoordinateIndexPosition } from "../Utilities/coordinate/Coordinate";

export const item_Init = (gameData: GameData) => {
  gameData.items = []
  gameData.itemPreset.forEach(itemType => {
    const item = item_Determination(itemType)
    let mapBlocks: MapBlock[] = gameData.mapBlocks.filter(mapBlock => item.mapBlockToDrop.includes(mapBlock.type))
    const mapBlock = mapBlocks[~~(Math.random() * mapBlocks.length)];
    gameData.items.push(JSON.parse(JSON.stringify(item)));
    const lastItem = gameData.items[gameData.items.length - 1];
    item_EnsureHitNothingForSpawn(gameData, lastItem, mapBlock)
    lastItem.hitBox.x = lastItem.spriteBox.x
    lastItem.hitBox.y = lastItem.spriteBox.y
    lastItem.id = gameData.items.length - 1;
    lastItem.coordinate = setCoordinateIndexPosition(lastItem.spriteBox, gameData);
  })
}

const item_Determination = (itemType: ItemType): Item => {
  if (itemType === ItemType.SeedsTree) return seedsTree
  else if (itemType === ItemType.Rock) return rock
  else if (itemType === ItemType.BasicGrass) return basicGrass
  else return rock
}



