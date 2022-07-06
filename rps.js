const possibleOutcome = ["rock", "paper", "scissors"];
let roundsWonByComputer = 0;
let roundsWonByPlayer = 0;

function computerPlay(){
    return possibleOutcome[Math.floor(Math.random() * 3)];
}

function playSingleRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if(!possibleOutcome.includes(playerSelection)){
        return "Wrong input. Please try again!"
    }

    if(playerSelection === computerSelection){
        return "You drew!"
    }

    if(playerSelection === "rock" && computerSelection === "scissors"){
        roundsWonByPlayer++;
        return "You win! Rock beats Scissors!"
    }

    if(playerSelection === "rock" && computerSelection === "paper"){
        roundsWonByComputer++;
        return "You lose! Paper beats Rock!"
    }

    if(playerSelection === "paper" && computerSelection === "scissors"){
        roundsWonByComputer++;
        return "You lose! Scissors beats Paper!"
    }

    if(playerSelection === "paper" && computerSelection === "rock"){
        roundsWonByPlayer++;
        return "You win! Paper beats Rock!"
    }

    if(playerSelection === "scissors" && computerSelection === "rock"){
        roundsWonByComputer++;
        return "You lose! Scissors beats Rock!"
    }

    if(playerSelection === "scissors" && computerSelection === "paper"){
        roundsWonByPlayer++;
        return "You win! Scissors beats Paper!"
    }
}

let value = prompt("What do you choose? (Rock, Paper, Scissors)");

console.log(playSingleRound(value, computerPlay()));