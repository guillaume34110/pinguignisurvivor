import HitBoxComp from "./Hitbox/HitBoxComp";
import '../../Style/components/Hitboxs.css'
import {slotsGenerator} from "../../Core/Utilities/Draw";

export default function Hitbox() {
    return ` <div class="hitboxs">
            ${slotsGenerator(400).map(() => (
                HitBoxComp() 
            )).join(" ")}
        </div>`
}