const humanScore = 0;
const computerScore = 0;

//function that randomly returns “rock”, “paper” or “scissors”

function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)].toLowerCase();
}

//function to get the human choice

function getHumanChoice(){
    const choice = prompt("Choose between Rock, Paper, Scissors: ");
    return choice.toLowerCase();
    
}
 function playRound(humanChoice, computerChoice){
    
    if(humanChoice === "rock" && computerChoice === "rock"){
        alert("Its a Draw, both chose Rock");
       
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        alert("Computer wins, Paper covers Rock");

    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        alert("You Win, Rock crushes Scissors");

    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        alert("Computer Wins, Scissors cut Paper");

    }else if(humanChoice === "paper" && computerChoice === "rock"){
        alert("You Win, Paper covers Rock");

    }else if(humanChoice === "paper" && computerChoice === "paper"){
        alert("Its a Draw, you both chose Paper");

    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        alert("Computer Wins, Rock crushes Scissors");
    
    }else if(humanChoice === "scissors" && computerChoice === "scissors"){
        alert("Its a Draw, you both chose Scissors");

    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        alert("You Win, Scissors cut Paper");
    }
 }
 playRound(getHumanChoice(), getComputerChoice());