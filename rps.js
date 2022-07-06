const possibleOutcome = ["Rock", "Paper", "Scissors"];
let roundsWonByComputer = 0;
let roundsWonByPlayer = 0;

function computerPlay(){
    return possibleOutcome[Math.floor(Math.random() * 3)];
}

function playSingleRound(playerSelection, computerSelection){

    if(!possibleOutcome.includes(playerSelection)){
        return "Wrong input. Please try again!"
    }

    if(playerSelection === computerSelection){
        return "You drew!"
    }

    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        roundsWonByPlayer++;
        return "You win! Rock beats Scissors!"
    }

    if(playerSelection === "Rock" && computerSelection === "Paper"){
        roundsWonByComputer++;
        return "You lose! Paper beats Rock!"
    }

    if(playerSelection === "Paper" && computerSelection === "Scissors"){
        roundsWonByComputer++;
        return "You lose! Scissors beats Paper!"
    }

    if(playerSelection === "Paper" && computerSelection === "Rock"){
        roundsWonByPlayer++;
        return "You win! Paper beats Roc!"
    }

    if(playerSelection === "Scissors" && computerSelection === "Rock"){
        roundsWonByComputer++;
        return "You lose! Scissors beats Rock!"
    }

    if(playerSelection === "Scissors" && computerSelection === "Paper"){
        roundsWonByPlayer++;
        return "You win! Scissors beats Paper!"
    }
}

let value = prompt("What do you choose? (Rock, Paper, Scissors)");
console.log(value)

console.log(playSingleRound(value, computerPlay()));