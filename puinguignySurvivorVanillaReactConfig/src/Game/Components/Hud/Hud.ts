import '../../Style/components/Hud.css'
import Xp from "./Xp/Xp";
import Time from "./Time/Time";
import Inventory from "./Inventory/Inventory";

export default function Hud():string {
    return ` <div class="hud">
            ${Xp()}
            ${Time()}
            ${Inventory()}
        </div>`

}
