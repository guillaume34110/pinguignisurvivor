export const scaling = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let scaleFactor = width / 1920;
    let screenRatio = height / width;
    if (screenRatio < 0.56) {
        scaleFactor = height / 1080;
        //if (height < 600) height = height - height / 6;
    }

    const gameContainer: HTMLDivElement | null = document.querySelector(".game")
    const appContainer: HTMLDivElement | null = document.querySelector(".App")
    if (gameContainer) gameContainer.style.transform = "scale(" + scaleFactor + ")";
    if (appContainer) appContainer.style.height = height + "px";
};