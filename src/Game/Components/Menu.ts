import { CreatureType } from "../Core/Creatures/Creature";
import { creatures } from "../Core/Creatures/Creatures";
import { mapBlocksArray } from "../Core/MapBlocks/MapBlocks";
import { GameData } from '../Core/StartData/StartData';
import { componentInit, drawInit, drawLoop, gameData } from './Game';
import '../Style/components/Menu.css'
import { itemsArray } from "../Core/Items/ItemsArray";
import { ItemName } from "../Core/Items/Item";
import { scaling } from "../Core/Scaling/scaling";
import { mapBlocks_Init } from "../Core/MapBlocks/MapBlocks_Init";

let totalPrice = 0

const getTimerElement = (): HTMLInputElement | null => document.querySelector('#timer-input')
const getBlockNumberElement = (): HTMLInputElement | null => document.querySelector("#map-blocks")
const getMapWidthElement = (): HTMLInputElement | null => document.querySelector("#map-width")
const getRootElement = (): HTMLElement | null => document.getElementById('root')
const getBtnStartElement = (): HTMLDivElement | null => document.querySelector('.btn-start')
const getBtnGenerateElements = (): NodeList => document.querySelectorAll(`.btn-generate`)
const getMapBlockPriceElement = (): HTMLTitleElement | null => document.querySelector(".map-block-price")
const getItemTotalPriceElement = (): HTMLTitleElement | null => document.querySelector(".item-total-price")
const getCreatureTotalPriceElement = (): HTMLTitleElement | null => document.querySelector(".creature-total-price")
const getMapBlocksProportionsElement = (): NodeList => document.querySelectorAll(".mapBlocks-proportion")
const getCreaturesElement = (): NodeList => document.querySelectorAll(".creature-number")
const getItemsElements = (): NodeList => document.querySelectorAll(".item-number")
const getMenuContainerElement = () => document.querySelector('.menu-container')
const getTotalPriceElement = () => document.querySelector('.total-price')

let firstTimeToken = false
export const menu = (gameData: GameData) => {
    refillGold(gameData)
    createMenuInterface()
    changesListeners()
    btnStartListener()
    mapBlocksListener()
    if (!firstTimeToken) {
        firstTimeToken = true
        drawInit()
        window.requestAnimationFrame(drawLoop)
        scaling()
    }
    generateNewMap()
    setNumberBlockTotalPrice()
    setItemTotalPrice()
    setCreatureTotalPrice()
    setTotalPriceElement()
}
function createMenuInterface() {
    //creer un contenu qui peut etre mis a jour
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'menu-container')
    const root = getRootElement()
    if (root === null) return
    root.appendChild(menuContainer);
    // Déclaration des constantes
    const title = `
<div class = " title" >
    <h1> SeedsMaker </h1>
    <h6>Christmas Panettone</h6>
</div>
`

    const goldMenuCard = `
<p class = "player-gold">gold : ${gameData.gold}</p>
`
    const timer = `
<div class = "flex-column  border" >
    <div  class = "flex">
        <h4>combien de temps avant la récolte:</h4>
        <input type="number"value="5" id="timer-input" />
        <label for="timer-input">min</label>
    </div>
</div>
`
    const mapBlocksMenuCard = `
<div class = "flex-column  border" >
        <div class = "flex ">
            <h4>Nombre de block:</h4>
            <input type="number" value="1000"  id="map-blocks" />
            <h4> ${gameData.mapBlockPrice}$</h4>
        </div>
        <div  class = "flex">
            <h4>Largeur de la carte:</h4>
            <input type="number"value="25" id="map-width" />
        </div>
        <h4 class = "map-block-price" >Price : ${gameData.mapBlockPrice * gameData.howMuchTiles}</h4>
        <button class = "btn btn-generate" >Generer</button>
    </div>
`

    const creaturesMenuCard = `
<div class = "flex-column border " >
        <h4>Choix des créatures:</h4>
        ${creatures?.map(creature =>
        `<div  class = "flex  p-0x5rem w-100 space-around">
            <div class = "w-5rem"> ${creature.type}</div>
                <input data-price="${creature.price}" data-type="${creature.type}"  class = "creature-number" type="number" value="0" min="0" max="10000" id="${creature.type + "-number"}" />
                <label for="creature-price">${creature.price}$</label>
            </div>`
    ).join('')}
    <h4 class = "creature-total-price" >Price : ${gameData.totalCreaturePrice}</h4>
    </div>
`

    const mapBlocksMenuCardTwo = `
<div class = "flex-column border " >
        <h4>Choix des blocs:</h4>
        ${mapBlocksArray?.map(mapBlock =>
        `<div  class = "flex  p-0x5rem w-100 space-around">
            <div class = "w-5rem"> ${mapBlock.type}</div>
                    <input class = "mapBlocks-proportion" type="number" value="0" min="0" max="100" id="${mapBlock.type + "-percent"}" />
                <label for="block-percentage">%</label>
            </div>`
    ).join('')}
        <button class = "btn btn-generate" >Generer</button>
    </div>
`

    const itemsMenuCard = `
<div  class = "flex-column border ">
        <h4>Choix des items:</h4>
        ${itemsArray?.map(item =>
        `<div  class = "flex  p-0x5rem w-100 space-around">
            <div class = "w-5rem"> ${item.name}</div>
                <input data-name = ${item.name} data-price="${item.price}"  class = "item-number" type="number" value="0" min="0" max="100" id="${item.name + "-number"}" />
                <label for="item-price">${item.price}$</label>
            </div>`
    ).join('')}
    <h4 class = "item-total-price" >Price : ${gameData.totalCreaturePrice}</h4>
    </div>
`
    const totalPriceElement = `
 <h4 class = "total-price" >Price : ${totalPrice}</h4>
`

    const buttonStartMenuCard = `
<button class = "btn btn-start" >Start</button>
`

    // Concaténation des constantes
    const content = `
<div class = " menu-card p-1rem h-6rem">
    ${title}
    ${goldMenuCard}
</div>
<div class = " menu-card  p-1rem" >
            ${timer}
    ${mapBlocksMenuCard}
    ${creaturesMenuCard}
    ${mapBlocksMenuCardTwo}
    ${itemsMenuCard}
    ${totalPriceElement}
    ${buttonStartMenuCard}
</div>
`
    //injecte le contenu dans le DOM
    menuContainer.innerHTML = content;
    const blockNumberElement: HTMLInputElement | null = document.querySelector("#Dirt-percent")
    if (blockNumberElement !== null) blockNumberElement.value = "100"
}

const btnStartListener = () => {
    const btn = getBtnStartElement()
    if (btn === null) return
    btn.addEventListener('click', setGameDataAndLaunchGame);
}

const mapBlocksListener = () => {

    const inputElement: NodeList = getBtnGenerateElements()
    Array.from(inputElement as NodeListOf<HTMLButtonElement>).forEach((element: HTMLButtonElement) => {
        element.addEventListener("click", generateNewMap)
    })
}

const changesListeners = () => {
    const blockNumberElement: HTMLInputElement | null = getBlockNumberElement()
    if (blockNumberElement === null) return
    blockNumberElement.addEventListener("change", setNumberBlockTotalPrice)

    itemsArray.forEach(item => {
        const inputElement: HTMLInputElement | null = document.querySelector(`#${item.name + "-number"}`);
        if (inputElement === null) return
        inputElement.addEventListener("change", setItemTotalPrice)

    })

    creatures.forEach(creature => {
        const inputElement: HTMLInputElement | null = document.querySelector(`#${creature.type + "-number"}`);
        if (inputElement === null) return
        inputElement.addEventListener("change", setCreatureTotalPrice)

    })

}

const setNumberBlockTotalPrice = () => {
    const blockNumberElement: HTMLInputElement | null = getBlockNumberElement()
    const mapBlockPriceElement: HTMLTitleElement | null = getMapBlockPriceElement()
    if (blockNumberElement === null || mapBlockPriceElement === null) return
    const price = gameData.mapBlockPrice * parseInt(blockNumberElement.value)
    mapBlockPriceElement.innerHTML = `Price : ${price}`
    gameData.totalMapBlockPrice = price
    setTotalPriceElement()
}
const setItemTotalPrice = () => {
    const totalPriceElement: HTMLTitleElement | null = getItemTotalPriceElement()
    if (totalPriceElement === null) return
    let totalPriceBuffer = 0
    itemsArray.forEach(item => {
        const inputElement: HTMLInputElement | null = document.querySelector(`#${item.name + "-number"}`);
        if (inputElement === null) return
        const itemPrice = inputElement.getAttribute('data-price');
        if (itemPrice === null) return
        totalPriceBuffer += parseInt(itemPrice) * parseInt(inputElement.value)
    })
    totalPriceElement.innerHTML = `Price : ${totalPriceBuffer}`
    gameData.totalItemPrice = totalPriceBuffer
    setTotalPriceElement()
}

const setCreatureTotalPrice = () => {
    const totalPriceElement: HTMLTitleElement | null = getCreatureTotalPriceElement()
    if (totalPriceElement === null) return
    let totalPriceBUffer = 0
    creatures.forEach(creature => {
        const inputElement: HTMLInputElement | null = document.querySelector(`#${creature.type + "-number"}`);
        if (inputElement === null) return
        const creaturePrice = inputElement.getAttribute('data-price');
        if (creaturePrice === null) return
        totalPriceBUffer += parseInt(creaturePrice) * parseInt(inputElement.value)
    })
    totalPriceElement.innerHTML = `Price : ${totalPriceBUffer}`
    gameData.totalCreaturePrice = totalPriceBUffer
    setTotalPriceElement()
}

const setTotalPriceElement = () => {

    const totalPriceElement = getTotalPriceElement()
    if (totalPriceElement === null) return
    const totalPriceBuffer = gameData.totalItemPrice + gameData.totalCreaturePrice + gameData.totalMapBlockPrice
    totalPriceElement.innerHTML = `Price : ${totalPriceBuffer}`
    gameData.totalPrice = totalPriceBuffer
}

const generateNewMap = () => {

    const blockNumberElement = getBlockNumberElement()
    const mapWidthElement: HTMLInputElement | null = getMapWidthElement()
    const mapBlocksElement: NodeList = getMapBlocksProportionsElement()
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

    const blockNumberElement: HTMLInputElement | null = getBlockNumberElement()
    const mapWidthElement: HTMLInputElement | null = getMapWidthElement()
    const creaturesElement: NodeList = getCreaturesElement()
    const mapBlocksElement: NodeList = getMapBlocksProportionsElement()
    const itemsElements: NodeList = getItemsElements()
    const timerElement: HTMLInputElement | null = getTimerElement()
    if (blockNumberElement === null || mapWidthElement === null || timerElement === null) return
    console.log("object")
    const blockNumber = parseInt(blockNumberElement.value)
    const mapWidth = parseInt(mapWidthElement.value)
    const timeBeforeHarvest = parseInt(timerElement.value)
    const blocksProportions: number[] = []
    const creaturesNames: string[] = []
    const itemsNames: string[] = []

    Array.from(creaturesElement as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        const howMuch = parseInt(element.value)
        for (let i = 0; i < howMuch; i++) {
            const type = element.getAttribute('data-type')
            if (type !== null)
                creaturesNames.push(type);
        }

    })

    Array.from(mapBlocksElement as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        blocksProportions.push(parseInt(element.value, 10))
    })

    Array.from(itemsElements as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        const howMuch = parseInt(element.value)
        for (let i = 0; i < howMuch; i++) {
            const name = element.getAttribute('data-name')
            if (name !== null)
                itemsNames.push(name);
        }
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
    if (gameData.gold < gameData.totalPrice){
        priceError(gameData)
         return
        }
    gameData.timeBeforeHarvest = timeBeforeHarvest * 60 * 1000
    gameData.howMuchTiles = blockNumber
    gameData.howMuchTilesOnLine = mapWidth
    gameData.mapPreset = newMapPreset
    gameData.creaturePreset = newCreaturePreset
    gameData.itemPreset = newItemsPreset
    gameData.gold -= gameData.totalPrice
    const root = getRootElement()
    const menuContainer = getMenuContainerElement();
    if (root === null || menuContainer === null) return
    root.removeChild(menuContainer);
    componentInit(gameData)
}

const refillGold = (gameData: GameData) => {
    if (gameData.gold < 400) gameData.gold = 400
}

const priceError =async (gameData: GameData) =>{
     const totalPriceElement = getTotalPriceElement()
    if (totalPriceElement === null) return
    const totalPriceBuffer = gameData.totalItemPrice + gameData.totalCreaturePrice + gameData.totalMapBlockPrice
    totalPriceElement.innerHTML = `Price : ${totalPriceBuffer} <div class = "error-text">Or insufisant</div>`
    await sleep(2000)
    totalPriceElement.innerHTML = `Price : ${totalPriceBuffer} `
}

export function sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }