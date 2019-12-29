const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    // Start to play
    const startGame = () => {
        const playBtn = document.querySelector(".intro2 button");
        const intro2 = document.querySelector(".intro2");
        const gameArea = document.querySelector(".game-area");

        playBtn.addEventListener("click", ()=> {
            intro2.classList.add("fadeOut");
            gameArea.classList.add("fadeIn");
        });
    };
    
    // Play Game
    const playGame = () => {
        const options = document.querySelectorAll(".options button");
        console.log(options);
        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                // COMPARE HANDS
                compareHands(this.textContent, computerChoice);

                // UPDATE IMAGES
                const playerHand = document.querySelector(".player-hand");
                const computerHand = document.querySelector(".computer-hand");
                
                playerHand.src = `./assets/img/${this.textContent}.png`;
                computerHand.src = `./assets/img/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector("player-score p");
        const computerScore = document.querySelector("computer-score p");
        
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;        
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".message");
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }

        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }

    // call functions
    startGame();
    playGame();
};
game();