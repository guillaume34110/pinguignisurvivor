import '../../Style/components/Enemies.css'
import EnemyComp from './Enemy/EnemyComp';
import {slotsGenerator} from "../../Core/Utilities/Draw";

export default function Enemies() {
    return `<div class="enemies">
            ${slotsGenerator(200).map(() => (
        EnemyComp()
    )).join(" ")}
        </div>`
}
