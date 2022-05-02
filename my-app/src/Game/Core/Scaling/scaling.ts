export const scaling = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let scaleFactor = width / 1300;
    let screenRatio = width /height ;
    console.log(screenRatio)
    if ( screenRatio > 1.8) {
     scaleFactor = height / 740;
   }
console.log("scale",scaleFactor);
    const gameContainer: HTMLDivElement | null = document.querySelector(".game")
    const appContainer: HTMLDivElement | null = document.querySelector(".App")
    if (gameContainer) gameContainer.style.transform = "scale(" + scaleFactor + ")";
    if (appContainer) appContainer.style.height = height + "px";
};