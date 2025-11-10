//function that randomly returns “rock”, “paper” or “scissors”

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
