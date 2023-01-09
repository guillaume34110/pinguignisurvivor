import '../../Style/components/Hud.css'
import { GameData } from '../../Core/StartData/StartData';

import * as PIXI from 'pixi.js'
import Time, { msToMinSec } from './Time/Time';

const getHudElement = (): HTMLElement | null => document.querySelector('.hud-container')
const getTimeElement = (): HTMLElement | null => document.querySelector('.hud-time')
const getRootElement = (): HTMLElement | null => document.getElementById('root')
const getMenuContainerElement = () => document.querySelector('.menu-container')

export function hud_RefreshPixi(gameData: GameData) {
    const root = getRootElement()
    const hud = getHudElement()
    if (root === null) return
    if (getMenuContainerElement() === null) {


        const time = getTimeElement()
        if (hud === null || time === null) {
            console.log(gameData.timeBeforeHarvest);
            const hudContainer = document.createElement('div');
            hudContainer.setAttribute('class', 'hud-container')
            root.appendChild(hudContainer);
            hudContainer.innerHTML = `
        <div class = " hud-card  p-1rem" >
            ${Time(gameData)}
        </div>
        `;
        }
        else {
            time.innerHTML = msToMinSec(gameData.timeBeforeHarvest - gameData.time)
        }
    }
    else if (hud !== null) {
        root.removeChild(hud);
    }
}



