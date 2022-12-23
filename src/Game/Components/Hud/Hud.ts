import '../../Style/components/Hud.css'
import Xp from "./Xp/Xp";
import Time from "./Time/Time";
import Inventory from "./Inventory/Inventory";
import { GameData } from '../../Core/StartData/StartData';

export default function hud_Refresh(gameData: GameData, targetGl: CanvasRenderingContext2D) {
    targetGl.fillStyle = "white"
    const x = 20
    const y = 20
    targetGl.font = "20px Arial";
    targetGl.fillText(gameData.message, x, y)
}




