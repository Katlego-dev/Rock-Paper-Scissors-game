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

function welcomeMsg(){
    alert("Welcome to the Rock-Paper-Scissors game, hope you Enjoy!!!")
}


//function to compare user input and computer choice
 function playRound(humanChoice, computerChoice){

   
    if(humanChoice === "rock" && computerChoice === "rock"){
        alert("Its a tie, you both chose Rock");
        alert("The score is: (You) " + humanScore + " - " + computerScore + " (Computer)");
          
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        alert("Computer wins, Paper covers Rock");
        computerScore++;
        alert("The score is: (You) " + humanScore + " - " + computerScore + " (Computer)");

    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        alert("You Win, Rock crushes Scissors");
         humanScore++;
        alert("The score is: (You) " + humanScore + " - " + computerScore + " (Computer)");
        
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        alert("Computer Wins, Scissors cut Paper");
        computerScore++;
        alert("The score is: (You) " + humanScore + " - " + computerScore + " (Computer)");

    }else if(humanChoice === "paper" && computerChoice === "rock"){
        alert("You Win, Paper covers Rock");
        humanScore++;
        alert("The score is: (You) " + humanScore + " - " + computerScore + " (Computer)");

    }else if(humanChoice === "paper" && computerChoice === "paper"){
        alert("Its a Tie, you both chose Paper");
        alert("The score is: (You) " + humanScore + " - " + computerScore + " (Computer)");

    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        alert("Computer Wins, Rock crushes Scissors");
        computerScore++;
        alert("The score is: (You) " + humanScore + " - " + computerScore + " Computer");
    
    }else if(humanChoice === "scissors" && computerChoice === "scissors"){
        alert("Its a Tie, you both chose Scissors");
        alert("The score is: (You) " + humanScore + " - " + computerScore + " (Computer)");

    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        alert("You Win, Scissors cut Paper");
        humanScore++;
        alert("The score is: (You) " + humanScore + " - " + computerScore + " (Computer)");
    }
 }

 //Function to calculate and display score.
 function calculateScore(){

    if(humanScore > computerScore){
        alert("Congratulations, You Won!!! Your score is: " + humanScore + " and the Computers score is: " + computerScore
        );
    }else if(humanScore < computerScore){
        alert("Unfortunately you have lost!!!, Your score is: " + humanScore + " and the Computer score is: " + computerScore);
    }else{
        alert("Game Over!!! It's a Draw")
    }
 }

//Calling the function to play 5 rounds and also call the function that calculates the score and determines the winner.
 welcomeMsg();
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 playRound(getHumanChoice(), getComputerChoice());
 calculateScore();