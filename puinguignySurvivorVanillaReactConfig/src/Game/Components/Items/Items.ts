
import '../../Style/components/Items.css'
import {slotsGenerator} from "../../Core/Utilities/Draw";
import Item from "./Item/Item";


export default function Items() {
    return `<div class="items">
            ${slotsGenerator(75).map(() => (
                Item()
            )).join(" ")}

        </div>`


}
