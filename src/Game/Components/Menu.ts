import { CreatureType } from "../Core/Creatures/Creature";
import { creatures } from "../Core/Creatures/Creatures";
import { mapBlocksArray } from "../Core/MapBlocks/MapBlocks";
import { GameData, startData } from '../Core/StartData/StartData';
import { Game, componentInit } from "./Game";


export const menu = (gameData: GameData) => {

    createMenuInterface()
    btnStartListener()

}
function createMenuInterface() {
    //creer un contenu qui peut etre mis a jour
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'menu-container')
    const root = document.getElementById('root');
    if (root === null) return
    root.appendChild(menuContainer);
    const content = `<div>
            <label>Nombre de block:</label>
            <input type="number" value="1000"  id="map-blocks" />
            <br />
            <label>Largeur de la carte:</label>
            <input type="number"value="25" id="map-width" />
            <br />
            <label>Choix des créatures:</label>
            ${creatures.map(creature =>
        `<input class = "checkBox-creatures" type="checkbox" value="${creature.type}" id=${creature.type + "-checkbox"} />
            <label for=${creature.type + "-checkbox"}>${creature.type}</label>`
    ).join('')}
           
            <div>Choix des blocs:
            ${mapBlocksArray.map(mapBlock =>
        `<div> ${mapBlock.type}
           <input class = "mapBlocks-proportion" type="number" value="0" min="0" max="100" id="${mapBlock.type + "-percent"}" />
            <label for="block-percentage">%</label>
            </div>`
    ).join('')}
             </div>
            <button class = "btn btn-start" >Start</button>
        </div>`;
    //injecte le contenu dans le DOM
    menuContainer.innerHTML = content;
}

const btnStartListener = () => {
    const btn = document.querySelector('.btn-start')
    if (btn === null) return
    btn.addEventListener('click', setGameDataAndLaunchGame);
}

const setGameDataAndLaunchGame = () => {
    const blockNumberElement: HTMLInputElement | null = document.querySelector("#map-blocks")
    const mapWidthElement: HTMLInputElement | null = document.querySelector("#map-width")
    const creaturesElement: NodeList = document.querySelectorAll(".checkBox-creatures")
    const mapBlocksElement: NodeList = document.querySelectorAll(".mapBlocks-proportion")
    if (blockNumberElement === null || mapWidthElement === null) return
    const blockNumber = parseInt(blockNumberElement.value)
    const mapWidth = parseInt(mapWidthElement.value)
    const blocksProportions: number[] = []
    const creaturesNames: string[] = []

    Array.from(creaturesElement as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        if (element.checked) {
            creaturesNames.push(element.value);
        }
    });

    Array.from(mapBlocksElement as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        blocksProportions.push(parseInt(element.value, 10))
    })

    const newMapPreset = {
        grassGround: blocksProportions[1],
        snowGround: blocksProportions[2],
        dirtGround: blocksProportions[0]
    }
    //@ts-ignore
    const newCreaturePreset = creaturesNames.map(creatureName => CreatureType[creatureName])

    let gameData: GameData = JSON.parse(JSON.stringify(startData))

    gameData.howMuchTiles = blockNumber
    gameData.howMuchTilesOnLine = mapWidth
    gameData.mapPreset = newMapPreset
    gameData.creaturePreset = newCreaturePreset
    componentInit(gameData)
}