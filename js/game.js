class Game {
    constructor() {
        this.gameScreen = document.getElementById("game-screen");
        this.snake = new Snake(
            this.gameScreen,
            20,
            40,
            40,
            40,
            null //image
        );
        this.height = 500;
        this.width = 500;
        this.food = [];
        this.scoreElement = null;
        this.score = 0;
        this.gameIsOver = false;
    }

    start() {
        // aquí depende de lo que hagamos,
        // podría ser simplemente quitar el
        // mensaje que haya o algo
    }

    gameLoop() {
        // no sé si lo necesitamos
    }

    update() {


        // se pone el condicional del food
        // aquí se crean nuevos food
    }

    endGame() {
        this.gameIsOver = true;
        // activar style del game over
    }
}