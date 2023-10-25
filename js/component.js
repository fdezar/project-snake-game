class Component {
    constructor(gameScreen, left, top, width, height, imgSrc) {

        // common elements in Snake and Food
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;

        // snake and food initial style common properties
        this.element = document.createElement("div");
        this.element.style.gridArea = 
        // this.element.src = imgSrc;
        // this.element.style.position = "absolute";
        // this.element.style.width = `${width}px`;
        // this.element.style.height = `${height}px`;
        // this.element.style.left = `${left}px`;
        // this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }
}