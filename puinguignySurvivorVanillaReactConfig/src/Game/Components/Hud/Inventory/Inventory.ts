import InventoryItem from "./InventoryItem/InventoryItem";
import {slotsGenerator} from "../../../Core/Utilities/Draw";


export default function Inventory() {
    return `<div class="inventory">
           ${slotsGenerator(10).map(() => InventoryItem() ).join(" ")}
        </div>`
}
