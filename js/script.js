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

    
}