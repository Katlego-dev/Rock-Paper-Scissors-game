let humanScore = 0;
let computerScore = 0;

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
//function to compare user input and computer choice
 function playRound(humanChoice, computerChoice){
    
    if(humanChoice === "rock" && computerChoice === "rock"){
        alert("Its a tie, you both chose Rock");
        alert("The score is: " + humanScore + " - " + computerScore);
          
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        alert("Computer wins, Paper covers Rock");
        computerScore++;
        alert("The score is: " + humanScore + " - " + computerScore);

    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        alert("You Win, Rock crushes Scissors");
         humanScore++;
        alert("The score is: " + humanScore + " - " + computerScore);
        
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        alert("Computer Wins, Scissors cut Paper");
        computerScore++;
        alert("The score is: " + humanScore + " - " + computerScore);

    }else if(humanChoice === "paper" && computerChoice === "rock"){
        alert("You Win, Paper covers Rock");
        humanScore++;
        alert("The score is: " + humanScore + " - " + computerScore);

    }else if(humanChoice === "paper" && computerChoice === "paper"){
        alert("Its a Tie, you both chose Paper");
        alert("The score is: " + humanScore + " - " + computerScore);

    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        alert("Computer Wins, Rock crushes Scissors");
        computerScore++;
        alert("The score is: " + humanScore + " - " + computerScore);
    
    }else if(humanChoice === "scissors" && computerChoice === "scissors"){
        alert("Its a Tie, you both chose Scissors");
        alert("The score is: " + humanScore + " - " + computerScore);

    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        alert("You Win, Scissors cut Paper");
        humanScore++;
        alert("The score is: " + humanScore + " - " + computerScore);
    }
 }
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());