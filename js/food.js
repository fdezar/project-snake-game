class Food extends Component {
    constructor(gameScreen) {
        super(
            gameScreen,
            null,
            0,
            50,
            100,
            "/images/x.png"
        );
    }

    // para generar un nuevo food una vez se
    // haya comido?
    move() {

        this.updatePosition();
    }
}