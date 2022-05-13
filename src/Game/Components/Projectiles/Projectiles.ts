import '../../Style/components/Projectiles.css'
import Projectile from './Projectile/Projectile'
import {slotsGenerator} from "../../Core/Utilities/Draw";

export default function Projectiles() {
    return ` <div class="weapons">
            ${slotsGenerator(150).map((projectile, index) => (
                Projectile()
            )).join(" ")}
        </div>`


}
