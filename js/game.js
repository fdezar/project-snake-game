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

    changeFoodPosition() {
        
    }

    update() {


        // se pone el condicional del food
        // aquí se crean nuevos food
        if(this.food.length < 1) {
            this.food.push(new Food(this.gameScreen));
        }
    }

    endGame() {
        if (
            directionX <= 0 || 
            directionX > 30 || 
            directionY <= 0 ||
            directionY > 30
            ) {
                this.gameIsOver = true;
            }
        
    }
}