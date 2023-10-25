window.onload = () => {
    let restartButton;
    let newGame;

    restartButton.addEventListener("click", () => {
        restartGame();
    });

    const startGame = () => {
        console.log('start');
        newGame = new Game;

        newGame.start(); // poner que lo haremos
        // mediante escuchar una flecha
    }

    const restartGame = () => {
        location.reload();
    }

    // handle keys
    const handleKeydown = event => {
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowUp",
            "ArrowRight",
            "ArrowDown",
        ];

        if (possibleKeystrokes.includes(key)) {
            event.preventDefault();
        

        switch(key) {
            case "Arrowleft":
                newGame.snake.directionX = -1;
                newGame.snake.directionY = 0;
                break;
            case "ArrowUp":
                newGame.snake.directionX = 0;
                newGame.snake.directionY = -1;
                break;
            case "ArrowRight":
                newGame.snake.directionX = 1;
                newGame.snake.directionY = 0;
                break;
            case "ArrowDown":
                newGame.snake.directionX = 0;
                newGame.snake.directionY = 1;
                break;
            }
        }
    }

    const initGame = () => {

    }

    setInterval(initGame, 125);
    window.addEventListener("keydown", handleKeydown);
}