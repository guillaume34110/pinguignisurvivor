import BuildingComp from './building/Building'
import '../../Style/components/buildings.css'
import {GameData} from "../../Core/StartData/StartData";

export default function Buildings(gameData:GameData) {
    return`<div class="buildings">
            ${gameData && gameData.building.map((building, index) => (
        BuildingComp(building,index)
    )).join(' ')}
        </div>`
}
