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
                // habría que hacer un loop mantenido?
                newGame.snake.directionX = null;
                break;
            case "ArrowUp":
                break;
            case "ArrowRight":
                break;
            case "ArrowDown":
                break;
            }
        }
    }

    window.addEventListener("keydown", handleKeydown);
}