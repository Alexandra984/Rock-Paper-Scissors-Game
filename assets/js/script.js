const game = ()=> {
    let playerScore = 0;
    let computerScore = 0;

    // Start to play
    const startGame = () => {
        const playBtn = document.querySelector(".intro2 button");
        const intro2 = document.querySelector(".intro2");
        const gameArea = document.querySelector(".game-area");

        playBtn.addEventListener("click", ()=> {
            intro2.classList.add("fadeOut");
            gameArea.classList.add("fadeIn");
        });
    }



    
    



    // call functions
    startGame();
    playGame();
};
game();