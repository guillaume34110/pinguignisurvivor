export const scaling = () => {

    const width = window.innerWidth;
    const height = window.innerHeight;
    let scaleFactor = Math.min(width / 1280, height / 720);

    const gameContainer: HTMLCanvasElement | null = document.querySelector("canvas")
    if (gameContainer) gameContainer.style.transform = "scale(" + scaleFactor + ")";
};