import { GameData } from '../../Core/StartData/StartData';
import { isOnScreen } from '../Game';
import { selectImg } from './MapBoxSprites';


export const mapBlocksRefresh = (gameData: GameData, targetGl: CanvasRenderingContext2D) => {

    const god = gameData.god

    gameData.mapBlocks.forEach(mapBlock => {
        if (isOnScreen(god, mapBlock.spriteBox)) {
            targetGl.drawImage(
                selectImg(mapBlock.sprite),
                0,
                0,
                32,
                32,
                mapBlock.spriteBox.x - god.spriteBox.x + 600,
                mapBlock.spriteBox.y - god.spriteBox.y + 300,
                mapBlock.spriteBox.w,
                mapBlock.spriteBox.h
            )
        }
    })

}
