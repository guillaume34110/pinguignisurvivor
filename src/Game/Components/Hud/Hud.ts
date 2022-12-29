import '../../Style/components/Hud.css'
import { GameData } from '../../Core/StartData/StartData';

import * as PIXI from 'pixi.js'



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



