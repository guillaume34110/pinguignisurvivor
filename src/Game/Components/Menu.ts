import { CreatureType } from "../Core/Creatures/Creature";
import { creaturesMenu } from "../Core/Creatures/Creatures";
import { mapBlocksArray } from "../Core/MapBlocks/MapBlocks";
import { GameData } from '../Core/StartData/StartData';
import { componentInit, drawInit, drawLoop, gameData } from './Game';
import '../Style/components/Menu.css'
import { itemsArray } from "../Core/Items/ItemsArray";
import { scaling } from "../Core/Scaling/scaling";
import { mapBlocks_Init } from "../Core/MapBlocks/MapBlocks_Init";
import { Creatures_Init } from "../Core/Creatures/Creatures_Init";
import { item_Init } from "../Core/Items/Item_Init";
import { ItemType } from "../Core/Items/Item";

let totalPrice = 0

const getTimerElement = (): HTMLInputElement | null => document.querySelector('#timer-input')
const getBlockHeightElement = (): HTMLInputElement | null => document.querySelector("#map-blocks")
const getMapWidthElement = (): HTMLInputElement | null => document.querySelector("#map-width")
const getRootElement = (): HTMLElement | null => document.getElementById('root')
const getBtnStartElement = (): HTMLDivElement | null => document.querySelector('.btn-start')
const getBtnGenerateElements = (): NodeList => document.querySelectorAll(`.btn-generate`)
const getBtnGenerateElementsElement = (): HTMLButtonElement | null => document.querySelector(`.btn-generate-elements`)
const getBtnGenerateCreaturesElement = (): HTMLButtonElement | null => document.querySelector(`.btn-generate-creatures`)
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
    creatureListener()
    itemListener()
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
            <h4>Longueur de la carte:</h4>
            <input type="number" value="10"  id="map-blocks" />
        </div>
        <div  class = "flex">
            <h4>Largeur de la carte:</h4>
            <input type="number"value="25" id="map-width" />
        </div>
        <h4 class = "map-block-price" >Price : ${gameData.mapBlockPrice * gameData.howMuchTiles}</h4>
        <button class = "btn btn-generate" >Generer carte</button>
    </div>
`

    const creaturesMenuCard = `
<div class = "flex-column border " >
        <h4>Choix des créatures:</h4>
        ${creaturesMenu?.map(creature =>
        `<div  class = "flex  p-0x5rem w-100 space-around">
            <div class = "w-5rem"> ${creature.type}</div>
                <input data-price="${creature.price}" data-type="${creature.type}"  class = "creature-number" type="number" value="0" min="0" max="10000" id="${creature.type + "-number"}" />
                <label for="creature-price">${creature.price}$</label>
            </div>`
    ).join('')}
    <button class = "btn btn-generate-creatures" >Generer creatures</button>
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
        <button class = "btn btn-generate" >Generer carte</button>
    </div>
`

    const itemsMenuCard = `
<div  class = "flex-column border ">
        <h4>Choix des elements:</h4>
        ${itemsArray?.map(item =>
        `<div  class = "flex  p-0x5rem w-100 space-around">
            <div class = "w-5rem"> ${item.type}</div>
                <input data-name = ${item.type} data-price="${item.price}"  class = "item-number" type="number" value="0" min="0" max="100" id="${item.type + "-number"}" />
                <label for="item-price">${item.price}$</label>
            </div>`
    ).join('')}
    <button class = "btn btn-generate-elements" >Generer elements</button>
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

const creatureListener = () => {
    const inputElement = getBtnGenerateCreaturesElement()
    if (inputElement === null) return
    inputElement.addEventListener('click', creatureInitializer);
}

const creatureInitializer = () => {
    const creaturesElement: NodeList = getCreaturesElement()
    const creaturesTypes: string[] = []
    Array.from(creaturesElement as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        const howMuch = parseInt(element.value)
        for (let i = 0; i < howMuch; i++) {
            const type = element.getAttribute('data-type')
            if (type !== null)
                creaturesTypes.push(type);
        }
    })
    //@ts-ignore
    const newCreaturePreset: CreatureType[] = creaturesTypes.map(creatureName => CreatureType[creatureName])

    gameData.creaturePreset = newCreaturePreset
    Creatures_Init(gameData)
}

const itemListener = () => {
    const inputElement = getBtnGenerateElementsElement()
    if (inputElement === null) return
    inputElement.addEventListener('click', itemInitializer);
}

const itemInitializer = () => {
    const ItemsElement: NodeList = getItemsElements()
    const ItemsNames: string[] = []
    Array.from(ItemsElement as NodeListOf<HTMLInputElement>).forEach((element: HTMLInputElement) => {
        const howMuch = parseInt(element.value)
        for (let i = 0; i < howMuch; i++) {
            const type = element.getAttribute('data-name')
            if (type !== null)
                ItemsNames.push(type);
        }
    })
    //@ts-ignore
    const newItemPreset: ItemType[] = ItemsNames.map(ItemName => ItemType[ItemName])

    gameData.itemPreset = newItemPreset
    item_Init(gameData)
}

const changesListeners = () => {
    const blockNumberElement: HTMLInputElement | null = getBlockHeightElement()
    if (blockNumberElement === null) return
    blockNumberElement.addEventListener("change", setNumberBlockTotalPrice)

    itemsArray.forEach(item => {
        const inputElement: HTMLInputElement | null = document.querySelector(`#${item.type + "-number"}`);
        if (inputElement === null) return
        inputElement.addEventListener("change", setItemTotalPrice)

    })

    creaturesMenu.forEach(creature => {
        const inputElement: HTMLInputElement | null = document.querySelector(`#${creature.type + "-number"}`);
        if (inputElement === null) return
        inputElement.addEventListener("change", setCreatureTotalPrice)

    })

}

const setNumberBlockTotalPrice = () => {
    const blockNumberElement: HTMLInputElement | null = getBlockHeightElement()
    const blockWidthElement: HTMLInputElement | null = getMapWidthElement()
    const mapBlockPriceElement: HTMLTitleElement | null = getMapBlockPriceElement()
    if (blockNumberElement === null || mapBlockPriceElement === null || blockWidthElement === null) return
    const price = gameData.mapBlockPrice * parseInt(blockNumberElement.value) * parseInt(blockWidthElement.value)
    mapBlockPriceElement.innerHTML = `Price : ${price}`
    gameData.totalMapBlockPrice = price
    setTotalPriceElement()
}
const setItemTotalPrice = () => {
    const totalPriceElement: HTMLTitleElement | null = getItemTotalPriceElement()
    if (totalPriceElement === null) return
    let totalPriceBuffer = 0
    itemsArray.forEach(item => {
        const inputElement: HTMLInputElement | null = document.querySelector(`#${item.type + "-number"}`);
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
    creaturesMenu.forEach(creature => {
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

    const blockNumberElement = getBlockHeightElement()
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
        waterGround: blocksProportions[3],
        dirtGround: blocksProportions[0]
    }
    gameData.howMuchTiles = blockNumber * mapWidth
    gameData.howMuchTilesOnLine = mapWidth
    gameData.mapPreset = newMapPreset

    mapBlocks_Init(gameData)
}

const setGameDataAndLaunchGame = () => {
    const timerElement: HTMLInputElement | null = getTimerElement()
    if (timerElement === null) return
    const timeBeforeHarvest = parseInt(timerElement.value)
    if (gameData.gold < gameData.totalPrice) {
        priceError(gameData)
        return
    }
    gameData.timeBeforeHarvest = timeBeforeHarvest * 60 * 1000
    gameData.gold -= gameData.totalPrice
    const root = getRootElement()
    const menuContainer = getMenuContainerElement();
    if (root === null || menuContainer === null) return
    root.removeChild(menuContainer);
    console.log(gameData);
    componentInit(gameData)
}

const refillGold = (gameData: GameData) => {
    if (gameData.gold < 400) gameData.gold = 400
}

const priceError = async (gameData: GameData) => {
    const totalPriceElement = getTotalPriceElement()
    if (totalPriceElement === null) return
    const totalPriceBuffer = gameData.totalItemPrice + gameData.totalCreaturePrice + gameData.totalMapBlockPrice
    totalPriceElement.innerHTML = `Price : ${totalPriceBuffer} <div class = "error-text">Or insufisant</div>`
    await sleep(2000)
    totalPriceElement.innerHTML = `Price : ${totalPriceBuffer} `
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}