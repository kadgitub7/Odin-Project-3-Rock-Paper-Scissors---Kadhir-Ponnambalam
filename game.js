console.log("Hello, World!");
let humanScore = 0;
let computerScore = 0;
let compChoice;
let humanChoice;
playGame();

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
    return "Error";
}

function getHumanChoice(){
    let choiceOriginal = prompt("Enter your choice(Rock, Paper, Scissors): ");
    let choice = choiceOriginal.toLowerCase();
    do{
        if(choice ==="rock" || choice ==="paper" || choice === "scissors"){
            return choice;
        }else{
            choice = prompt("Enter your choice EXACTLY AS THE OPTIONS ARE(Rock, Paper, Scissors): ");
        }
    }while(true);
}

function playRound(humanChoice, compChoice){
    let humanVal = assignVal(humanChoice);
    let compVal = assignVal(compChoice);
    if(humanVal === 2 && compVal === 0){
        console.log("You lost this round");
        computerScore ++;
    }
    else if(compVal === 2 && humanVal === 0){
        console.log("You win this round!");
        humanScore ++;
    }
    else{
        if(humanVal > compVal){
        console.log("You win this round!");
        humanScore ++;
        }else if(compVal > humanVal){
            console.log("You lost this round");
            computerScore ++;
        }
        else{
            console.log("Tie");
        }
    }
    
}

function assignVal(choice){
    switch(choice){
        case"rock":
            return 0;
        case"paper":
            return 1;
        case"scissors":
            return 2;
    }
}

function playGame(){
    for(let i = 0; i<5; i++){
    compChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log("Computer choice: " + compChoice);
    console.log("Human choice: " + humanChoice);
    playRound(humanChoice, compChoice);
    }

    if(humanScore > computerScore){
        console.log("You win the game!");
    }
    else if(computerScore > humanScore){
        console.log("You lost the game!");
    }
    else{
        console.log("It's a tie!");
    }
}