//function that randomly returns “rock”, “paper” or “scissors”

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

//function to get the human choice

function getHumanChoice(){
    const choice = prompt("Choose between Rock, Paper, Scissors: ");
    return choice;
}


