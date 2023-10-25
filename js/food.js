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

        this.directionX = 13;
        this.directionY = 10;
    }
}