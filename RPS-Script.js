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

/*
Get the choice from the player

Get it from some console input
Check to make sure the choice is one of
    rock
    paper
    scissors
Return the choice (Odin said we don't need to do re-prompting for incorrect choices, so I won't)
*/
function getPlayerChoice() {
    return prompt("Type which of the three you wish to play: ").toLowerCase();
}

for (let i = 0; i < 10; i++) {
    console.log(getPlayerChoice());
}