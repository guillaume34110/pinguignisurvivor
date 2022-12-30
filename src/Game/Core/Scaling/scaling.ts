export const scaling = () => {

    const width = window.innerWidth;
    const height = window.innerHeight;
    let scaleFactor = Math.min(width / 1300, height / 760);

    const gameContainer: HTMLCanvasElement | null = document.querySelector("canvas")
    const appContainer: HTMLBodyElement | null = document.querySelector("#root")
    if (gameContainer) gameContainer.style.transform = "scale(" + scaleFactor + ")";
    if (appContainer) appContainer.style.height  = height-1 + "px";
};