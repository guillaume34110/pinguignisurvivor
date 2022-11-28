import {GameData, HitBox} from "../StartData/StartData";
import {ItemClass} from "./Item";
import {ItemSprite} from "./ItemSprite";

export const item_Init = (gameData: GameData) => {
    for (let i = 0; i < 200; i++) {
        gameData.items.push(
            new ItemClass(
                new HitBox(
                    -999_999,
                    -999_999,
                    16,
                    16
                ),
                ItemSprite.xpBlue,
                1,
            )
        )
    }
}
