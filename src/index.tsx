
import reportWebVitals from "./reportWebVitals";
import {Game} from "./Game/Components/Game";
import {GamePixi} from "./Game/Components/GamePixi";

const init = () => {
    //Game()
    GamePixi()
   // const root =   document.querySelector('#root')
   // if (root!=null) root.innerHTML = "happy"
}
init()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
