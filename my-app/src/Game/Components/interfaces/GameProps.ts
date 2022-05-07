import {GameData} from "../../Core/StartData/StartData";

export interface GameProps {
    gameData: GameData,
    setGameData: React.Dispatch<React.SetStateAction<GameData>>
}