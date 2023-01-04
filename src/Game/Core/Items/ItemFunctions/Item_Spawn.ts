import { MapBlock, MapBlockType } from "../../MapBlocks/MapBlock"
import { GameData } from "../../StartData/StartData"
import { seeds } from "../ItemsTypes/Seeds"
import { BabyType, Item, ItemName, ItemType } from '../Item';
import { coordinatesMapping, slicedArrays } from '../../Creatures/CreaturesUpdate';
import { seedsTree } from '../ItemsTypes/SeedsTree';
import { Creature } from '../../Creatures/Creature';

let coordinates: number[];
let mapBlockAround: MapBlock[];
let lastElement: Item | Creature | null;
let mapBlock: MapBlock;

export const item_Spawn = (gameData: GameData) => {
    gameData.items.forEach(item => {
        if (item.baby !== null) {
            if (item.gestation > item.gestationMax) {
                item.gestation = 0
                coordinates = coordinatesMapping(item.coordinate, gameData);
                mapBlockAround = [];
                coordinates.forEach(coordinate => {
                    mapBlock = slicedArrays.mapBlocks[coordinate][0]
                    if (mapBlock !== undefined) {
                        if (item.mapBlockToDrop.includes(mapBlock.type)) mapBlockAround.push(mapBlock);
                    }
                });
                lastElement = null;
                mapBlock = mapBlockAround[~~(Math.random() * mapBlockAround.length)];
                if (item.babyType === BabyType.Item) {
                    gameData.items.push(JSON.parse(JSON.stringify(item.baby)));
                    lastElement = gameData.items[gameData.items.length - 1];
                } else if (item.babyType === BabyType.Creature) {
                    gameData.creatures.push(JSON.parse(JSON.stringify(item.baby)));
                    lastElement = gameData.creatures[gameData.creatures.length - 1];
                }
                if (lastElement !== null) {
                    lastElement.spriteBox.x = mapBlock.spriteBox.x + (Math.random() * (mapBlock.spriteBox.w - lastElement.spriteBox.w));
                    lastElement.spriteBox.y = mapBlock.spriteBox.y + (Math.random() * (mapBlock.spriteBox.h - lastElement.spriteBox.h));
                    lastElement.hitBox.x = lastElement.spriteBox.x;
                    lastElement.hitBox.y = lastElement.spriteBox.y;
                    lastElement.id = gameData.items.length - 1;
                }
            }
            else item.gestation ++
        }
    });
}