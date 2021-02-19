
const rockPaperScissors = {
    userScore: 0,
    computerScore: 0,
    hasWon: false,
}

rockPaperScissors.game = function(e) {
    if (this.hasWon) this.reset();

    const user = e.target.innerText;
    const computer = this.getComputerPlay();
    const result = this.playRound(user, computer);

    this.updateResults(result);
}

rockPaperScissors.getComputerPlay = function() {
    const random = Math.random();
    if (random < .33) {
        return 'Rock';
    } else if (random < .66) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

rockPaperScissors.playRound = function(playerChoice, computerChoice) {
    let result = `Your Choice: ${playerChoice}
                    Computer Choice: ${computerChoice}\n`;

    if (playerChoice === computerChoice) {
        result += 'Result: Tie!\n';
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper' ||
                playerChoice === 'Paper' && computerChoice === 'Scissors' ||
                playerChoice === 'Scissors' && computerChoice === 'Rock') {
                    result += 'Result: You lose! :(\n';
                    this.computerScore++;
    } else {
        result += 'Result: You win!!!\n';
        this.userScore++;
    }
    return result;
}

rockPaperScissors.updateResults = function(result) {
    const resultElement = document.createElement('p');
    resultElement.innerText = result;
    displayElement.appendChild(resultElement);
    userScoreElement.innerText = `Your Score: ${this.userScore}`;
    computerScoreElement.innerText = `Computer Score: ${this.computerScore}`;
    this.checkWinner();
}

rockPaperScissors.checkWinner = function() {
    if (this.userScore === 5 || this.computerScore === 5) {
        if (this.userScore === 5) {
            winnerElement.innerText = 'Congratulations, you win!!!';
        } else {
            winnerElement.innerText = 'Computer wins :('
        }
        this.hasWon = true;
    }
}

rockPaperScissors.reset = function() {
    this.hasWon = false;
    this.userScore = 0;
    this.computerScore = 0;
    userScoreElement.innerText = 'Your Score: 0';
    computerScoreElement.innerText = 'Computer Score: 0';
    displayElement.innerText = '';
    winnerElement.innerText = '';
}



const displayElement = document.querySelector('#display');
const userScoreElement = document.querySelector('#user-score');
const computerScoreElement = document.querySelector('#computer-score');
const winnerElement = document.querySelector('#winner');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => rockPaperScissors.game(e));
});





// class RockPaperScissors {
//     constructor() {
//         this.userScore = 0;
//         this.computerScore = 0;
//         this.hasWon = false;
//     }

//     getComputerPlay() {
//         const random = Math.random();
//         if (random < .33) {
//             return 'Rock';
//         } else if (random < .66) {
//             return 'Paper';
//         } else {
//             return 'Scissors';
//         }
//     }

//     playRound(playerChoice, computerChoice) {
//         let result = `Your Choice: ${playerChoice}
//                         Computer Choice: ${computerChoice}\n`;

//         if (playerChoice === computerChoice) {
//             result += 'Result: Tie!\n';
//         } else if (playerChoice === 'Rock' && computerChoice === 'Paper' ||
//                     playerChoice === 'Paper' && computerChoice === 'Scissors' ||
//                     playerChoice === 'Scissors' && computerChoice === 'Rock') {
//                         result += 'Result: You lose! :(\n';
//                         this.computerScore++;
//         } else {
//             result += 'Result: You win!!!\n';
//             this.userScore++;
//         }
//         return result;
//     }

//     game(e) {
//         if (this.hasWon) this.reset();

//         const user = e.target.innerText;
//         const computer = this.getComputerPlay();
//         const result = this.playRound(user, computer);

//         this.updateResults(result);
//     }

//     updateResults(result) {
//         const resultElement = document.createElement('p');
//         resultElement.innerText = result;
//         displayElement.appendChild(resultElement);
//         userScoreElement.innerText = `Your Score: ${this.userScore}`;
//         computerScoreElement.innerText = `Computer Score: ${this.computerScore}`;
//         this.checkWinner();
//     }

//     checkWinner() {
//         if (this.userScore === 5 || this.computerScore === 5) {
//             if (this.userScore === 5) {
//                 winnerElement.innerText = 'Congratulations, you win!!!';
//             } else {
//                 winnerElement.innerText = 'Computer wins :('
//             }
//             this.hasWon = true;
//         }
//     }

//     reset() {
//         this.hasWon = false;
//         this.userScore = 0;
//         this.computerScore = 0;
//         userScoreElement.innerText = 'Your Score: 0';
//         computerScoreElement.innerText = 'Computer Score: 0';
//         displayElement.innerText = '';
//         winnerElement.innerText = '';
//     }
// }

// const rockPaperScissors = new RockPaperScissors();

