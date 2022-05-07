import {GameProps} from "../interfaces/GameProps";
import React from "react";
import HitBoxComp from "./Hitbox/HitBoxComp";
import '../../Style/components/Hitboxs.css'

export default function Hitbox({gameData, setGameData}: GameProps) {

    return (
        <div className="hitboxs">

            <HitBoxComp spriteBox={gameData.hero.hitBox}/>
            {gameData && gameData.building.map((building,index) => (
                <HitBoxComp  key = {index} spriteBox = {building.hitBox}/>
            ))}
        </div>
    )
}