import { MapBlock } from "../../MapBlocks/MapBlock"
import { GameData } from "../../StartData/StartData"
import { BabyType, Item } from '../Item';
import { coordinatesMapping } from '../../Creatures/CreaturesUpdate';
import { Creature } from '../../Creatures/Creature';
import { hitBoxMatch } from '../../Utilities/HitBoxMatch';
import { items } from "../Items";
import { creatures } from "../../Creatures/Creatures";
import { creature_MemoryInit } from "../../Creatures/CreaturesFunctions/Memory/Creature_MemoryInit";

let coordinates: number[];
let mapBlockAround: MapBlock[];
let lastElement: Item | Creature | null;
let mapBlock: MapBlock;

export const item_Spawn = (gameData: GameData) => {
    gameData.items.forEach(item => {
        if (item.baby !== null) {
            if (item.gestation > item.gestationMax ) {
                item.gestation = 0
                if ( item.babyProbability < Math.random()) return
                coordinates = coordinatesMapping(item.coordinate, gameData);
                mapBlockAround = [];
                coordinates.forEach(coordinate => {
                    mapBlock = gameData.slicedArrays.mapBlocks[coordinate][0]
                    if (mapBlock !== undefined) {
                        if (item.mapBlockToDrop.includes(mapBlock.type)) mapBlockAround.push(mapBlock);
                    }
                });
                lastElement = null;
                mapBlock = mapBlockAround[~~(Math.random() * mapBlockAround.length)]
                if (item.babyType === BabyType.Item) {
                    const newItem = items.find(itemA => itemA.type === item.baby)
                    if (newItem === undefined) return
                    gameData.items.push(JSON.parse(JSON.stringify(newItem)));
                    lastElement = gameData.items[gameData.items.length - 1];
                } else if (item.babyType === BabyType.Creature) {
                    const newCreature = creatures.find(creature => creature.type === item.baby)
                    if (newCreature === undefined) return
                    gameData.creatures.push(JSON.parse(JSON.stringify(newCreature)));
                    lastElement = gameData.creatures[gameData.creatures.length - 1];
                    creature_MemoryInit(gameData , lastElement)
                }
                if (lastElement !== null && lastElement.spriteBox !== undefined && mapBlock !== undefined) {
                    item_EnsureHitNothingForSpawn(gameData, lastElement, mapBlock)

                    lastElement.hitBox.x = lastElement.spriteBox.x;
                    lastElement.hitBox.y = lastElement.spriteBox.y;
                    lastElement.id = gameData.items.length - 1;
                    if (item.dieWhenMakeABaby) item.isTaken = true
                }
            }
            else item.gestation++
        }
    });
}

export const item_EnsureHitNothingForSpawn = (gameData: GameData, element: Item | Creature, mapBlock: MapBlock) => {
    let hitToken = false;
    const items = gameData.items;
    const creatures = gameData.creatures;

    for (let t = 0; t < 150; t++) {
        hitToken = false;
        element.spriteBox.x = mapBlock.spriteBox.x + (Math.random() * (mapBlock.spriteBox.w - element.spriteBox.w));
        element.spriteBox.y = mapBlock.spriteBox.y + (Math.random() * (mapBlock.spriteBox.h - element.spriteBox.h));


        for (const item of items) {
            if (element !== item && item.solid && hitBoxMatch(element.spriteBox, item.spriteBox)) {
                hitToken = true
                break;
            }
        }

        for (const creature of creatures) {
            if (hitBoxMatch(element.hitBox, creature.hitBox)) {
                hitToken = true
                break
            }
        }
        // Ajout d'un break pour interrompre la boucle lorsque hitToken est faux
        if (hitToken === false) {
            break
        }
    }
}
