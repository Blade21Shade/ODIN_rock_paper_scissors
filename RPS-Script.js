
/*
Get the computer's choice

This will get the choice of the computer
This will be done by getting a random number, 1-3
 1 will be rock
 2 will be paper
 3 will be scissors
Then the function will return the choice as a string
*/

let rockCount = 0;
let paperCount = 0;
let scissorsCount = 0;

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

for (let i = 0; i < 3000000; i++) {
    getComputerChoice();
}

console.log(rockCount, paperCount, scissorsCount);