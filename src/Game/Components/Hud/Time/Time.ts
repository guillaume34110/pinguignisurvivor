
import { GameData } from '../../../Core/StartData/StartData';

export default function Time(gameData:GameData) : string{
    return `<div class="hud-time">${msToMinSec(gameData.timeBeforeHarvest - gameData.time)}</div>`
}

export function msToMinSec(ms: number): string {
    const minutes: number = ~~(ms/60000);
    const seconds: number = ~~((ms % 60000)/1000);
    return minutes + 'min ' + seconds + 'sec';
  }