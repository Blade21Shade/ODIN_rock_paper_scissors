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
        rockCount++;
    } else if (num > 0.33) {
        choice = "paper";
        paperCount++;
    } else {
        choice = "scissors";
        scissorsCount++;
    }

    return choice;
}

function getPlayerChoice() {
    return prompt("Type which of the three you wish to play: ").toLowerCase();
}
