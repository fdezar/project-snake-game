class Snake extends Component {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        super(gameScreen, left, top, width, height, imgSrc);

        this.snakeBody = [];
        this.directionX = 0;
        this.directionY = 0;
    }

    move() {

    }

    updatePosition() {

        // a ver cómo hacemos esto. El snake lo que tiene es que al darle
        // a la flecha, ejecuta un loop, no es mantenido
        // food tiene que hacer updateposition? O es quitar y poner?
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.left}px`;
    }

    didEatFood() {
        const snakeRect = this.element.getBoundingClientRect();
        const foodRect = food.element.getBoundingClientRect();


    }

    crashIntoWall() {
        
    }
}