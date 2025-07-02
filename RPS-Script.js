// Scores
let playerScore = 0;
let tieScore = 0;
let computerScore = 0;

// getChoice functions
function getComputerChoice() {
    let num = Math.random();
    
    let choice;
    // This isn't a perfect 1/3 split for each choice but it is close enough
    if (num > 0.66) {
        choice = "rock";
    } else if (num > 0.33) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function getPlayerChoice() {
    // return prompt("Type which of the three you wish to play: ").toLowerCase();
}

// Play functions

/*
Function for playing multiple games

Asks the user how many rounds they want to play
Then plays that many rounds
    Prints the round number
    Call the function for playing a round
*/
function playGame() {
    // let numOfGames = parseInt(prompt("How many rounds would you like to play?"));
    for (let i = 0; i < /*numOfGames*/ 2; i++) {
        console.log(`Round: ${i+1}`);
        playRound();
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    let winner = "";

    switch(playerChoice) {
        case "rock":
            if (computerChoice === "rock") {
                winner = "tie";
            } else if (computerChoice === "paper") {
                winner = "computer";
            } else { // scissors
                winner = "player";
            }
            break;
        
        case "paper":
            if (computerChoice === "rock") {
                winner = "player";
            } else if (computerChoice === "paper") {
                winner = "tie";
            } else { // scissors
                winner = "computer";
            }
            break;

        case "scissors":
            if (computerChoice === "rock") {
                winner = "computer";
            } else if (computerChoice === "paper") {
                winner = "player";
            } else { // scissors
                winner = "tie";
            }
            break;
    }

    printWinnerInfo(winner, playerChoice, computerChoice);
    printWinnerStatistics();
}

function printWinnerInfo(roundWinner, playerChoice, computerChoice) {
    // Print who won this round
    if (roundWinner === "player") {
        console.log(`Player wins! ${playerChoice} beats ${computerChoice}!`);
        playerScore++;
    } else if (roundWinner === "computer") {
        console.log(`Computer wins! ${computerChoice} beats ${playerChoice}!`);
        computerScore++;
    } else { // tie
        console.log(`Tie! Player chose ${playerChoice} and computer chose ${computerChoice}!`);
        tieScore++;
    }
}

function printWinnerStatistics() {
    // Print statistics
    console.log(`  Player wins: ${playerScore}`);
    console.log(`         Ties: ${tieScore}`);
    console.log(`Computer Wins: ${computerScore}`);
    console.log("");
}

// Running code
playGame();