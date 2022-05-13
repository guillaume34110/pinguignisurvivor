import {GameData} from "../../../Core/StartData/StartData";

export default function Item() {
    return `<div  class="item-empty"></div>`
}


const itemState: number[] = []

const itemCreation = (gameData: GameData) => {
    gameData.items.forEach((item) => {
        if (!itemState.includes(item.id)) {
            const emptyItem: HTMLDivElement | null = document.querySelector('.item-empty')
            if (emptyItem !== null) {
                emptyItem.id ='item-' + item.id.toString()
                emptyItem.classList.remove('projectile-empty')
                emptyItem.classList.add('projectile')
                itemState.push(item.id)
            }
        }
    })
}

const itemDestruction = (gameData:GameData) => {
    const currentItemIds = gameData.items.map((item) => {
        return item.id
    })

    itemState.forEach((item, index) => {
        if (!currentItemIds.includes(item)) {
            const itemToDestroy: HTMLDivElement | null = document.querySelector(`#item-${item}`)
            if (itemToDestroy !== null) {
                itemToDestroy.id = ''
                itemToDestroy.classList.remove('projectile')
                itemToDestroy.classList.add('projectile-empty')
                itemState.splice(index,1)
            }
        }
    })
}

const itemUpdate = (gameData:GameData) => {
    gameData.items.forEach((item) => {
        const targetItem:HTMLDivElement|null = document.querySelector(`#item-${item}`)
        if (targetItem ) {
            targetItem.style.left = item.spriteBox.x + 'px'
            targetItem.style.top = item.spriteBox.y + 'px'
        }
    })
}

export const itemRefresh = (gameData:GameData) => {
    itemCreation(gameData)
    itemDestruction(gameData)
    itemUpdate(gameData)
}


// const itemRef = useRef<HTMLDivElement | null>(null)
//
// useEffect(() => {
//     if (itemRef && itemRef.current) {
//         itemRef.current.style.left= itemData.spriteBox.x + 'px'
//         itemRef.current.style.top = itemData.spriteBox.y + 'px'
//     }
// }, [itemData.spriteBox.x, itemData.spriteBox.y])
