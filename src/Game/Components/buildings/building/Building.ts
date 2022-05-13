import {Building} from "../../../Core/Building/Building";
import {GameData} from "../../../Core/StartData/StartData";


export default function BuildingComp(buildingData: Building , index : number):string {
    return ` <div id="${`building-${index}`}" class="${`building building-${buildingData.type} ${buildingData.sprite} fixed"`}></div>`
}

/* ` <div id = "hero" class="${`hero animation ${gameData.hero.sprite.sprite}`}"> ${Life()}
            </div>`*/
export const buildingsDrawInit = (gameData: GameData) => {
    gameData.building.forEach((building) => {
        const targetBuilding: HTMLDivElement | null = document.querySelector('#building-'+ building.id.toString())
        if (targetBuilding) {
            targetBuilding.style.left = building.spriteBox.x + 'px'
            targetBuilding.style.top = building.spriteBox.y + 'px'
            targetBuilding.style.width = building.spriteBox.w + 'px'
            targetBuilding.style.height = building.spriteBox.h + 'px'
            targetBuilding.style.transform = `rotateX(${building.rotationX}deg) translateY(${building.translateY}px) rotateY(${building.rotationY}deg) `
        }
    })
}
