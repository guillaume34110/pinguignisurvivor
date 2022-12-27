import '../../Style/components/Hud.css'
import Xp from "./Xp/Xp";
import Time from "./Time/Time";
import Inventory from "./Inventory/Inventory";
import { GameData } from '../../Core/StartData/StartData';

import * as PIXI from 'pixi.js'

export  function hud_Refresh(gameData: GameData, targetGl: CanvasRenderingContext2D) {
    targetGl.fillStyle = "white"
    const x = 20
    const y = 20
    targetGl.font = "20px Arial";
    targetGl.fillText(gameData.message, x, y)
}

export  function hud_RefreshPixi(gameData: GameData, targetPixi: PIXI.Application) {
    const text = new PIXI.Text(gameData.message, {
        fontFamily: 'Arial',
        fontSize: 20,
        fill: 'white',
        align: 'left'
    });
    text.position.set(20, 20);
    targetPixi.stage.addChild(text);
}



