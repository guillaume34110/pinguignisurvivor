export const scaling = () => {

    const width = window.innerWidth;
    const height = window.innerHeight;
    let scaleFactor = width / 1300;
    let screenRatio = width /height ;
    if ( screenRatio > 1.8) {
     scaleFactor = height / 760;
   }

    const gameContainer: HTMLDivElement | null = document.querySelector(".game")
    const appContainer: HTMLDivElement | null = document.querySelector(".App")
    if (gameContainer) gameContainer.style.transform = "scale(" + scaleFactor + ")";
    if (appContainer) appContainer.style.height = height + "px";
};