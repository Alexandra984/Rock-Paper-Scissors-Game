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
                
            });
        });
        const compareHands = (playerChoice, computerChoice) => {
            const winner = document.querySelector(".winner-message");
            
            if (playerChoice === computerChoice) {
                winner.textContent = "It is a tie";
                return;
            }

            if (playerChoice === 'rock') {
                if (computerChoice === 'scissors') {
                    winner.textContent = "Player Wins";
                    return;
                } else {
                    winner.textContent = "Computer Wins";
                    return;
                }
            }

            if (playerChoice === 'paper') {
                if (computerChoice === 'scissors') {
                    winner.textContent = "Computer Wins";
                    return;
                } else {
                    winner.textContent = "Player Wins";
                    return;
                }
            }

            if (playerChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    winner.textContent = "Computer Wins";
                    return;
                } else {
                    winner.textContent = "Player Wins";
                    return;
                }
            }
        }
    };

    // call functions
    startGame();
    playGame();
};
game();