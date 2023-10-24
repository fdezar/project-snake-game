class Component {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;

        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }

    updatePosition() {

        // a ver cómo hacemos esto. El snake lo que tiene es que al darle
        // a la flecha, ejecuta un loop, no es mantenido
        // food tiene que hacer updateposition? O es quitar y poner?
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.left}px`;
    }
}