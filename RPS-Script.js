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
    return prompt("Type which of the three you wish to play: ").toLowerCase();
}

// Play functions

/*
The function for playing a single round

Get the choices from the computer and player
Compare those against each other
Whichever wins has their score incremented, or in the case of a tie the tie counter is incremented
Then an output for who won that round and all score variables
*/

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
}

/*
The function for printing the winner and statistics for wins

Prints who won this round and the current statistics for wins
    Who won
    Player wins
    Ties
    Computer wins
*/

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

    // Print statistics
    console.log(`  Player wins: ${playerScore}`);
    console.log(`         Ties: ${tieScore}`);
    console.log(`Computer Wins: ${computerScore}`);
    console.log("");
}



// Testing for 1 round (this will test multiple however)
for (let i = 0; i < 12; i++) {
    playRound();
}