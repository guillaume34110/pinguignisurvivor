// import {GameProps} from "../interfaces/GameProps";
// import React from "react";
// import HitBoxComp from "./Hitbox/HitBoxComp";
// import '../../Style/components/Hitboxs.css'
//
// export default function Hitbox({gameData, setGameData}: GameProps) {
//
//     return (
//         <div className="hitboxs">
//
//             <HitBoxComp hitBox={gameData.hero.hitBox}/>
//             {gameData && gameData.building.map((building, index) => (
//                 <HitBoxComp key={index} hitBox={building.hitBox}/>
//             ))}
//             {gameData && gameData.enemies.map((enemy, index) => (
//                 <HitBoxComp key={index} hitBox={enemy.hitBox}/>
//             ))}
//         </div>
//     )
// }