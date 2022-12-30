import { CreatureType } from "../Core/Creatures/Creature";
import { creatures } from "../Core/Creatures/Creatures";
import { mapBlocksArray } from "../Core/MapBlocks/MapBlocks";
import { GameData, startData } from '../Core/StartData/StartData';
import { componentInit, drawInit, drawLoop, gameData } from './Game';
import '../Style/components/Menu.css'
import { itemsArray } from "../Core/Items/ItemsArray";
import { ItemName } from "../Core/Items/Item";
import { scaling } from "../Core/Scaling/scaling";
import { mapBlocks_Init } from "../Core/MapBlocks/MapBlocks_Init";


export const menu = (gameData: GameData) => {

    createMenuInterface()
    btnStartListener()
    mapBloksListener()
    drawInit()
    window.requestAnimationFrame(drawLoop)
    scaling()

}
function createMenuInterface() {
    //creer un contenu qui peut etre mis a jour
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'menu-container')
    const root = document.getElementById('root');
    if (root === null) return
    root.appendChild(menuContainer);
    const content = `
  
    <h1 class = " menu-card p-1rem"> SeedsMaker
        <h6>Christmas Panettone</h6>
    </h1>
    <div class = " menu-card" >
        <div class = "flex-column  border" >
            <div class = "flex ">
                <h4>Nombre de block:</h4>
                <input type="number" value="1000"  id="map-blocks" />
            </div>
            <div  class = "flex">
                <h4>Largeur de la carte:</h4>
                <input type="number"value="25" id="map-width" />
            </div>
        </div>
        <div class = "flex-column border " >
            <h4>Choix des créatures:</h4>
            ${creatures?.map(creature =>
        `<div  class = "flex p-0x5rem align-left-self w-5rem">
            <input class = "checkBox-creatures" type="checkbox" value="${creature.type}" id=${creature.type + "-checkbox"} />
            <label for=${creature.type + "-checkbox"}>${creature.type}</label>
            </div>`
    ).join('')}
        </div>
        <div  class = "flex-column border ">
            <h4>Choix des blocs:</h4>
            ${mapBlocksArray?.map(mapBlock =>
        `<div  class = "flex  p-0x5rem w-100 space-around">
            <div class = "w-5rem"> ${mapBlock.type}</div>
                <input class = "mapBlocks-proportion" type="number" value="0" min="0" max="100" id="${mapBlock.type + "-percent"}" />
                <label for="block-percentage">%</label>
            </div>`
    ).join('')}
        </div>
        <div class = "flex-column  border" >
            <h4>Choix des items:</h4>
            ${itemsArray?.map(item =>
        `<div  class = "flex align-left-self p-0x5rem w-5rem">
                <input class = "checkBox-items" type="checkbox" value="${item.name}" id=${item.name + "-checkbox"} />
                <label for=${item.name + "-checkbox"}>${item.name}</label>
            </div>`
    ).join('')}
        </div>
        <button class = "btn btn-start" >Start</button>
    </div>`;
    //injecte le contenu dans le DOM
    menuContainer.innerHTML = content;
    const blockNumberElement: HTMLInputElement | null = document.querySelector("#Dirt-percent")
    if (blockNumberElement !== null) blockNumberElement.value = "100"
}

const btnStartListener = () => {
    const btn = document.querySelector('.btn-start')
    if (btn === null) return
    btn.addEventListener('click', setGameDataAndLaunchGame);
}

const mapBloksListener = () => {
    mapBlocksArray?.forEach(mapBlock => {
        const inputElement = document.querySelector(`#${mapBlock.type + "-percent"}`);
        if (inputElement !== null)
            inputElement.addEventListener("change", generateNewMap);
    })
    const blockNumberElement: HTMLInputElement | null = document.querySelector("#map-blocks")
    const mapWidthElement: HTMLInputElement | null = document.querySelector("#map-width")
    if (blockNumberElement !== null && mapWidthElement !== null) {
        blockNumberElement.addEventListener("change", generateNewMap)
        mapWidthElement.addEventListener("change", generateNewMap)
    }
}

const generateNewMap = () => {

    const blockNumberElement: HTMLInputElement | null = document.querySelector("#map-blocks")
    const mapWidthElement: HTMLInputElement | null = document.querySelector("#map-width")
    const mapBlocksElement: NodeList = document.querySelectorAll(".mapBlocks-proportion")
    if (blockNumberElement === null || mapWidthElement === null) return
    const blockNumber = parseInt(blockNumberElement.value)
    const mapWidth = parseInt(mapWidthElement.value)
    const blocksProportions: number[] = []

    Array.from(mapBlocksElement as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        blocksProportions.push(parseInt(element.value, 10))
    })

    const newMapPreset = {
        grassGround: blocksProportions[1],
        snowGround: blocksProportions[2],
        dirtGround: blocksProportions[0]
    }
    gameData.howMuchTiles = blockNumber
    gameData.howMuchTilesOnLine = mapWidth
    gameData.mapPreset = newMapPreset

    mapBlocks_Init(gameData)
}

const setGameDataAndLaunchGame = () => {
    const blockNumberElement: HTMLInputElement | null = document.querySelector("#map-blocks")
    const mapWidthElement: HTMLInputElement | null = document.querySelector("#map-width")
    const creaturesElement: NodeList = document.querySelectorAll(".checkBox-creatures")
    const mapBlocksElement: NodeList = document.querySelectorAll(".mapBlocks-proportion")
    const itemsElements: NodeList = document.querySelectorAll(".checkBox-items")
    if (blockNumberElement === null || mapWidthElement === null) return
    const blockNumber = parseInt(blockNumberElement.value)
    const mapWidth = parseInt(mapWidthElement.value)
    const blocksProportions: number[] = []
    const creaturesNames: string[] = []
    const itemsNames: string[] = []

    Array.from(creaturesElement as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        if (element.checked) creaturesNames.push(element.value);
    });

    Array.from(mapBlocksElement as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        blocksProportions.push(parseInt(element.value, 10))
    })

    Array.from(itemsElements as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        if (element.checked) itemsNames.push(element.value)
    })

    const newMapPreset = {
        grassGround: blocksProportions[1],
        snowGround: blocksProportions[2],
        dirtGround: blocksProportions[0]
    }
    //@ts-ignore
    const newCreaturePreset: CreatureType[] = creaturesNames.map(creatureName => CreatureType[creatureName])

    //@ts-ignore
    const newItemsPreset = itemsNames.map(itemName => ItemName[itemName])



    gameData.howMuchTiles = blockNumber
    gameData.howMuchTilesOnLine = mapWidth
    gameData.mapPreset = newMapPreset
    gameData.creaturePreset = newCreaturePreset
    gameData.itemPreset = newItemsPreset
    const root = document.getElementById('root');
    const menuContainer = document.querySelector('.menu-container');
    if (root === null || menuContainer === null) return
    root.removeChild(menuContainer);
    console.log(gameData);
    componentInit(gameData)
}